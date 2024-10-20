import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BookDetailsPage = () => {
  const { id } = useParams(); 
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`https://gutendex.com/books/${id}`);
        const data = await response.json();
        setBook(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching book details:', error);
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (loading) {
    return <p>Loading book details...</p>;
  }

  if (!book) {
    return <p>Book not found.</p>;
  }

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row">
        {/* Book Cover */}
        <img
          src={book.formats['image/jpeg']}
          alt={book.title}
          className="w-full md:w-1/3 h-auto object-cover mb-4 md:mb-0"
        />
        {/* Book Info */}
        <div className="md:ml-8">
          <h1 className="text-4xl font-bold mb-4">{book.title}</h1>
          <p className="text-lg text-gray-700 mb-4">
            Author: {book.authors[0]?.name}
          </p>
          <p className="mb-6">{book.subjects?.join(', ')}</p>
          <p>{book.description || 'No description available.'}</p>

          {/* Add to Wishlist Button */}
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => {
              const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
              const isAlreadyInWishlist = savedWishlist.some((b) => b.id === book.id);

              if (!isAlreadyInWishlist) {
                savedWishlist.push(book);
                localStorage.setItem('wishlist', JSON.stringify(savedWishlist));
                alert('Book added to wishlist!');
              } else {
                alert('Book is already in your wishlist!');
              }
            }}
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
