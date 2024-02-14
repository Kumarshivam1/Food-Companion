import React, { lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext.js";
import {Provider} from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";

// const About = lazy(() => import("./components/About.js"));

const AppLayout = () => {
  const [username, setUsername] = useState("Default");

  useEffect(() => {
    const data = {
      name: "Kumar Shivam",
    };
    setUsername(data.name);
  }, []);

  return (                 
    <Provider store={appStore}>
                                  {/* //overRiding default value in usercontext */}
    <UserContext.Provider value={{ loggedInUser: username, k:1, setUsername }}>
      <div className="app">    
      <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],

    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
