import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { DashContextProvider } from "./contexts/ContextsProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DashContextProvider>
      <App />
    </DashContextProvider>
  </React.StrictMode>
);
