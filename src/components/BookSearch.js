import React, { useState } from 'react';
import axios from 'axios';
import BookList from './BookList';

function BookSearch() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://openlibrary.org/search.json?title=${query}`);
      setBooks(response.data.docs);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  return (
    <div className="book-search">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by book title, author, or subject..."
      />
      <button onClick={handleSearch}>Search</button>
      <BookList books={books} />
    </div>
  );
}

export default BookSearch;
