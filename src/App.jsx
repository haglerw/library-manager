import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import BookForm from "./components/BookForm.jsx";
import BookList from "./components/BookList.jsx";
import { useDispatch } from "react-redux";
import { fetchBooks } from "./redux/bookSlice.js";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <>
      <div>
        <Header />
        <BookForm />
        <BookList />
      </div>
    </>
  );
}

export default App;
