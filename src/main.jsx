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
import AddToys from "./Pages/AddToys/AddToys.jsx";
import PrivateRoute from "./route/PrivateRoute.jsx";
import MyToys from "./Pages/MyToys/MyToys.jsx";
import AllToys from "./Pages/AllToys/AllToys.jsx";
import Error from "./Pages/Shared/Error/Error.jsx";
import ViewDetails from "./Pages/AllToys/ViewDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allToys",
        element: <AllToys />,
        loader: () => fetch("https://kids-day-server.vercel.app/allToys"),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <ViewDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://kids-day-server.vercel.app/allToys/${params.id}`),
      },
      {
        path: "/myToys",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: "/addToys",
        element: (
          <PrivateRoute>
            <AddToys />,
          </PrivateRoute>
        ),
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
