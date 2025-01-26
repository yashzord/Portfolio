import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Bootstrap & Bootstrap Icons CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// AOS: For optional JavaScript initialization
import AOS from "aos";
import "aos/dist/aos.css";

// Custom Styles
import "./App.css";

AOS.init(); // Initialize AOS once globally

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
