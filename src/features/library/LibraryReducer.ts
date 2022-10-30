import { createSlice } from "@reduxjs/toolkit";
import { fetchBooksAsync } from "./LibraryActions";
import { BookInfo } from "./libraryService";

export interface LibraryState {
    books: BookInfo & { checkoutOut: boolean; } | undefined
    loading: boolean
}

const initialState: LibraryState = {
    books: undefined,
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
        });
    },
  });

  export default LibrarySlice.reducer