import { createBrowserRouter } from "react-router-dom"; // ;-> tidak wajib ada
import App from "./App";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Stuff from "./pages/Stuff";
import StuffTrash from "./pages/StuffTrash";
import User from "./pages/User";
// import InboundCreate from "./pages/InboundCreate";

export const router = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: '/login', element: <Login /> },
    { path: '/profile', element: <Profile />},
    { path: '/dashboard', element: <Dashboard/>},
    { path: '/stuffs', element: <Stuff />},
    { path: '/stuffs/trash', element: <StuffTrash />},
    { path: '/users', element: <User />}
    // { path: '/inbound', element:  <Inbound />},

])