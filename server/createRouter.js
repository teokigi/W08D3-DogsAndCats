const express = require ('express');

const createRouter = function(data){
    const router = express.Router();

    router.get('/',function(req,res){
        res.json(data)
    })

    return router;
};

module.exports = createRouter;
