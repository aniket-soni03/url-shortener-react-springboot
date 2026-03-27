import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Stats from "../pages/Stats";
import NotFound from "../pages/NotFound";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Healthz from "../components/Healthz";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Dashboard />
        <Footer />
      </>
    ),
  },
  {
    path: "/code/:code",
    element: (
      <>
        <Header />
        <Stats />
        <Footer />
      </>
    ),
  },
  {
    path : "/healthz",
    element : <Healthz/>
  },
  {
    path: "*",
    element: (
      <>
        <Header />
        <NotFound />
        <Footer />
      </>
    ),
  },
]);

export default router;
