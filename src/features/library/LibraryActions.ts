import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBooks, deleteBook, BookInfo } from "./libraryService";

export const fetchBooksAsync = createAsyncThunk(
    'library/fetchBooks',
    fetchBooks
  );

export const deleteBookAsync = createAsyncThunk(
  'library/deleteBook',
  (props: {book: string, library: BookInfo[]}) => deleteBook(props.book, props.library)
)