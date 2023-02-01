import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Register from "./pages/register/Register";
import Footer from "./views/footer/Footer";
import Header from "./views/header/Header";
import Index from "./pages/homePage/Index";
import Login from "./pages/login/Login";
import Product from "./pages/products/Product";
import store from './redux/store'
import { Provider } from 'react-redux'
import FourOhFour from "./pages/FourOhFour/FourOhFour";
import FAQ from "./pages/FAQ/FAQ";

const Layout = () => {
  return (
    // setup global background and text colors with tailwind 
    // fix overflow navbar and x scroll
    <>
      <div className="bg-light-background dark:bg-dark-background min-h-screen text-light-text dark:text-dark-text relative flex flex-col justify-between">
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
      </div>
    </>
  );
};

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Index />
      },
      {
        path: "/products",
        element: <Product />
      },
      {
        path: "/faq",
        element: <FAQ />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/*",
        element: <FourOhFour />
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={Router} />
    </Provider>
  );
};

export default App;
