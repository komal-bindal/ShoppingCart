const route = require('express').Router();
const Product  = require("../../db").Product
route.get('/',(req, res)=>{
    Product.findAll().then((products)=>{
        res.status(200).send(products)
    }).catch((error)=>{
        res.status(500).send({
            error: "Can not retrieve products"
        })
    })
})
route.post('/',(req, res)=>{
    if(isNaN(req.body.price)){
        return res.status(403).send({
            error:"price is not valid number"
        })
    }
    Product.create({
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        price: parseFloat(req.body.price)
    }).then((product)=>{
        res.status(201).send(product)
    }).catch((error)=>{
            res.status(501).send({
                error:"can not add product"
            })
    })
})
exports = module.exports= route