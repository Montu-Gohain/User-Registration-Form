const { Router } = require("express");
const {
  Get_All_Users,
  Register_user,
} = require("../controller/register_controller");
const router = Router();

router.get("/", Get_All_Users);
router.post("/", Register_user);

module.exports = router;
