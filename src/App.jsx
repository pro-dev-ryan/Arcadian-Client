import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/router";

function App() {
  return (
    <div data-theme="mytheme">
      <button className="btn bg-primary">hello</button>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
