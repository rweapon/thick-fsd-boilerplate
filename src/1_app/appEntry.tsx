import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { appRouter } from "./appRouter";
import AppProvider from "./providers/AppProvider";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={appRouter} />
    </AppProvider>
  </StrictMode>,
);
