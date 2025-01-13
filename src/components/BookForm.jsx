import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBookToFirestore } from "../redux/bookSlice.js";

function BookForm() {
  const [newBook, setNewBook] = useState({ title: "", author: "", genre: "" });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBookToFirestore(newBook));
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

export default BookForm;
