import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

function App() {
  return (
    <div className="font-serif">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
