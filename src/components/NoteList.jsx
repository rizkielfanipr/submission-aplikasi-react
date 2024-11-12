import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, deleteNote, toggleArchiveNote, searchKeyword }) {
  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {filteredNotes.length === 0 ? (
        <p className="text-center col-span-3">Tidak ada catatan yang sesuai dengan pencarian.</p>
      ) : (
        filteredNotes.map((note) => (
          <NoteItem 
            key={note.id} 
            note={note} 
            deleteNote={deleteNote} 
            toggleArchiveNote={toggleArchiveNote} 
          />
        ))
      )}
    </div>
  );
}

export default NoteList;
