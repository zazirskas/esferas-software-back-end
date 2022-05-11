const express = require('express');
const { contacts } = require('./routers');
const db = require('./config/db');
const app = express();
const port = 3000;
const cors = require('cors')

db.start();
db.createTables();

app.use(cors());
app.use(express.json());
app.use('/contacts', contacts);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
