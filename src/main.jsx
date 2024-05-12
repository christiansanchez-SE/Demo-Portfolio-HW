import React from 'react'
import { StrictMode } from "react";
// import ReactDOM from 'react-dom/client'
import ReactDOM from "react-dom";
import App from './App.jsx'
// import './index.css'

// Import BrowserRouter
import { BrowserRouter as Router} from "react-router-dom";

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

// Wrap the App component with the BrowserRouter component to enable the router features.
ReactDOM.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
  document.getElementById("root")
);
