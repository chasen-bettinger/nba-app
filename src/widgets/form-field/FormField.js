import React from "react";
import FormFieldInput from "./FormFieldInput";

const FormField = ({ formdata, change, id }) => {
  const showError = () => {
    let errorMessage = null;

    if (formdata.validation && !formdata.valid) {
      errorMessage = (
        <div className="label-error">{formdata.validationMessage}</div>
      );
    }

    return errorMessage;
  };

  const renderTemplate = () => {
    let formTemplate = null;

    switch (formdata.element) {
      case "input":
        formTemplate = (
          <div>
            <FormFieldInput data={formdata} change={change} id={id} />
            {showError()}
          </div>
        );
        break;
      default:
        formTemplate = null;
    }

    return formTemplate;
  };

  return <div>{renderTemplate()}</div>;
};

export { FormField as default };
