import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../api/axios";

const EditNote = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState({ title: "", content: "" });

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await axios.get(`/api/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.error("Error fetching note:", error);
        alert("Unable to fetch note for editing.");
      }
    };
    fetchNote();
  }, [id]);

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/notes/${id}`, note);
      navigate("/notesdashboard");
    } catch (error) {
      console.error("Update failed:", error);
      alert("Failed to update note.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={handleUpdate}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Edit Note</h2>
        <input
          type="text"
          name="title"
          value={note.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full p-2 border rounded mb-4"
        />
        <textarea
          name="content"
          value={note.content}
          onChange={handleChange}
          placeholder="Content"
          rows="5"
          className="w-full p-2 border rounded mb-4"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Update Note
        </button>
      </form>
    </div>
  );
};

export default EditNote;
