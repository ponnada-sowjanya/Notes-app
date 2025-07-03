const express = require("express");
const router = express.Router();
const {
  createNote,
  getNotes,
  updateNote,
  deleteNote,
} = require("../controllers/noteController");

const authMiddleware = require("../middleware/authMiddleware");

// ➕ Create note / 📄 Get all notes (protected)
router.route("/")
  .post(authMiddleware, createNote)
  .get(authMiddleware, getNotes);

// 📝 Update / ❌ Delete a note by ID (protected)
router.route("/:id")
  .put(authMiddleware, updateNote)
  .delete(authMiddleware, deleteNote);

module.exports = router;
