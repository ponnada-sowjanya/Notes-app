const Note = require("../models/Note");

// ➕ Create Note
const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: "Title and content are required" });
    }

    const newNote = new Note({
      user: req.user.id, // comes from authMiddleware
      title,
      content,
    });

    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// 📄 Get All Notes (for logged-in user)
const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(notes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// 📝 Update Note
const updateNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    if (note.user.toString() !== req.user.id) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    note.title = req.body.title || note.title;
    note.content = req.body.content || note.content;

    const updatedNote = await note.save();
    res.json(updatedNote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// ❌ Delete Note
const deleteNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    if (note.user.toString() !== req.user.id) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    await note.deleteOne();
    res.json({ message: "Note deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};



module.exports = {
  createNote,
  getNotes,
  updateNote,
  deleteNote,
};
