import React from 'react';

const WishlistPage = ({ wishlistBooks, removeFromWishlist }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {wishlistBooks.length > 0 ? (
          wishlistBooks.map((book) => (
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
                onClick={() => {
                  if (window.confirm(`Are you sure you want to remove "${book.title}" from your wishlist?`)) {
                    removeFromWishlist(book.id);
                  }
                }}
                className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg"
              >
                Remove from Wishlist
              </button>
            </div>
          ))
        ) : (
          <p className="text-xl text-gray-500">Your wishlist is empty.</p>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
