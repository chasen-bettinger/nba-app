import React, { Component } from "react";
import FormField from "../../widgets/form-field/FormField";

class Dashboard extends Component {
  state = {
    registerErr: "",
    loading: false,
    formdata: {
      author: {
        element: "input",
        value: "",
        config: {
          name: "author_input",
          type: "author",
          placeholder: "Enter your name"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ""
      },
      title: {
        element: "input",
        value: "",
        config: {
          name: "title_input",
          type: "title",
          placeholder: "Enter your title"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ""
      }
    }
  };

  updateForm = element => {
    const newFormData = {
      ...this.state.formdata
    };

    const newElement = {
      ...newFormData[element.id]
    };

    newElement.value = element.event.target.value;

    if (element.blur) {
      let validData = this.validate(newElement);
      newElement.valid = validData[0];
      newElement.validationMessage = validData[1];
    }

    newElement.touched = element.blur;

    newFormData[element.id] = newElement;

    this.setState({
      formdata: newFormData
    });
  };

  validate = element => {
    let error = [true, ""];

    if (element.validation.required) {
      const valid = element.value.trim() !== "";
      const message = `${!valid ? "This field is required" : ""}`;
      error = !valid ? [valid, message] : error;
    }

    return error;
  };

  submitButton = () => {
    return this.state.loading ? (
      "loading..."
    ) : (
      <button type="submit">Add Post</button>
    );
  };

  showError = () => {
    return this.state.registerError !== "" ? (
      <div className="error">{this.state.registerError}</div>
    ) : (
      ""
    );
  };

  submitForm = event => {
    event.preventDefault();

    let dataToSubmit = {};

    let formIsValid = true;

    for (let key in this.state.formdata) {
      dataToSubmit[key] = this.state.formdata[key].value;
    }

    for (let key in this.state.formdata) {
      formIsValid = this.state.formdata[key].valid && formIsValid;
    }

    console.log(dataToSubmit);

    if (formIsValid) console.log("Submit Post");
    else {
      this.setState({
        postError: "Something went wrong"
      });
    }
  };

  render() {
    return (
      <div className="post-container">
        <form onSubmit={this.submitForm}>
          <h2>Add Post</h2>
          <FormField
            id={"author"}
            formdata={this.state.formdata.author}
            change={element => this.updateForm(element)}
          />

          <FormField
            id={"title"}
            formdata={this.state.formdata.title}
            change={element => this.updateForm(element)}
          />

          {this.submitButton()}
          {this.showError()}
        </form>
      </div>
    );
  }
}

export { Dashboard as default };
