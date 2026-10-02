import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    agree: false,
    role: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Username: ${formData.username}Email: ${formData.email}
           Password: ${formData.password}Agree: ${formData.agree}
            Role: ${formData.role} `);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration Form</h2>

      <input type="text" name="username" placeholder="Username" value={formData.username}
        onChange={handleChange} />

      <br />
      <br />

      <input type="email" name="email" placeholder="Email" value={formData.email}
        onChange={handleChange} />

      <br />
      <br />

      <input type="password" name="password" placeholder="Password" value={formData.password}
        onChange={handleChange} />

      <br />
      <br />

      <label>
        <input type="checkbox" name="agree" checked={formData.agree}
          onChange={handleChange}/>
        I Agree
      </label>

      <br />
      <br />

      <select name="role"  value={formData.role} onChange={handleChange}>
        <option value="">Select Role</option>
        <option value="Student">Student</option>
        <option value="Teacher">Teacher</option>
        <option value="Developer">Developer</option>
      </select>

      <br />
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;