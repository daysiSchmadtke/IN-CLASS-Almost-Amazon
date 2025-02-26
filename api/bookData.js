import client from '../utils/client';

const endpoint = client.databaseURL;

// TODO: GET BOOKS
const getBooks = () => new Promise((resolve, reject) => {
  fetch(endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then((response) => response.json())
    .then((books) => resolve(books))
    .catch(reject);
});

// TODO: DELETE BOOK
const deleteBook = () => {};

// TODO: GET SINGLE BOOK
const getSingleBook = () => {};

// TODO: CREATE BOOK
const createBook = () => {};

// TODO: UPDATE BOOK
const updateBook = () => {};

// TODO: FILTER BOOKS ON SALE
const booksOnSale = () => {};

// TODO: STRETCH...SEARCH BOOKS

export {
  getBooks,
  createBook,
  booksOnSale,
  deleteBook,
  getSingleBook,
  updateBook
};
