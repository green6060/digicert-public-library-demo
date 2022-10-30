import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBooks } from "./libraryService";

export const fetchBooksAsync = createAsyncThunk(
    'counter/fetchCount',
    fetchBooks
  );