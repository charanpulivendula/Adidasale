import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider, Route} from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Visual from './pages/Visual';
import Layout from './pages/Layout';
import AboutUsPage from './pages/AboutUsPage';
import Create from './pages/Create';
import Home from './pages/Home';
import HandleEdit from './pages/HandleEdit';
import { elements } from 'chart.js';
import DashboardUser from './pages/DashboardUser';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path : "/",
        element : <Home/>
      },
      {
        path:'/dashboard',
        element:<Dashboard/>
      },
      {
        path:'/userdashboard',
        element:<DashboardUser/>
      },
      {
        path:'/visual',
        element:<Visual/>
      },
      {
        path : '/add',
        element:<Create/>
      },
      {
        path : '/update',
        element:<HandleEdit/>
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Register/>
      },
      {
        path: "/about",
        element:<AboutUsPage/>
      }
    ]
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
