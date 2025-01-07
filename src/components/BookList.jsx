import PropTypes from "prop-types";
import BookItem from "./BookItem.jsx";

function BookList({ books, onUpdateBook }) {
  return (
    <div className="book-list">
      {books.map((book, index) => (
        <BookItem book={book} key={index} onUpdateBook={onUpdateBook} />
      ))}
    </div>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onUpdateBook: PropTypes.func.isRequired,
};

export default BookList;
