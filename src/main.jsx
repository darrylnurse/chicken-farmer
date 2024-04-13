import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './routes/Home.jsx'
import Root from './routes/Root.jsx'
import New from "./routes/New.jsx";
import All from "./routes/All.jsx";
import Details from './routes/Details.jsx';
import Edit from "./routes/Edit.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/new",
        element: <New />
      },
      {
        path: "/all",
        element: <All />
      },
      {
        path: "/details/:id",
        element: <Details />
      },
      {
        path: "/edit/:id",
        element: <Edit />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
