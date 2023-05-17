const express = require("express");

const ctrl = require("../../../controllers/contacts");

const {
  validateBody,
  isValidId,
  authenticate,
} = require("../../../middlewares");

const { contactSchemas } = require("../../../models/contact");

const router = express.Router();

router.get("/", authenticate, ctrl.getAllContacts);

router.get("/:contactId", authenticate, isValidId, ctrl.getContact);

router.post(
  "/",
  authenticate,
  validateBody(contactSchemas.addSchema),
  ctrl.addContact
);

router.delete("/:contactId", authenticate, isValidId, ctrl.deleteContact);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(contactSchemas.addSchema),
  ctrl.updateContact
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(contactSchemas.updateFavoriteSchema),
  ctrl.updateStatusContact
);

module.exports = router;
