import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import AllBooks from "../pages/AllBooks/AllBooks";

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
    ],
  },

  {
    path: "*",
    element: <p>Not found.....................</p>,
  },
]);

export default router;
