import { useNavigate } from "react-router-dom";
import Auth from "../../../components/module/Auth";
import { loginSchema } from "../../../formValidations";
import { LoginOnSubmit } from "../../../firebase";
import { useState } from "react";

export const Login = () => {
  const navigate = useNavigate();
  const [role, setUser] = useState(null);

  const role_type = [
    {
      value: "",
      label: "Select Option",
    },
    {
      value: "admin",
      label: "Admin",
    },
    {
      value: "user",
      label: "User",
    },
  ];

  const onSubmit = (formData) => {
    LoginOnSubmit(formData, navigate, setUser);
  };

  return (
    <Auth
      heading="Welcome Back"
      paragraph="Welcome back! Please enter you details."
      fields={[
        {
          id: "email",
          labelText: "Email *",
          type: "email",
          placeholder: "Enter your email",
        },
        {
          id: "password",
          labelText: "Password *",
          type: "password",
          placeholder: "Enter your password",
        },
        {
          id: "role",
          labelText: "Role *",
          type: "options",
          options: role_type,
        },
      ]}
      schema={loginSchema}
      onSubmit={onSubmit}
      signInText="Sign In"
      signUpText="Sign Up"
      link="/register"
    />
  );
};
