const express = require('express');
const router = express.Router();
const ContactController = require('../controller/contactController');

router.get('/', ContactController.retrieve);
router.get('/:id', ContactController.retrieveById);
router.post('/', ContactController.store);
router.delete('/:id', ContactController.remove);
router.put('/:id', ContactController.update);

module.exports = router;
