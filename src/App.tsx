import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Register from "./pages/register/Register";
import Footer from "./views/footer/Footer";
import Header from "./views/header/Header";
import Index from "./pages/homePage/Index";
import Navbar from "./views/navbar/Navbar";
import Login from "./pages/login/Login";

const Layout = () => {
  return (
    // setup global background and text colors with tailwind
    <div className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
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
    <div>
      <RouterProvider router={Router} />
    </div>
  );
};

export default App;
