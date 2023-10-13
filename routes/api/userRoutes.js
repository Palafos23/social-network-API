const router = require('express').Router();

const {
    getAllUsers,
    getOneUser,
    newUser,
    updateExistingUser,
    deleteExistingUser,
    addNewFriend,
    DeleteNewFriend
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
  router.route(':/userid/friends')
   .post(addNewFriend)
  // /api/users/:userId/friends/:friendsId
  router.route(':/userid/friends/:friendId')
  .post(DeleteNewFriend)

  module.exports = router;
  