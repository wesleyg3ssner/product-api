const Product = require('../models/ProductModel')

exports.form = (req, res) => {
    res.render('form')
}

exports.add = async (req, res) => {
    const { name, description } = req.body

    if(name === '' || description === ''){
        res.redirect('/api/form')
    } else {
        const product = await Product.create({
            name: name,
            description: description
        }).then(() => {
            res.redirect('/api/list-product')
        }).catch(err => res.send(err))
    }
}

exports.showAll = async (req, res) => {
    const products = await Product.findAll()

    res.render('product-list', { products: products })
}

exports.delete = async (req, res) => {
    await Product.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.redirect('/api/list-product')
    }).catch(err => res.send(err)) 
}