const { Contact } = require("../models/contact");

const { ctrlWrapper } = require("../helpers");

const getAllContacts = async (req, res) => {
  const result = await Contact.find();

  res.json(result);
};

// const getContact = async (req, res) => {
//   const { contactId } = req.params;
//   const result = await contacts.getContactById(contactId);

//   if (!result) {
//     throw HttpError(404, "Not found");
//   }

//   res.json(result);
// };

const addContact = async (req, res) => {
  const result = await Contact.create(req.body);

  res.status(201).json(result);
};

// const deleteContact = async (req, res) => {
//   const { contactId } = req.params;
//   const result = await contacts.removeContact(contactId, req.body);

//   if (!result) {
//     throw HttpError(404, "Not found");
//   }

//   res.json({
//     message: "Delete success",
//   });
// };

// const updateContact = async (req, res) => {
//   const { contactId } = req.params;
//   const result = await contacts.updateContact(contactId, req.body);

//   if (!result) {
//     throw HttpError(404, "Not found");
//   }

//   res.json(result);
// };

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  // getContact: ctrlWrapper(getContact),
  addContact: ctrlWrapper(addContact),
  // deleteContact: ctrlWrapper(deleteContact),
  // updateContact: ctrlWrapper(updateContact),
};
