import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home'
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Error from "./pages/Error";
import SocialNetwork from "./pages/SocialNetwork";
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
  },
  {
    path: 'admin/social',
    element: <ProtectedRoute><SocialNetwork /></ProtectedRoute>
  }
])

export { router };