const { request, response } = require('express');


const usersGet = (req = request, res = response) => {

    const { q, nombre= "No name", page=1, apikey, limit } = req.query;

    res.json({
        msg: 'get API - controller',
        q,
        nombre,
        apikey,
        page,
        limit,
    })
}

const usersPut = (req, res) => {

    const id = req.params.id;

    res.json({
        msg: 'put API - controller',
        id,
    })
}

const usersPost = (req, res) => {

    // const body = req.body; //va en el request
    const {nombre, edad} = req.body;

    res.status(201).json({
        msg: 'post API - controller',
        nombre,  //lo recibo y lo reflejo
        edad,
    })
}

const usersPatch = (req, res) => {
    res.json({
        msg: 'patch API - controller'
    })
}

const usersDelete = (req, res) => {
    res.json({
        msg: 'delete API - controller'
    })
}

module.exports = {
    usersGet,
    usersPut,
    usersPost,
    usersPatch,
    usersDelete,

}