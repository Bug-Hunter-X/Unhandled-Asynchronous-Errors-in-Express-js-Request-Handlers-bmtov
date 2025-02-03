const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Assume some asynchronous operation that might fail
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(err => {
    // Express's default error handling will not catch this
    console.error('Error:', err);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate a failure
    setTimeout(() => reject(new Error('Something went wrong')), 100);
  });
}