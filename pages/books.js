import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

// Function to show a message when there are no books
const emptyBooks = () => {
  const domString = '<h1>No Books</h1>';
  renderToDOM('#store', domString);
};

// Function to show books associated with the logged-in user's uid
const showBooks = (array, uid) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-book-btn">Add A Book</button>';
  renderToDOM('#add-button', btnString);

  // Filter books to only include those with the specified uid
  const userBooks = array.filter((book) => book.uid === uid);

  let domString = '';
  userBooks.forEach((item) => {
    domString += `
      <div class="card">
        <img class="card-img-top" src=${item.image} alt=${item.title} style="height: 400px;">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${item.title}</h5>
            <p class="card-text bold">${item.sale ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${item.price}` : `$${item.price}`}</p>
            <hr>
            <i class="btn btn-success fas fa-eye" id="view-book-btn--${item.firebaseKey}"></i>
            <i id="edit-book-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-book-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>`;
  });

  // If there are no books for the user, show a message
  if (!userBooks.length) {
    domString = '<h1>No Books</h1>';
  }

  renderToDOM('#store', domString);
};

export { showBooks, emptyBooks };
