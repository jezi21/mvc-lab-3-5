const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books');


router.get('/add', booksController.getAddBook);

router.post('/add', booksController.addBook);

router.get('/delete/:id', booksController.deleteBook);

router.get('/list', booksController.getBooks);

router.get('/:id', booksController.getBookDetails);

module.exports = router;