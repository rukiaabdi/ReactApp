import { useState } from "react";

function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    experience: "",
    skills: [],
    agree: false,
    notifications: false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const skillsList = [
    "React",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Python",
    "Java",
    "UI Design",
    "API Development",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));

    setSubmitted(false);
  };

  const handleSkillChange = (e) => {
    const { value, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      skills: checked
        ? [...prevData.skills, value]
        : prevData.skills.filter((skill) => skill !== value),
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      skills: "",
    }));

    setSubmitted(false);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (formData.name.length > 30) {
      newErrors.name = "Name must be less than 30 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.role) {
      newErrors.role = "Please select a role";
    }

    if (formData.experience === "") {
      newErrors.experience = "Years of experience is required";
    } else if (
      Number(formData.experience) < 0 ||
      Number(formData.experience) > 50
    ) {
      newErrors.experience = "Experience must be between 0 and 50";
    }

    if (formData.skills.length === 0) {
      newErrors.skills = "Please select at least one skill";
    }

    if (!formData.agree) {
      newErrors.agree = "You must agree to the terms and conditions";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);

    alert("Application submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form onSubmit={handleSubmit}className="w-full max-w-md bg-white rounded-xl shadow-lg p-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Developer Application Form
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>

          <input type="text" name="name" value={formData.name} onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md outline-none focus:ring-2 ${
              errors.name ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200" }`}
          />

          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>

          <input type="email" name="email" value={formData.email} onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md outline-none focus:ring-2 ${
              errors.email ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200" }`}
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Role
          </label>

          <select name="role" value={formData.role} onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md outline-none ${
              errors.role ? "border-red-500" : "border-gray-300" }`}>

            <option value="">Select a role</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Full Stack Developer">
              Full Stack Developer
            </option>
            <option value="UI/UX Designer">UI/UX Designer</option>
            <option value="Product Manager">Product Manager</option>
          </select>

          {errors.role && (
            <p className="text-red-500 text-sm mt-1">{errors.role}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Years of Experience
          </label>

          <input type="number" name="experience" min="0" max="50"
            value={formData.experience} onChange={handleChange} className={`w-full px-3 py-2 border rounded-md outline-none ${
              errors.experience ? "border-red-500" : "border-gray-300" }`}
          />

          {errors.experience && (
            <p className="text-red-500 text-sm mt-1">
              {errors.experience}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Skills
          </label>

          <div className="grid grid-cols-2 gap-3">
            {skillsList.map((skill) => (
              <label key={skill} className="flex items-center gap-2 text-sm text-gray-700" >
                <input type="checkbox" value={skill} checked={formData.skills.includes(skill)}
                  onChange={handleSkillChange} className="w-4 h-4"
                />

                {skill}
              </label>
            ))}
          </div>

          {errors.skills && (
            <p className="text-red-500 text-sm mt-1">{errors.skills}</p>
          )}
        </div>

        <div className="mb-3">
          <label className="flex items-center gap-2 text-sm text-gray-700">
            <input type="checkbox" name="agree" checked={formData.agree}
             onChange={handleChange} className="w-4 h-4"
            />

            I agree to the terms and conditions
          </label>

          {errors.agree && (
            <p className="text-red-500 text-sm mt-1">{errors.agree}</p>
          )}
        </div>

        <div className="mb-5">
          <label className="flex items-center gap-2 text-sm text-gray-700">
            <input type="checkbox" name="notifications" checked={formData.notifications}
              onChange={handleChange} className="w-4 h-4" />

            Receive notifications about new opportunities
          </label>
        </div>

        {submitted && (
          <p className="bg-green-100 text-green-700 p-3 rounded-md text-sm mb-4">
            Application submitted successfully!
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 rounded-md"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}

export default ApplicationForm;