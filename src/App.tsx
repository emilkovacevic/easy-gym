import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LogIn from "./pages/homePage/Contact";
import Footer from "./views/footer/Footer";
import Header from "./views/header/Header";
import HomePage from "./pages/homePage/HomePage";
import Navbar from "./views/navbar/Navbar";

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
        element: <HomePage /> 
      },
      {
        path: "/login",
        element: <LogIn /> 
      },
      {
        path: "/register",
        element: <LogIn /> 
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
