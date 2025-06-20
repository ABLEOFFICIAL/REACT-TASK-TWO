import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ToggleProvider from "./context/ToggleContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ToggleProvider>
        <App />
      </ToggleProvider>
    </BrowserRouter>
  </StrictMode>
);
