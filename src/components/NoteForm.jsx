import React, { useState } from 'react';

function NoteForm({ addNote }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const maxTitleLength = 50; 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !body) return; 

    const newNote = {
      id: +new Date(), 
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };

    addNote(newNote);
    setTitle(''); 
    setBody('');  
  };

  return (
    <div className="flex justify-center mb-6">
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white border border-gray-300 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Tambah Catatan</h2>
        <label className="form-control w-full mb-4">
          <span className="label-text font-bold text-lg">Judul</span>
          <input
            type="text"
            placeholder="Type your title here"
            className="border border-gray-300 focus:border-blue-500 focus:outline-none w-full transition duration-200 rounded-lg h-12 text-lg p-2"
            value={title}
            onChange={(e) => {
              if (e.target.value.length <= maxTitleLength) {
                setTitle(e.target.value); // Update title state if under limit
              }
            }}
            required
          />
          <p className="mt-1 text-right text-sm text-gray-500">
            {maxTitleLength - title.length} karakter tersisa
          </p>
        </label>
        <label className="form-control w-full mb-4">
          <span className="label-text font-bold text-lg">Catatan</span>
          <textarea
            placeholder="Type your note here"
            className="border border-gray-300 focus:border-blue-500 focus:outline-none w-full transition duration-200 rounded-lg h-32 text-lg p-2 mt-2"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </label>
        <button
          type="submit"
          className="btn btn-primary mt-4 bg-blue-500 hover:bg-blue-700 text-white w-full rounded-lg h-12 text-lg transition duration-200"
        >
          Tambah Catatan
        </button>
      </form>
    </div>
  );
}

export default NoteForm;
