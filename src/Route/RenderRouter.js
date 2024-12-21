import { Routes } from "react-router-dom";
import Home from "../views/User/Home/Home";
import { routes } from "./routes";
import { Route } from "react-router-dom";
import DefaultLayout from "../views/User/DefaultLayout/DefaultLayout";
import Category from "../views/User/Category/Category";
import Login from "../views/Authentic/Login/Login";
import Register from "../views/Authentic/Register/Register";

function RenderRouter() {
    const userroutes = [
        {path: routes.User.HOME, element: <Home/>},
        {path: routes.User.CATEGORY, element: <Category/>},
    ];
    const authroutes = [
        {path: routes.AUTHENTIC.LOGIN, element: <Login/>},
        {path: routes.AUTHENTIC.REGISTER, element: <Register/>}
    ];

  return (
    <>
        <Routes>
            {userroutes.map((route, index) => (
                <Route key={index} path={route.path} element={<DefaultLayout>{route.element}</DefaultLayout>} />
            ))}
            {authroutes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
            ))}
        </Routes>
    </>
  );
}

export default RenderRouter;