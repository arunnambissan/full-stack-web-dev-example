// import and initialize express framework (node js)
const express = require('express');
const app = express();

// import a dummy database
const dummyDatabase = require('./dummyDatabase');

// enables Cross-Origin Resource Sharing
const cors = require('cors');
app.use(cors());


/**
 * endpoints or urls >
 */
app.get('/hello', (req, res) => {
    res.send({ message: "Hello" });
});

app.get('/fruits', (req, res) => {
    res.send(dummyDatabase.getAllItems('fruits'));
});

app.get('/fruits/:id', (req, res) => {
    res.send(dummyDatabase.getAnItem('fruits', req.params.id));
});

app.get('/vegetables', (req, res) => {
    res.send(dummyDatabase.getAllItems('vegetables'));
});

app.get('/vegetables/:id', (req, res) => {
    res.send(dummyDatabase.getAnItem('vegetables', req.params.id));
});






// starts running the server and listen for incoming requests in port 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
