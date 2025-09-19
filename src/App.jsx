import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router"
import Layout from "./pages/Layout";
import Mercury from "./pages/Mercury";
import Venus from "./pages/Venus";
import Earth from "./pages/Earth";
import Mars from "./pages/Mars";
import Jupiter from "./pages/Jupiter";
import Saturn from "./pages/Saturn";
import Uranus from "./pages/Uranus";
import Neptune from "./pages/Neptune";


function App() {

  const router =  createBrowserRouter([
    {
    element:<Layout />,
    children: [
      {
        index: true,
        element: <Mercury />
      },
      {
        path: '/venus',
        element: <Venus />
      },
      {
        path: '/earth',
        element: <Earth />
      },
      {
        path: '/mars',
        element: <Mars />
      },
      {
        path: '/jupiter',
        element: <Jupiter />
      },
      {
        path: '/saturn',
        element: <Saturn />
      },
      {
        path: '/uranus',
        element: <Uranus />
      },
      {
        path: '/neptune',
        element: <Neptune />
      },
    ],
    },
]);

  return <RouterProvider router={router}/>
  
}

export default App
