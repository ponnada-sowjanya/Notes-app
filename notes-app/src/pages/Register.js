import React, { useState } from "react";
import axios from "../api/axios";
import { useNavigate,Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/auth/register", formData);
      console.log("✅ Registered:", res.data.message); // optional

      // Show alert and navigate to login
      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828490.png"
            alt="Logo"
            className="w-14 h-14 mb-2"
          />
          <h2 className="text-2xl font-bold text-gray-800">Register to Notes App</h2>
        </div>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="mb-4 w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="mb-4 w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="mb-6 w-full px-4 py-2 border rounded-lg"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Register
          </button>
          <p className="mt-4 text-center text-sm text-gray-600">
  Already have an account?{" "}
  <Link to="/login" className="text-blue-600 hover:underline">
    Login here
  </Link>
</p>
<p className="text-sm text-center text-gray-600 mt-2">
  <Link to="/" className="hover:underline text-blue-600">
    ← Back to Home
  </Link>
</p>

        </form>
      </div>
    </div>
  );
};

export default Register;
