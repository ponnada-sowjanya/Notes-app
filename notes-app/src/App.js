import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import NotesDashboard from './pages/NotesDashboard';
import CreateNote from './pages/CreateNote';
import Home from './pages/Home';
import EditNote from './pages/EditNote';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notesdashboard" element={<NotesDashboard />} />
        <Route path="/create-note" element={<CreateNote />} />
        <Route path="/edit-note/:id" element={<EditNote />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
