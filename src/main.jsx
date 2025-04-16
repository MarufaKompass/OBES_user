import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { ContextProvider } from "../components/contextAPI/MainContextProvider.jsx";
import { ToastContainer } from 'react-toastify';
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ContextProvider>
    <ToastContainer />
  </StrictMode>
);
