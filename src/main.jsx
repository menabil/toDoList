import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// Global CSS (Tailwind + custom animations)
import "./index.css";

// React 18 এর createRoot API দিয়ে #root div এ App mount করা হচ্ছে
ReactDOM.createRoot(document.getElementById("root")).render(
  // StrictMode development এ double-render করে bugs ধরতে সাহায্য করে
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
