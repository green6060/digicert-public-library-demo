export interface BookInfo {
  url: string,
  name: string,
  isbn: string,
  authors: string[],
  numberOfPages: number,
  publisher: string,
  country: string,
  mediaType: string,
  released: string,
  characters: string[],
  povCharacters: string[],
};

export const fetchBooks = async () => {
  return await fetch('https://anapioficeandfire.com/api/books')
  .then((response) => response.json())
  .then((data: BookInfo[]) => {
    return data
  });
}

export const deleteBook = async (book: string, library: BookInfo[]) => {
  return await new Promise<BookInfo[]>((resolve) =>{
  const newLibrary = library.filter((libraryBook) => libraryBook.name !== book)
  setTimeout(() => resolve(newLibrary), 500)}
);
}

