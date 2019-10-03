const express = require('express');
const router = express.Router();
const Rental = require('../models/rental');


router.get('', function (req , res){
  Rental.find({} , function(err,foundRental){
      res.json(foundRental);
  });
});

router.get('/:id' , function(req ,res){
    const id = req.params.id;
    Rental.findById (id , function(err,foundRental){

        if(err){
            console.log(err);
            res.status(422).send({errors : [{tital : "Rental Error" , details :"can't find Rental"}]});
        }

        res.json(foundRental)
    });

});

module.exports = router;