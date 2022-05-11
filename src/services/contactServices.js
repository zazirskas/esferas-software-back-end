const Contact = require('../model/contact');

class ContactService {
    static async insert(contact) {
        return await Contact.create(contact);
    }

    static async get(id) {
        return await Contact.find(id);
    }

    static async edit(id, value) {
        return await Contact.update(id, value)
    }

    static async delete(id) {
        return await Contact.delete(id);
    }
}

module.exports = ContactService;
