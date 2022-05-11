const { connectionString } = require('pg/lib/defaults');
const { client } = require('../config/db');

class Contact {
    static async create(values) {
        const queryText = `INSERT INTO contacts(name, surname, cpf, email, telephone, cep, address, number, complement, area, city, state) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`;
        const arrayValues = Object.values(values);
        try {
            return await client.query(queryText, arrayValues);
        } catch (err) {
            console.log(err.stack);
        }
    }
    static async find(id) {
        const queryText = id
            ? `SELECT * FROM contacts WHERE id = $1`
            : `SELECT * FROM contacts`;
        const arrayValues = [id];
        try {
            if (id) {
                return await client.query(queryText, arrayValues);
            } else {
                return await client.query(queryText);
            }
        } catch (err) {
            console.log(err.stack);
        }
    }
    static async delete(id) {
        const queryText = `DELETE FROM contacts WHERE id = $1;`;
        const arrayValues = [id];
        try {
            return await client.query(queryText, arrayValues);
        } catch (err) {
            console.log(err.stack);
        }
    }

    static async update(id, values) {
        const queryText = `UPDATE contacts
        SET name = $2,
            surname = $3,
            cpf = $4,
            email = $5,
            telephone = $6,
            cep = $7,
            address = $8,
            number = $9,
            complement = $10,
            area = $11,
            city = $12,
            state = $13
        WHERE id = $1;`;
        const arrayValues = [id, ...Object.values(values)];
        try {
            return await client.query(queryText, arrayValues);
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = Contact;
