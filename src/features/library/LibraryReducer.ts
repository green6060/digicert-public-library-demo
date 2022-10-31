import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchBooksAsync } from "./LibraryActions";
import { BookInfo } from "./libraryService";

export interface LibraryState {
    books: BookInfo[] | []
    loading: boolean
}

const initialState: LibraryState = {
    books: [],
    loading: true,
  };

export const LibrarySlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchBooksAsync.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchBooksAsync.fulfilled, (state, action) => {
          state.loading = false;
          state.books = action.payload;
        })
        .addCase(fetchBooksAsync.rejected, (state) => {
          state.loading = false;
          state.books = [];
        });
    },
  });

  /* Selectors */
  export const selectBooks = (state: RootState) => state.library.books;
  export const selectLoadingStatus = (state: RootState) => state.library.loading;

  export default LibrarySlice.reducer