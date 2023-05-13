const { HttpError } = require("../../helpers");
const { Contact } = require("../../models/contact/contact");

const deleteContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json({
    message: "Delete success",
  });
};

module.exports = { deleteContact };
