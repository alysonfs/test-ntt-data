import React from "react"
import ReactDOM from "react-dom/client"
import "@ntt-data/ui/base.scss"
import Home from "./pages/home/home.page"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
])

const root = document.getElementById("root") as HTMLElement

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
