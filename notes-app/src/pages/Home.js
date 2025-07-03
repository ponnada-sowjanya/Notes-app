import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Notes App</h1>
      <div className="space-x-4">
        <Link to="/register">
          <button className="px-4 py-2 bg-blue-600 text-white rounded">Register</button>
        </Link>
        <Link to="/login">
          <button className="px-4 py-2 bg-green-600 text-white rounded">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
