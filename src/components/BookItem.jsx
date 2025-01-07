import { useState } from "react";
import PropTypes from "prop-types";

function BookItem({ book, onUpdateBook }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedBook, setEditedBook] = useState(book);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedBook({ ...editedBook, [name]: value });
  };

  const handleSave = () => {
    onUpdateBook(editedBook);
    setIsEditing(false);
  };

  return (
    <div className="book-item">
      {isEditing ? (
        <div>
          <input
            type="text"
            name="title"
            value={editedBook.title}
            onChange={handleChange}
          />
          <input
            type="text"
            name="author"
            value={editedBook.author}
            onChange={handleChange}
          />
          <input
            type="text"
            name="genre"
            value={editedBook.genre}
            onChange={handleChange}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <p>{book.genre}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
  onUpdateBook: PropTypes.func.isRequired,
};

export default BookItem;
