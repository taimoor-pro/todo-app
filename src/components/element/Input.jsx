import React from "react";

export const Input = (props) => {
  const { type, className, placeholder, id, field } = props;
  return (
    <input
      id={id}   
      {...field}
      type={type}
      className={className}
      placeholder={placeholder}
    />
  );
};
