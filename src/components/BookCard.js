import React from 'react';

const BookCard = ({ book }) => {
  return (
    <div className="border border-gray-300 p-4 rounded shadow">
      <img
        src={book.formats['image/jpeg']}
        alt={book.title}
        className="w-full h-64 object-cover mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
      <p className="text-gray-700 mb-2">Author: {book.authors[0]?.name}</p>
      <a
        href={book.formats['text/html']}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Read Now
      </a>
    </div>
  );
};

export default BookCard;
