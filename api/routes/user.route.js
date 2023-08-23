import express from "express";
import { deleteUser, getUser, updateUser, updatePassword, getUsers, admindeleteUser,adminSelectedDeleteUser,adminblockUser,getBlockedUsers, adminunblockUsers } from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.delete("/:id", verifyToken, deleteUser);
router.delete("/admin/:id",  admindeleteUser);
router.post("/admin/block/:id",  adminblockUser);
router.delete("/admin/selected/:ids",  adminSelectedDeleteUser);
router.get("/:id", getUser);
router.put("/update/:id", verifyToken, updateUser);
router.put("/updatePassword/:userId", verifyToken, updatePassword);
router.get("/", getUsers)
router.get("/admin/blockeduser", getBlockedUsers)
router.delete("/admin/unblockuser/:id", adminunblockUsers)
export default router;