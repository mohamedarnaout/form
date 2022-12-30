import React, { useState } from "react";
import "./App.css";

function App() {
  // State to store the form data and any errors
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });
  const validate = (name, value) => {
    // Check for errors in the input field and return an error message if necessary
    switch (name) {
      case "name":
        if (value.length < 3) {
          return "Name must be at least 3 characters long";
        }
        break;
      case "email":
        if (!value.includes("@")) {
          return "Invalid email address";
        }
        break;
      case "password":
        if (value.length < 6) {
          return "Password must be at least 6 characters long";
        }
        break;
      default:
        return "";
    }
  };
  const validateForm = (formData) => {
    // Check for errors in the form data and return an error object with error messages for any invalid fields
    const errors = {
      name: "",
      email: "",
      password: "",
    };

    if (formData.name.length < 3) {
      errors.name = "Name must be at least 3 characters long";
    }
    if (!formData.email.includes("@")) {
      errors.email = "Invalid email address";
    }
    if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    return errors;
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    const error = validate(name, value);
    setErrors({ ...errors, [name]: error });
  };

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = validateForm(formData);
    setErrors(newErrors);

    // If there are no errors, submit the form
    if (Object.values(newErrors).every((error) => error === "")) {
      console.log(formData);
      setFormData({
        name: "",
        email: "",
        password: "",
      });
    }
  }
  // Render the form
  return (
    <form onSubmit={handleSubmit}>
      <div className="firstname input_field">
        <div className="labet_text">
          <labal>Name: </labal>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div className="email input_field">
        <div className="labet_text">
          <label htmlFor="">Email: </label>
          <input
            type="text"
            name="email"
            id=""
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div className="password input_field">
        <div className="labet_text">
          <label htmlFor="">Password: </label>
          <input
            type="password"
            name="password"
            id=""
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      <input type="submit" value="Lol" />
    </form>
  );
}
export default App;
