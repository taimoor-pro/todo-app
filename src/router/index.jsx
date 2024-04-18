import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./helper";
import Protected from "./protected";
import { Login } from "../pages/Auth/login";
import { SignUp } from "../pages/Auth/signup";
import { Dashboard } from "../pages/Dashboard";
import { NotFound } from "../pages/NotFound";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path={routes.LOGIN} element={<Login />} />
        <Route path={routes.SIGNUP} element={<SignUp />} />

        <Route element={<Protected />}>
          <Route path={routes.DASHBOARD} element={<Dashboard />} />
          <Route path="/" element={<Navigate to={routes.DASHBOARD} />} />
        </Route>

        <Route path={routes.NOTFOUND} element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Router;
