import { Routes } from "react-router-dom";
import Home from "../views/Home/Home";
import { routes } from "./routes";
import { Route } from "react-router-dom";
import DefaultLayout from "../views/DefaultLayout/DefaultLayout";
import Category from "../views/Category/Category";

function RenderRouter() {
    const userroutes = [
        {path: routes.User.HOME, element: <Home/>},
        {path: routes.User.CATEGORY, element: <Category/>}
    ];

  return (
    <DefaultLayout>
        <Routes>
            {userroutes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
            ))}
        </Routes>
    </DefaultLayout>
  );
}

export default RenderRouter;