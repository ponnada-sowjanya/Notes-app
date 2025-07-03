import React, { useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleCreate = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "/api/notes",
        { title, content },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Note created:", res.data);
      navigate("/NotesDashboard"); // Redirect after success
    } catch (error) {
      console.error("Failed to create note:", error.response?.data || error);
      alert("Failed to create note.");
    }
  };
 


  return (
    <>
  <Navbar />
  <div className="min-h-screen bg-gray-100 p-4">
    
 
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={handleCreate}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Create Note</h2>

        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 border rounded mb-4"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Content"
          className="w-full p-2 border rounded mb-4"
          rows="5"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Save Note
        </button>
      </form>
    </div>
     </div>
</>
  );
};

export default CreateNote;
