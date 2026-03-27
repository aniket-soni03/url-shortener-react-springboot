import React from "react";
import { RouterProvider } from "react-router-dom";
import MyRoutes from "./routes/MyRoutes";
import './styles/App.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="app-container" id="app-container">
      <RouterProvider router={MyRoutes} />
      <ToastContainer />
    </div>
  );
}

export default App;
