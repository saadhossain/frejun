import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { MainRouters } from "./Routers/MainRouters";

function App() {
  const routes = MainRouters
  return (
    <div>
      <RouterProvider router={routes}/>
      <Toaster/>
    </div>
  );
}

export default App;
