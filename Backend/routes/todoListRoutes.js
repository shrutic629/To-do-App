const express = require('express');
const router = express.Router();
const ListController = require('../controllers/todoListControllers')

router.post("/createlist",ListController.CreateList)
router.get("/getalllist",ListController.GetAllLists)
router.get("/:id",ListController.GetSingleList)
router.delete("/:id",ListController.DeleteList)
router.patch("/:id",ListController.UpdateList)

module.exports = router