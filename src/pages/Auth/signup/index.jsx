import { useNavigate } from "react-router-dom";
import Auth from "../../../components/module/Auth";
import { useState } from "react";
import { RegisterOnSubmit } from "../../../firebase";
import { regSchema } from "../../../formValidations";

export const SignUp = () => {
  const navigate = useNavigate();
  const onSubmit = (formData) => {
    RegisterOnSubmit(formData, navigate);
  };

  return (
    <Auth
      heading="Sign Up"
      paragraph="Note: Only user register, (You will only view or create todo's/tasks)"
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
      ]}
      schema={regSchema}
      onSubmit={onSubmit}
      signInText="Sign Up"
      signUpText="Sign In"
      link="/"
    />
  );
};
