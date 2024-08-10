const Astrologer = require('../models/Astrologer');

// Get all astrologers with pagination and filtering
const getAstrologers = async (req, res) => {
  try {
    console.log(req.query);
    const query = {};
    if (req.query.name) query.name = { $regex: name, $options: 'i' };
    if (req.query.expertise) query.expertise = { $regex: expertise, $options: 'i' };
    if (req.query.experience) query.experience = { $gte: experience };

    const astrologers = await Astrologer.find(query)
      .exec();

    
    res.json({
      astrologers,
    });
  } catch (err) {
    console.log(err.message);
    
    res.status(500).json({ message: err.message });
  }
};

// Get astrologer by ID
const getAstrologerById = async (req, res) => {
  try {
    const astrologer = await Astrologer.findById(req.params.id);
    if (!astrologer) return res.status(404).json({ message: 'Astrologer not found' });
    res.json(astrologer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add new astrologer
const addAstrologer = async (req, res) => {
  try {
    const { name, expertise, experience, details } = req.body;
    const newAstrologer = new Astrologer({ name, expertise, experience, details });
    const savedAstrologer = await newAstrologer.save();
    res.status(201).json(savedAstrologer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update astrologer
const updateAstrologer = async (req, res) => {
  try {
    const { name, expertise, experience, details } = req.body;
    const updatedAstrologer = await Astrologer.findByIdAndUpdate(
      req.params.id,
      { name, expertise, experience, details },
      { new: true }
    );
    if (!updatedAstrologer) return res.status(404).json({ message: 'Astrologer not found' });
    res.json(updatedAstrologer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getAstrologers,
  getAstrologerById,
  addAstrologer,
  updateAstrologer,
};
