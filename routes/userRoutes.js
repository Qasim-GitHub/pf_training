const express=require("express");
const userRoutes=require("../controllers/Users/userController");

const protect=require("../middleware/authMiddleware");
const roleroutes=require("../controllers/Seeder/roleSeeder");
const role=require("../middleware/addRole");

const router = express.Router();


router.post("/UserRegister",role.Middleware,userRoutes.UserRegister);
router.post("/SellerLogin",userRoutes.UserLogin);
router.post("/8",role.Middleware,userRoutes.UserSalary);

router.get("/roleSeeder",protect.verifyToken,roleroutes.roleSeeder);



module.exports = router;