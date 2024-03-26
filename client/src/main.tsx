import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { DashContextProvider } from "./contexts/ContextsProvider.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootPage } from "./pages/index.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DashContextProvider>
      <App />
    </DashContextProvider>
  </React.StrictMode>
);
