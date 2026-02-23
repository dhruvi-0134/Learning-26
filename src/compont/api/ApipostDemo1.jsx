import React, { useState } from "react";
import axios from "axios";

export const ApipostDemo1 = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
    isActive: true
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://node5.onrender.com/user/user/",
        formData
      );

      console.log(res.data);
      alert("User Added Successfully 🚀");

      // Clear form
      setFormData({
        name: "",
        email: "",
        age: "",
        password: "",
        isActive: true
      });

    } catch (error) {
      console.log(error);
      alert("Error while adding user ❌");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>POST API FORM</h1>

      <form onSubmit={handleSubmit}>

        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <input
            type="number"
            name="age"
            placeholder="Enter Age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <br />
        <button type="submit">Submit</button>

      </form>
    </div>
  );
};