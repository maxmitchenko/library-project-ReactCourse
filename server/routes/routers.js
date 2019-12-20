const express = require('express')

const BookCtrl = require('../controllers/book-ctrl')
const OwnerCtrl = require('../controllers/owner-ctrl')

const router = express.Router()

router.post('/book', BookCtrl.createBook)
router.put('/book/:id', BookCtrl.updateBook)
router.delete('/book/:id', BookCtrl.deleteBook)
router.get('/book/:id', BookCtrl.getBookById)
router.get('/books', BookCtrl.getBooks)

router.get('/owner/:id', OwnerCtrl.getOwnerByLogin)

module.exports = router