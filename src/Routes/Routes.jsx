import React from "react";
import { createBrowserRouter } from "react-router";
import ErrorPage from "../pages/ErrorPage";
``;
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import AllApps from "../pages/AllApps/AllApps";
import AppDetails from "../pages/Home/AppDetails";
import Installation from "../pages/Installation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("apps.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "apps",
        loader: () => fetch("apps.json"),
        Component: AllApps,
      },
      {
        path: "appDetails/:id",
        loader: () => fetch("apps.json"),
        Component: AppDetails,
      },
      {
        path: "apps/appDetails/:id",
        loader: () => fetch("apps.json"),
        Component: AppDetails,
      },
      {
        path: "installation",
        Component: Installation,
      },
    ],
  },
]);
