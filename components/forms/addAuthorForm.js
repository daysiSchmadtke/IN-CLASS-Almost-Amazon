import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addAuthorForm = () => {
  clearDom();
  const domString = `<form id="submit-author" class="mb-4">
  <div class="form-group">
    <label for="first_name">First Name</label>
    <input type="text" class="form-control" id="first_name" placeholder="First Name" required>
  </div>
  <div class="form-group">
    <label for="last_name">Last Name</label>
    <input type="text" class="form-control" id="last_name" placeholder="Last Name" required>
  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Email" required>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <button type="submit" class="btn btn-primary mt-3">Submit Author</button>
</form>`;

  renderToDOM('#form-container', domString);
};

export default addAuthorForm;
