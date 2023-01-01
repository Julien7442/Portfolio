import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// React.createRoot creates a root for a React tree and returns a container that can be used to update the tree
const root = ReactDOM.createRoot(document.getElementById('root'));

// The root.render function is used to render a React element to the container
root.render(
  // The React.Fragment component is used to group a set of children without adding extra nodes to the DOM
  <React.Fragment>
    {/* The App component is the root component of the application */}
    <App />
  </React.Fragment>
);

