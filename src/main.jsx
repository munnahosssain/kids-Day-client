import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home/Home.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import Login from "./Pages/Shared/Login/Login.jsx";
import Register from "./Pages/Shared/Register/Register.jsx";
import Blog from "./Pages/Blog/Blog.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allToys",
        element: <div>About</div>,
      },
      {
        path: "/myToys",
        element: <div>About</div>,
      },
      {
        path: "/addToys",
        element: <div>About</div>,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
