import React, { useState, useEffect } from 'react';

const HomePage = ({ addToWishlist }) => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(`https://gutendex.com/books?page=${currentPage}`);
      const data = await response.json();
      setBooks(data.results);
    };

    fetchBooks();
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Book List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <div key={book.id} className="bg-white shadow-md p-4 rounded-lg">
            <img
              src={book.formats && book.formats['image/jpeg'] ? book.formats['image/jpeg'] : '/path-to-default-image.jpg'}
              alt={book.title}
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-lg font-bold mb-2">{book.title}</h2>
            {/* Adding a check to ensure authors are available */}
            <p className="text-gray-600">
              Author: {book.authors && book.authors.length > 0 ? book.authors[0].name : 'Unknown'}
            </p>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
              onClick={() => addToWishlist(book)}
            >
              Add to Wishlist
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-between">
        <button
          className="bg-gray-300 text-black py-2 px-4 rounded-lg"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous Page
        </button>
        <button
          className="bg-gray-300 text-black py-2 px-4 rounded-lg"
          onClick={handleNextPage}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default HomePage;
