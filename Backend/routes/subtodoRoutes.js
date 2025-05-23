const express = require('express');
const router = express.Router();
const subtodoController = require('../controllers/subtodoListController');

router.post('/to-doList/:todoListid/createSubList',subtodoController.CreateSubList)
router.get("/to-doList/:todoListid/getallsublist",subtodoController.GetAllSubLists)
router.get("/to-doList/:todoListid/getsinglesublist/:sublistid",subtodoController.GetSingleSubList)
router.delete("/to-doList/:todoListid/deletesublist/:sublistid",subtodoController.DeleteSubList)
router.patch("/to-doList/:todoListid/updatesublist/:sublistid",subtodoController.UpdateSubList)

module.exports = router;    