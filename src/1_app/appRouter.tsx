import { ErrorPage } from "@pages/Error";
import { Home } from "@pages/Home";
import { APP_BASENAME, AppPaths } from "@shared/model/configs";
import { createBrowserRouter } from "react-router-dom";

import BaseLayout from "./layouts/BaseLayout";

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: <ErrorPage />,
    children: [{
      path: AppPaths.HOME,
      element: <Home />,
    }],
  },
], {
  basename: APP_BASENAME,
});
