const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'database',
    password: 'root',
    port: 5432,
});

module.exports = {
    start: () =>
        client.connect().then(console.log('Database successfully connected!')),
    client,
    createTables: () =>
        client.query(`CREATE TABLE IF NOT EXISTS contacts (
        id SERIAL PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        surname VARCHAR(100) NOT NULL,
        cpf VARCHAR(14),
        email VARCHAR(255),
        telephone VARCHAR(13) NOT NULL,
        cep VARCHAR(9) NOT NULL,
        address VARCHAR(255) NOT NULL,
        number VARCHAR(255) NOT NULL,
        complement VARCHAR(255),
        area VARCHAR(255) NOT NULL,
        city VARCHAR(255) NOT NULL,
        state VARCHAR(255) NOT NULL)`),
};
