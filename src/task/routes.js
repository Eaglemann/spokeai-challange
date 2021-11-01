const { Router } = require('express')

const controller = require('./controller')

router = Router();

router.get("/", controller.getTasks);
router.post("/", controller.addTask);
router.get("/:status", controller.getTaskbyStatus);
router.delete("/:taskId", controller.deleteTask);
router.put("/:taskId", controller.updateTask);

module.exports = router;