const { Contact } = require("../../models/contact/contact");

const getAllContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10, favorite } = req.query;

  const skip = (page - 1) * limit;

  if (favorite) {
    const result = await Contact.find({ owner }, "-createdAt -updatedAt", {
      skip,
      limit,
    })
      .populate("owner", "name")
      .all("favorite", favorite);
    res.json(result);
  }

  const result = await Contact.find({ owner }, "-createdAt -updatedAt", {
    skip,
    limit,
  }).populate("owner");

  res.json(result);
};

module.exports = { getAllContacts };
