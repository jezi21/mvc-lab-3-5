const books = [
  {
      id: 1,
      title: "The Great Gatsby",
      publishingYear: 1925,
      author: "F. Scott Fitzgerald"
  }
];


exports.getBooks = (req, res) => {
  res.render('books', { books: books });
};