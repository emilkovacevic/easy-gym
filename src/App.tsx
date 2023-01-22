import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Register from "./pages/register/Register";
import Footer from "./views/footer/Footer";
import Header from "./views/header/Header";
import Index from "./pages/homePage/Index";
import Navbar from "./views/navbar/Navbar";
import Login from "./pages/login/Login";
import Product from "./pages/products/Product";
import  store  from './redux/store'
import {Provider} from 'react-redux'

const Layout = () => {
  return (
    // setup global background and text colors with tailwind 
    // fix overflow navbar and x scroll
    <>
    <div className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
      <div className="relative flex flex-col min-h-screen justify-between">
        <Header />
        <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      </div>
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
        path: "/login",
        element: <Login /> 
      },
      {
        path: "/register",
        element: <Register /> 
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
