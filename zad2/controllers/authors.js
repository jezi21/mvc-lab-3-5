const authors = [
  {
      id: 1,
      name: "William Shakespeare"
  }
];

exports.getAuthors = (req, res) => {
  res.render('authors', { authors: authors });
};