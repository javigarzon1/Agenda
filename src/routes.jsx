import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AddContact from "./pages/AddContact";
import EditContact from "./pages/EditContact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add-contact",
    element: <AddContact />,
  },
  {
    path: "/edit-contact/:id",
    element: <EditContact />,
  },
]);

export default router;
