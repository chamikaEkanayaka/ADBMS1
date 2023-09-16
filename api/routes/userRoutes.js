const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../models/user');
const user = require('../models/user');
const e = require('express');

//get all users
router.get('/', (req, res, next) => {
    User
    .find()
    .exec()
    .then(result => {
        if(result.length>0){
            console.log(result);
            res.status(200).json(result);
        }else{
            console.log("no user");
            res.status(404).json({
                "message": "no user"
            })
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            "error" : err
        })
    });
})

//get user by userId
router.get('/:userId', (req, res, next) => {
    User
    .findById(req.params.userId)
    .exec()
    .then(result => {
        if(result){
            console.log(result);
            res.status(200).json(result);
        }else{
            res.status(404).json({
                "message": "user not found"
            });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            "error": err
        })
    });
})

//check userId is valid
router.get('/check/:userId', (req, res, next) => {
    User
    .findById(req.params.userId)
    .exec()
    .then(result => {
        if (result == null){
            console.log("not found");
            res.status(404).json({
                "message" : "not found"
            })
        } else {
            console.log("found");
            res.status(200).json({
                "message" : "found"
            })
        }
    })
    .catch(err => {
        console.log(err);
        if (err.name == "CastError"){
            res.status(404).json({
                "message" : "not found"
            })
        } else {
            res.status(500).json({
                "error": err
            })
        }
    });
})

//insert user
router.post('/', (req, res, next) => {
    const user = new User({
        _id: new mongoose.Types.ObjectId,
        email: req.body.email,
        passWd: req.body.passWd,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        phoneNo: req.body.phoneNo,
        userRole: req.body.userRole    
    })

    user
    .save()
    .then(result => {
        console.log("inserted new user",user);
        res.status(200).json(user);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(user);
    });
})

//delete user
router.delete('/:userId', (req, res, next) => {

    if(User.findById(req.params.userId)){
        User.
        deleteOne({_id:req.params.userId})
        .exec()
        .then(result => {
            console.log("deleteed user");
            res.status(200).json({
                "message": "deleteed user"
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                "error": err
            })
        });
    }else{
        console.log("user not found");
        res.status(404).json({
            "message": "user not found"
        })
    }
})

//update user
router.patch('/:userId', (req, res, next) => {
    const id = req.params.userId;
    if(User.findById(id)){
        User
        .updateOne({_id: id}, {$set: {passWd: req.body.newPassWd, firstName: req.body.newFirstName, lastName: req.body.newLastName, address: req.body.newAddress, phoneNo: req.body.newPhoneNo, userRole: req.body.UserRole}})
        .exec()
        .then(result => {
            console.log("updated user");
            console.log(result);
            res.status(200).json({
                "message": "updateed user"
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                "error": err
            })
        });
    }else{
        console.log("user not found");
        res.status(404).json("user not found");
    }
})

module.exports = router;