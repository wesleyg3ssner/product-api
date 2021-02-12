const express = require('express')

const router = express.Router()

const ProductController = require('../controllers/ProductController')

router.get('/form', ProductController.form)
router.post('/cad-product', ProductController.add)
router.get('/list-product', ProductController.showAll)

router.get('/del-product/:id', ProductController.delete) // Pode alterar o verbo 'get' pelo verbo 'delete' para testar fora do browser (postman, insomnia)

module.exports = router