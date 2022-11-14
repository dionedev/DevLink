import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home'
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Error from "./pages/Error";
import { ProtectedRoute } from "./routes/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: 'admin',
    element: <ProtectedRoute> <Admin/> </ProtectedRoute>
  },
  {
    path: '*',
    element: <Error/>
  }
])

export { router };