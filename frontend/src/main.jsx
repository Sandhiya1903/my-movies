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
import CreateMovies from "./pages/Admin/CreateMovies.jsx";
import AdminMoviesList from "./pages/Admin/AdminMoviesList.jsx";
import UpdateMovie from "./pages/Admin/UpdateMovie.jsx";
//Restricted
import Login from "./pages/Auth/Login.jsx";
import Register from "./pages/Auth/Register.jsx";
import Home from "./pages/Home.jsx";
import Profile from "./pages/User/Profile.jsx";
import MovieDetails from "./pages/Movies/MovieDetails.jsx";

import AllMovies from "./pages/Movies/AllMovies.jsx";
import AllComments from "./pages/Movies/AllComments.jsx";
import AdminDashboard from "./pages/Admin/Dashboard/AdminDashboard.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/movies" element={<AllMovies />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/movies/:id" element={<MovieDetails />} />

      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="" element={<AdminRoute />}>
          <Route path="/admin/movies/genre" element={<GenreList />} />
          <Route path="/admin/movies/create" element={<CreateMovies />} />
          <Route path="/admin/movies-list" element={<AdminMoviesList />} />
          <Route path="/admin/movies/update/:id" element={<UpdateMovie />} />
          <Route path="/admin/movies/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/movies/comments" element={<AllComments />} />
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
