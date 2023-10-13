const router = require('express').Router();

const {
    getAllThoughts,
    getOneThought,
    newThought,
    updateExistingThought,
    deleteExistingThought,
  } = require('../../controllers/thought');

  const {
    createdReaction,
    deleteExistingReaction,
  } = require('../../controllers/reaction');

  // /api/thoughts
  router.route('/').get(getAllThoughts).post(newThought);
  
  // /api/thoughtss/:thoughtId
  router
    .route('/:thoughtId')
    .get(getOneThought)
    .put(updateExistingThought)
    .delete(deleteExistingThought);

  router.route('/:thoughtId/reactions')
    .post(createdReaction)
    .delete(deleteExistingReaction);
  
module.exports = router;