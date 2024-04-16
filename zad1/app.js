const express = require('express');
const app = express();


app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send('In progress...');
});


app.use((req, res, next) => {
    res.status(404).send("404 Not Found");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});