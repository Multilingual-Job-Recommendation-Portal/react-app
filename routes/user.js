const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
dotenv.config();

// Importing the controller
const UserController = require('../controllers/user');

// Creating a new user
router.post('/create', UserController.createUser);

// Getting a user by email
router.get('/email', UserController.getUserByEmail);

// Getting a user by id
router.get('/id', UserController.getUserById);

// updating a user by id
router.put('/update', UserController.updateUser);

// deleting a user by email
router.delete('/delete', UserController.deleteUser);

// get all users
router.get('/all', UserController.getAllUsers);

module.exports = router;