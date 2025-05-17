const express = require('express');
const router = express.Router();
const subtodoController = require('../controllers/subtodoListController');

router.post("/createsublist",subtodoController.CreateSubList)
router.get("/getsinglesublist",subtodoController.GetSingleSubList)
router.get("/getallsublist",subtodoController.GetAllSubLists)
router.delete("/deletesublist",subtodoController.DeleteSubList)
router.patch("/updatesublist",subtodoController.UpdateSubList)

module.exports = router