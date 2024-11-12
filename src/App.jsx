import React, { useState } from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import Search from './components/Search'; 
import { getInitialData } from './utils'; 

function App() {
  const [notes, setNotes] = useState(getInitialData());
  const [searchKeyword, setSearchKeyword] = useState('');

  const addNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter(note => note.id !== id));
  };

  const toggleArchiveNote = (id) => {
    setNotes((prevNotes) =>
      prevNotes.map(note =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Aplikasi Catatan Pribadi</h1>
      <NoteForm addNote={addNote} />
      <Search searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword} />
      
      <h2 className="text-2xl font-bold mb-2">Catatan Aktif</h2>
      <NoteList notes={notes.filter(note => !note.archived)} deleteNote={deleteNote} toggleArchiveNote={toggleArchiveNote} searchKeyword={searchKeyword} />
      
      <h2 className="text-2xl font-bold mt-6 mb-2">Catatan Terarsip</h2>
      <NoteList notes={notes.filter(note => note.archived)} deleteNote={deleteNote} toggleArchiveNote={toggleArchiveNote} searchKeyword={searchKeyword} />
    </div>
  );
}

export default App;
