import React from 'react';

function BookList({ books }) {
  return (
    <div className="book-list">
      {books.length > 0 ? (
        books.map((book) => (
          <div key={book.key} className="book-item">
            <h3>{book.title}</h3>
            {book.author_name && <p>Author: {book.author_name.join(', ')}</p>}
            {book.cover_i && (
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt={`${book.title} cover`}
              />
            )}
            <p>First Published: {book.first_publish_year || 'N/A'}</p>
          </div>
        ))
      ) : (
        <p>No books found. Try another search.</p>
      )}
    </div>
  );
}

export default BookList;
