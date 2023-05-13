const { addContact } = require("./addContact");
const { getContact } = require("./getContact");
const { deleteContact } = require("./deleteContact");
const { getAllContacts } = require("./getAllContacts");
const { updateContact } = require("./updateContact");
const { updateStatusContact } = require("./updateStatusContact");
const { ctrlWrapper } = require("../../helpers");

module.exports = {
  addContact: ctrlWrapper(addContact),
  deleteContact: ctrlWrapper(deleteContact),
  getAllContacts: ctrlWrapper(getAllContacts),
  getContact: ctrlWrapper(getContact),
  updateContact: ctrlWrapper(updateContact),
  updateStatusContact: ctrlWrapper(updateStatusContact),
};
