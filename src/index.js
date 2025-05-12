import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes";
import "bootstrap/dist/css/bootstrap.min.css"; // Asegúrate de instalar Bootstrap: npm install bootstrap

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
