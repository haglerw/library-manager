import { useState } from "react";
import PropTypes from "prop-types";

function BookForm({ onAddBook }) {
  const [newBook, setNewBook] = useState({ title: "", author: "", genre: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBook(newBook);
    setNewBook({ title: "", author: "", genre: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={newBook.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={newBook.author}
        onChange={handleChange}
      />
      <input
        type="text"
        name="genre"
        placeholder="Genre"
        value={newBook.genre}
        onChange={handleChange}
      />
      <button type="submit">Add Book</button>
    </form>
  );
}

BookForm.propTypes = {
  onAddBook: PropTypes.func.isRequired,
};

export default BookForm;
