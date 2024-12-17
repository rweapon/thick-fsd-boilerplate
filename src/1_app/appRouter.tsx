import BaseLayout from "@app/layouts/BaseLayout";
import { ErrorPage } from "@pages/Error";
import Home from "@pages/Home/ui/Page";
import { createBrowserRouter } from "react-router-dom";

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: (
      <main className="base-layout">
        <ErrorPage />
      </main>
    ),
    children: [
      { path: "/", element: <Home /> },
    ],
  },
]);
