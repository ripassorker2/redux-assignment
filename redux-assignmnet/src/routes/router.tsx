import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import AllBooks from "../pages/AllBooks/AllBooks";
import BookDetails from "../components/BookDetails";
import AddBook from "../components/AddBook";
import UpdateBook from "../components/UpdateBook";
import Resister from "../pages/Resister/Resister";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-books",
        element: <AllBooks />,
      },
      {
        path: "/details/:id",
        element: <BookDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/book/${params.id}`),
      },
      {
        path: "/add-book",
        element: <AddBook />,
      },
      {
        path: "/update-book/:id",
        element: <UpdateBook />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/resister",
        element: <Resister />,
      },
    ],
  },

  {
    path: "*",
    element: <p>Not found.....................</p>,
  },
]);

export default router;
