import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import BookForm from "./components/BookForm.jsx";
import BookList from "./components/BookList.jsx";

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "Siku Njema", author: "Ken Walibora", genre: "Africa" },
    {
      id: 2,
      title: "Kifo Kisimani",
      author: "Kithaka Wa Mberia",
      genre: "Africa",
    },
  ]);

  const addBook = (book) => {
    setBooks([...books, { ...book, id: books.length + 1 }]);
  };

  const updateBook = (updatedBook) => {
    setBooks(
      books.map((book) => (book.id === updatedBook.id ? updatedBook : book)),
    );
  };

  return (
    <>
      <div>
        <Header />
        <BookForm onAddBook={addBook} />
        <BookList books={books} onUpdateBook={updateBook} />
      </div>
    </>
  );
}

export default App;
