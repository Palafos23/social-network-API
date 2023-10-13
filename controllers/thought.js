const { Thought, User } = require('../models');

module.exports = {
//get all thoughts
async getAllThoughts(req, res) {
    try {
      const thought = await Thought.find();
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
//get a single thought by "id"
async getOneThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId })
       .select('-__v');

      if (!thought) {
        return res.status(404).json({ message: 'No thoughtm associated with this ID' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
//post to create a thought 
async newThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      const user = await User.findOneAndUpdate(
        { userid: req.body.userId },
        { $push: { thoughts: thought._id } },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({ message: 'No user associated with this ID' });
      }

      res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
//put to update thought by its "id"
async updateExistingThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { thoughtid: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        res.status(404).json({ message: 'No thought with this id!' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
//delete to remove a thought by its "id"
async deleteExistingThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

      if (!thought) {
        res.status(404).json({ message: 'No thought with that ID' });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
}
