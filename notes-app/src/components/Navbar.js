import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800">📝 Notes App</h1>
      <div className="flex items-center gap-4">
        <Link to="/notesdashboard" className="text-blue-600 hover:underline">
          Dashboard
        </Link>
        <Link to="/create-note" className="text-blue-600 hover:underline">
          Create
        </Link>
        <button
          onClick={handleLogout}
          className="text-red-600 hover:underline"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
