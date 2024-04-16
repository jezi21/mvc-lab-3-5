const express = require('express');
const app = express();


app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3000;


const homeRoutes = require('./routes/home');
const booksRoutes = require('./routes/books');
const authorsRoutes = require('./routes/authors');



app.use('/', homeRoutes);
app.use('/book', booksRoutes);
app.use('/author', authorsRoutes);




app.use((req, res, next) => {
    res.status(404).send("404 Not Found");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});