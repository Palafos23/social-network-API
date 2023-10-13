const router = require('express').Router();

const {
    getAllUsers,
    getOneUser,
    newUser,
    updateExistingUser,
    deleteExistingUser,
  } = require('../../controllers/user');
  
  // /api/users
  router.route('/').get(getAllUsers).post(newUser);
  
  // /api/users/:userId
  router
    .route('/:userId')
    .get(getOneUser)
    .put(updateExistingUser)
    .delete(deleteExistingUser);
  // /api/users/:userId/friends

   // /api/users/:userId/friends/:friendsId

  module.exports = router;
  