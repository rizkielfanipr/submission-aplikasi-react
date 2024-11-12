import React from 'react';
import { showFormattedDate } from '../utils'; 
import { FaArchive, FaTrash, FaUndo } from 'react-icons/fa'; 

function NoteItem({ note, deleteNote, toggleArchiveNote }) {
  const maxLength = 70; 
  const truncatedBody = note.body.length > maxLength ? `${note.body.substring(0, maxLength)}...` : note.body;

  return (
    <div className="card bg-base-100 border border-gray-300 transition-colors duration-300 hover:bg-blue-100 mb-4 rounded-lg w-64 h-48 px-4">
      <div className="card-body py-4">
        <h2 className="card-title font-bold mb-2 text-sm">{note.title}</h2>
        <p className="bg-blue-100 text-blue-800 inline-block px-2 py-1 rounded-md mb-2 text-xs">{showFormattedDate(note.createdAt)}</p>
        <p className="flex-1 text-sm">{truncatedBody}</p>
        <div className="card-actions justify-end mt-2 flex space-x-2">
          <button 
            onClick={() => toggleArchiveNote(note.id)} 
            className="text-yellow-500 hover:text-yellow-700 text-lg" 
            title={note.archived ? 'Pindahkan ke Catatan Aktif' : 'Arsipkan'}
          >
            {note.archived ? <FaUndo /> : <FaArchive />}
          </button>
          <button 
            onClick={() => deleteNote(note.id)} 
            className="text-red-500 hover:text-red-700 text-lg" 
            title="Hapus"
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
