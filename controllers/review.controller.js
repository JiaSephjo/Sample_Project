const Review = require('../models/Review.model');

exports.addReview = async (req, res) => {
  try {
    const review = new Review({
      ...req.body,
      userId: req.user._id
    });
    await review.save();
    res.status(201).json(review);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
