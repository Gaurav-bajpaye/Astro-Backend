const express = require('express');
const router = express.Router();
const { getAstrologers, getAstrologerById, addAstrologer, updateAstrologer } = require('../controllers/astrologerController');

router.get('/', getAstrologers);
router.get('/:id', getAstrologerById);
router.post('/', addAstrologer);
router.put('/:id', updateAstrologer);

module.exports = router;
