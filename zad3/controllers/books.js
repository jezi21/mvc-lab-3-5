let index = 2;
let books = [
  {
      id: 1,
      title: "The Great Gatsby",
      publishingYear: 1925,
      author: "F. Scott Fitzgerald"
  }
];


exports.addBook = (req, res) => {
  const { title, publishingYear, author } = req.body;
  const id = index+1
  index++;
  const newBook = { id, title, publishingYear, author };
  books.push(newBook);
  res.redirect('/book/list');
};

exports.deleteBook = (req, res) => {
  const { id } = req.params;
  books = books.filter(book => book.id !== parseInt(id));
  res.redirect('/book/list');
};

exports.getAddBook = (req, res) => {
  res.render('add-book');
};


exports.getBooks = (req, res) => {
  res.render('books', { books: books });
};