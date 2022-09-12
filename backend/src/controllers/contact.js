import createError from 'http-errors';
import { Contact } from '../models';

export const readAll = async (req, res, next) => {
    try {
        const contacts = await Contact.findAll();
        return res.status(200).json([...contacts]);
    } catch (error) {
        return next(error);
    }
}

export const createContact = async (req, res, next) => {
    const { firstName, lastName, phoneNumber } = req.body;
    try {
        const contact = await Contact.findOne({
            where: {
                phoneNumber
            }
        });

        if (contact) {
            throw createError(400, 'A contact is already existing');
        }

        const newContact = await Contact.create({
            firstName,
            lastName,
            phoneNumber
        });

        return res.status(200).json({ message: 'successfully added!', data: newContact });

    } catch (error) {
        return next(error);
    }
}

export const readContact = async (req, res, next) => {
    const { id } = req.params;
    try {
        const contact = await Contact.findByPk(id);
        if (!contact) throw createError(400, 'The contact is not existing')
        return res.status(200).json({ contact });
    } catch (error) {
        return next(error);
    }
}

export const updateContact = async (req, res, next) => {
    const { firstName, lastName, phoneNumber } = req.body;
    const { id } = req.params;

    try {
        const contact = await Contact.findByPk(id);
        if (!contact) throw createError(400, 'The contact is not existing')
        await contact.update({
            firstName,
            lastName,
            phoneNumber
        })
        return res.status(200).json({ contact });
    } catch (error) {
        return next(error);
    }
}

export const deleteContact = async (req, res, next) => {
    try {
        await Contact.destroy({
            where: {
                id: req.params.id
            }
        });
        return res.status(200).json({ message: "Successfully removed!" });
    } catch (error) {
        return next(error);
    }
}
