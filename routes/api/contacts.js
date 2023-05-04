const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validateBody } = require("../../middlewares");

const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", ctrl.getAllContacts);

// router.get("/:contactId", ctrl.getContact);

router.post("/", validateBody(schemas.addSchema), ctrl.addContact);

// router.delete("/:contactId", ctrl.deleteContact);

// router.put("/:contactId", validateBody(schemas.addSchema), ctrl.updateContact);

module.exports = router;
