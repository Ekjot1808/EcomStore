import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";
import MainLayout from "./layouts/MainLayout";
import ProductDetail from "./pages/ProductDetail";
import { createBrowserRouter, RouterProvider } from "react-router";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/auth",
          element: <Auth />
        },
        {
          path: "/checkout",
          element: <Checkout />
        },
        {
          path: "/products/:id",
          element: <ProductDetail />
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App;