const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.get('/fruits', (req, res) => {
    const data = ["Mango", "Banana", "Apple", "Guava", "Jackfruit", "Orange"];
    res.send(data);
});

app.get('/vegetables', (req, res) => {
    const data = ["Carrot", "Spinach", "Tomato", "Cucumber", "Onion", "Garlic"];
    res.send(data);
});

app.get('/hello', (req, res) => {
    res.send("Hello");
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});