import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <p>Home</p>,
      },
    ],
  },

  {
    path: "*",
    element: <p>Not found.....................</p>,
  },
]);

export default router;
