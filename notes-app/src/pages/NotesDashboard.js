import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";


const NotesDashboard = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNotes = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("/api/notes", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setNotes(res.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);
   const handleDelete = async (id) => {
  try {
    const token = localStorage.getItem("token");
    await axios.delete(`/api/notes/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // Remove deleted note from state
    setNotes(notes.filter((note) => note._id !== id));
  } catch (error) {
    console.error("Failed to delete note:", error);
    alert("Failed to delete note.");
  }
};

  return (
     <>
    <Navbar />
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Your Notes</h1>
        <Link to="/create-note">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
            + New Note
          </button>
        </Link>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : notes.length === 0 ? (
        <p>No notes found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {notes.map((note) => (
            <div key={note._id} className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-semibold">{note.title}</h2>
              <p className="text-gray-700 mt-2">{note.content}</p>
              <div className="mt-4 flex justify-between">
    <Link
      to={`/edit-note/${note._id}`}
      className="text-blue-600 hover:underline"
    >
      Edit
    </Link>
    <button
      onClick={() => handleDelete(note._id)}
      className="text-red-600 hover:underline"
    >
      Delete
    </button>
  </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default NotesDashboard;
