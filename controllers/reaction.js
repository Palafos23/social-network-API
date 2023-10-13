const { Thought } = require('../models');


module.exports = {
//post to create a reaction stored in a single thoughts 'reactions' array field
async createdReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { thoughtid: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: 'No thought associated with this ID' });
      }

      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
//delete to pull and remove a reaction by reactions 'reactionId' value
async deleteExistingReaction(req, res) {
    try {
        const thought = await Thought.findOneAndUpdate(
          { thoughtid: req.params.thoughtId },
          { $pull: { reactions: { reactionId: req.params.reactionId } } },
          { runValidators: true, new: true }
        );
  
        if (!thought) {
          return res
            .status(404)
            .json({ message: 'No thought found with that ID' });
        }
  
        res.json(thought);
      } catch (err) {
        res.status(500).json(err);
      }
    },
}