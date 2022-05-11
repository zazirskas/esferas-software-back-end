const yup = require('yup');
const ContactServices = require('../services/contactServices');

class ContactController {
    static async store(req, res) {
        const { body } = req;
        const schema = yup.object().shape({
            name: yup.string().required(),
            surname: yup.string().required(),
            cpf: yup.string().nullable(),
            email: yup.string().nullable().email(),
            telephone: yup.string().min(12).max(13),
            cep: yup.string().required().min(9),
            address: yup.string().required(),
            number: yup.string().required(),
            complement: yup.string().nullable(),
            area: yup.string().required(),
            city: yup.string().required(),
            state: yup.string().required(),
        });

        try {
            await schema.validate(body);
        } catch (error) {
            console.log(error);
            return res.status(400).send(error);
        }

        try {
            const contact = await ContactServices.insert(body);
            return res.status(200).json({
                messsage: 'Contact created!',
            });
        } catch (error) {
            return res.status(400).send(error);
        }
    }

    static async retrieve(req, res) {
        try {
            const { rows } = await ContactServices.get();
            return res.status(200).json(rows);
        } catch (error) {
            console.log(error);
            return res.status(400).send(error);
        }
    }

    static async retrieveById(req, res) {
        try {
            const { id } = req.params
            const { rows } = await ContactServices.get(id);
            return res.status(200).json(rows);
        } catch (error) {
            console.log(error);
            return res.status(400).send(error);
        }
    }

    static async remove(req, res) {
        try {
            const { id } = req.params;
            const response = await ContactServices.delete(id);
            return res.status(200).json({
                message: `Usuário id ${id} deletado com sucesso`,
            });
        } catch (error) {
            console.log(error);
            return res.status(400).send(error);
        }
    }

    static async update(req, res) {
        const { id } = req.params;
        const { body } = req;
        const schema = yup.object().shape({
            name: yup.string().required(),
            surname: yup.string().required(),
            cpf: yup.string().nullable(),
            email: yup.string().nullable().email(),
            telephone: yup.string().min(12).max(13),
            cep: yup.string().required().min(9),
            address: yup.string().required(),
            number: yup.string().required(),
            complement: yup.string().nullable(),
            area: yup.string().required(),
            city: yup.string().required(),
            state: yup.string().required(),
        });
        try {
            await schema.validate(body);
        } catch (error) {
            console.log(error);
            return res.status(400).send(error);
        }
        try {
            const response = await ContactServices.edit(id, body);
            return res.status(200).json({
                message: response,
            });
        } catch (error) {
            console.log(error);
            return res.status(400).send(error);
        }
    }
}

module.exports = ContactController;
