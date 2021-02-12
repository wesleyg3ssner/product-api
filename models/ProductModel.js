const db = require('../database/db')

const Product = db.sequelize.define('product', {
    name: {
        type: db.DataTypes.STRING,
        allowNull: false
    },

    description: {
        type: db.DataTypes.STRING,
        allowNull: false
    }
})

/* Product.sync({ force: true }) 
 */
module.exports = Product