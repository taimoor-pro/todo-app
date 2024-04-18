import React from "react";

export const Select = (props) => {
  const { className, option, id, field } = props;
  return (
    <select id={id} {...field} className={className}>
      {option?.map((op, index) => (
        <option key={index} value={op.value}>
          {op.label}
        </option>
      ))}
    </select>
  );
};
