import React from "react";

const FormFieldInput = ({ data, change, id }) => {
  return (
    <input
      {...data.config}
      value={data.value}
      onChange={event => change({ event, id, blur: false })}
      onBlur={event => change({ event, id, blur: true })}
    />
  );
};

export { FormFieldInput as default };
