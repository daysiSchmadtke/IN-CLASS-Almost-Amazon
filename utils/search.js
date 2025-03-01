// const client = {
//   apiKey: process.env.APP_API_KEY,
//   authDomain: process.env.APP_AUTH_DOMAIN,
//   databaseURL: process.env.APP_DATABASE_URL,
//   projectId: process.env.APP_PROJECT_ID,
//   storageBucket: process.env.APP_STORAGE_BUCKET,
//   appId: process.env.APP_APP_ID,
//   measurementId: process.env.APP_MEASUREMENT_ID,
// };
// const endpoint = client.databaseURL;
// const displayBooks = (books) => {
//   const resultsContainer = document.querySelector('#store');
//   resultsContainer.innerHTML = '';

//   if (books.length === 0) {
//     resultsContainer.innerHTML = '<p>No books found</p>';
//     return;
//   }

//   books.forEach((book) => {
//     const bookElement = document.createElement('div');
//     bookElement.classList.add('book-result');
//     bookElement.innerHTML = `
//       <div class="card" style="width: 18rem;">
//         <div class="card-body">
//           <h5 class="card-title">${book.title}</h5>
//           <h6 class="card-subtitle mb-2 text-muted">${book.author}</h6>
//         </div>
//       </div>
//     `;
//     resultsContainer.appendChild(bookElement);
//   });
// };

// const searchBooksAPI = (query) => {
//   fetch(`${endpoint}/books.json?search=${query}`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     }
//   })
//     .then((res) => res.json())
//     .then((data) => Object.values(data))
//     .catch((error) => {
//       console.error('Error fetching books:', error);
//       return [];
//     });
// };

// const search = (e) => {
//   const eventLC = e.target.value.toLowerCase();
//   if (e.keyCode === 13) {
//     searchBooksAPI(eventLC).then((books) => {
//       displayBooks(books);
//       if (books.length === 0) {
//         document.querySelector('#store').innerHTML = '<p>No books found</p>';
//       }
//     });
//     e.target.value = '';
//   }
// };

// export default search;
