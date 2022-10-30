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
  .then((data: any) => {
    const formattedData: BookInfo & { checkoutOut: boolean } = data.map((object: { checkedOut: boolean; }) => object.checkedOut = false)
    return formattedData
  });
}

