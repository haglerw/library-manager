import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../firebase";

const booksCollectionRef = collection(db, "books");

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const data = await getDocs(booksCollectionRef);
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
});

export const addBookToFirestore = createAsyncThunk(
  "books/addBook",
  async (newBook) => {
    const docRef = await addDoc(booksCollectionRef, newBook);
    return { ...newBook, id: docRef.id };
  },
);

export const updateBookInFirestore = createAsyncThunk(
  "books/updateBook",
  async (updatedBook) => {
    const bookDoc = doc(db, "books", updatedBook.id);
    await updateDoc(bookDoc, updatedBook);
    return updatedBook;
  },
);

const bookSlice = createSlice({
  name: "books",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addBookToFirestore.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(updateBookInFirestore.fulfilled, (state, action) => {
        const index = state.findIndex((book) => book.id === action.payload.id);
        if (index !== -1) {
          state[index] = action.payload;
        }
      });
  },
});

export default bookSlice.reducer;
