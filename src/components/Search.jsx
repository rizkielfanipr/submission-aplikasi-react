import React from 'react';

function Search({ searchKeyword, setSearchKeyword }) {
  return (
    <div className="flex items-center mb-4">
      <input
        type="text"
        placeholder="Cari catatan..."
        className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 w-full rounded-l-lg py-2 px-4 transition duration-200"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white hover:bg-blue-600 rounded-r-lg py-2 px-4 transition duration-200"
        onClick={() => console.log('Search clicked')}
      >
        Cari
      </button>
    </div>
  );
}

export default Search;
