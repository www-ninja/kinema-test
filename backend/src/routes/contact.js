import express from 'express';

import { 
    readAll,
    readContact,
    updateContact,
    deleteContact,
    createContact
} from '../controllers/contact';

const router = express.Router();

router.post('/',createContact);
router.get('/', readAll);
router.get('/:id', readContact);
router.put('/:id', updateContact);
router.delete('/:id', deleteContact);

module.exports = router;
