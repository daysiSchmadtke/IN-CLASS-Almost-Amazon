import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addBookForm = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-book--${obj.firebaseKey}` : 'submit-book'}" class="mb-4">
  <div class="form-group">
    <label for="title">Book Title</label>
    <input type="text" class="form-control" id="title" aria-describedby="bookTitle" placeholder="Enter Book Title" value="${obj.title || ''}" required>
  </div>
  <div class="form-group">
    <label for="description">Description</label>
    <textarea class="form-control" placeholder="Book Description" id="description" style="height: 100px">${obj.description || ''}</textarea>
  </div>
  <div class="form-group">
    <label for="image">Image URL</label>
    <input type="url" class="form-control" id="image" placeholder="Image URL" value="${obj.image || ''}" required>
  </div>
  <div class="form-group">
    <label for="price">Price</label>
    <input type="text" class="form-control" id="price" placeholder="Book Price" value="${obj.price || ''}" required>
  </div>
  <div class="form-group">
    <label for="author">Author</label>
    <input type="text" class="form-control" id="author" placeholder="Enter Author's Name" value="${obj.author || ''}" required>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="sale" ${obj.sale ? 'checked' : ''}>
    <label class="form-check-label" for="sale">On Sale?</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit Book</button>
</form> 
`;

  renderToDOM('#form-container', domString);
};

export default addBookForm;
