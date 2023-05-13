const { HttpError } = require("../../helpers");
const { Contact } = require("../../models/contact/contact");

const getContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json(result);
};

module.exports = { getContact };
