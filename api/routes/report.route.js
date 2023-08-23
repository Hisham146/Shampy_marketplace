import { verifyToken } from "../middleware/jwt.js";
import express from "express";
import { postReport, getReports,adminSelectedDeleteAd } from "../controllers/report.controller.js";


const router = express.Router();
router.post("/reportpost", verifyToken, postReport);
router.get("/getreports", getReports)
router.delete("/admin/selected/:ids",  adminSelectedDeleteAd);
export default router;