import BookItem from "./BookItem.jsx";
import { useDispatch, useSelector } from "react-redux";
import { updateBookInFirestore } from "../redux/bookSlice.js";

function BookList() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleUpdate = (updatedBook) => {
    dispatch(updateBookInFirestore(updatedBook));
  };

  return (
    <div className="book-list">
      {books.map((book) => (
        <BookItem book={book} key={book.id} onUpdateBook={handleUpdate} />
      ))}
    </div>
  );
}

export default BookList;
