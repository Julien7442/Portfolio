import React, { useState, useEffect } from 'react';
import Preloader from '../src/components/Pre';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './style.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './components/ScrollToTop';

function App() {
  // useState hook is used to manage state within a functional component
  // load is the current state, and upadateLoad is a function to update the state
  const [load, upadateLoad] = useState(true);

  // useEffect hook is used to perform side effects (e.g. API calls, timers) in functional components
  // The empty array as the second argument tells the hook to only run on initial render
  useEffect(() => {
    // Set a timer to update the load state after 1200ms (1.2 seconds)
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    // The return function is called when the component unmounts (e.g. when the user navigates to a different page)
    // It is used to clear the timer so that it doesn't continue to run in the background
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* The Preloader component displays a loading screen while the load state is true */}
      <Preloader load={load} />
      {/* The div element with the "App" class contains the main content of the site */}
      {/* The id attribute is used to toggle the "no-scroll" and "scroll" class depending on the load state */}
      <div className="App" id={load ? 'no-scroll' : 'scroll'}>
        {/* The Navbar component renders the navigation bar at the top of the page */}
        <Navbar />
        {/* The ScrollToTop component is used to scroll to the top of the page when the user navigates to a new route */}
        <ScrollToTop />
        {/* The Routes component is used to define the different routes in the application */}
        {/* Each Route component specifies a path and a React element to render when the path matches the current location */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
