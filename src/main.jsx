import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { ContextProvider } from "../components/contextAPI/MainContextProvider.jsx";
import { ToastContainer } from 'react-toastify';
import { QueryClientProvider, QueryClient} from '@tanstack/react-query';
const queryClient = new QueryClient()
createRoot(document.getElementById("root")).render(

  <StrictMode>
    <ContextProvider>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </QueryClientProvider>
    </ContextProvider>
    <ToastContainer />
  </StrictMode>
);
