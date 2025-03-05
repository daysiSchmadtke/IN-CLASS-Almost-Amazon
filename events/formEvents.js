import { createAuthor, getAuthors, updateAuthor } from '../api/authorData';
import { createBook, getBooks, updateBook } from '../api/bookData';
import { showAuthors } from '../pages/authors';
import { showBooks } from '../pages/books';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-book')) {
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        image: document.querySelector('#image').value,
        price: document.querySelector('#price').value,
        author: document.querySelector('#author').value, // Updated to match form ID
        sale: document.querySelector('#sale').checked,
      };

      createBook(payload)
        .then((response) => {
          if (response && response.name) {
            const patchPayload = { firebaseKey: response.name };

            updateBook(patchPayload).then(() => {
              getBooks().then(showBooks);
            }).catch((error) => {
              console.error('Error updating book:', error);
            });
          } else {
            console.error('Invalid response from createBook:', response);
          }
        })
        .catch((error) => {
          console.error('Error creating book:', error);
        });
    }

    if (e.target.id.includes('update-book')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        image: document.querySelector('#image').value,
        price: document.querySelector('#price').value,
        author: document.querySelector('#author').value, // Updated to match form ID
        sale: document.querySelector('#sale').checked,
        firebaseKey,
      };

      updateBook(payload).then(() => {
        getBooks().then(showBooks);
      }).catch((error) => {
        console.error('Error updating book:', error);
      });
    }

    if (e.target.id.includes('submit-author')) {
      const favoriteElement = document.querySelector('#favorite');
      const payload = {
        first_name: document.querySelector('#first_name').value,
        last_name: document.querySelector('#last_name').value,
        email: document.querySelector('#email').value,
        favorite: favoriteElement ? favoriteElement.checked : false,
      };

      createAuthor(payload)
        .then(({ name }) => {
          const patchPayload = { firebaseKey: name };

          updateAuthor(patchPayload).then(() => {
            getAuthors().then(showAuthors);
          }).catch((error) => {
            console.error('Error updating author:', error);
          });
        })
        .catch((error) => {
          console.error('Error creating author:', error);
        });
    }

    if (e.target.id.includes('update-author')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        first_name: document.querySelector('#first_name').value,
        last_name: document.querySelector('#last_name').value,
        email: document.querySelector('#email').value,
        favorite: document.querySelector('#favorite').checked,
        firebaseKey,
      };

      updateAuthor(payload).then(() => {
        getAuthors().then(showAuthors);
      }).catch((error) => {
        console.error('Error updating author:', error);
      });
    }
  });
};

export default formEvents;
