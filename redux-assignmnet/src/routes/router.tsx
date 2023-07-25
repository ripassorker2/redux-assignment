import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import AllBooks from "../pages/AllBooks/AllBooks";
import BookDetails from "../components/BookCard/BookDetails";

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
        path: "/all-books",
        element: <AllBooks />,
      },
    ],
  },

  {
    path: "*",
    element: <p>Not found.....................</p>,
  },
]);

export default router;
