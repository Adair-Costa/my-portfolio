const express = require('express');
const userController = require('../controllers/userControllers');

// ROUTES
const router = express.Router();

router
    .route('/api/v1/email')
    .get(userController.getAllUsers)
    .post(userController.createUser);
router
    .route('/api/v1/email/:id')
    .get(userController.getUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser);

module.exports = router;
