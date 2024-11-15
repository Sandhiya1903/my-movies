import ReactDOM from "react-dom/client";
import "./index.css";

import store from "./redux/store.js";

import App from "./App.jsx";
import { Route, RouterProvider, createRoutesFromElements } from "react-router";

import { createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import PrivateRoute from "./pages/Auth/PrivateRoutes.jsx";

//Auth
import AdminRoute from "./pages/Admin/AdminRoutes.jsx";
import GenreList from "./pages/Admin/GenreList.jsx";
//Restricted
import Login from "./pages/Auth/Login.jsx";
import Register from "./pages/Auth/Register.jsx";
import Home from "./pages/Home.jsx";
import Profile from "./pages/User/Profile.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="" element={<AdminRoute />}>
        <Route path="/admin/movies/genre" element={<GenreList />} />
        </Route>
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
