import express from "express";
const router = express.Router();
import userRouter from "./users.mjs";
import commentRouter from "./comments.mjs";
import videoRouter from "./videos.mjs";
import authRouter from "./auth.mjs";

router.use("/api/v1/users", userRouter);
router.use("/api/v1/videos", videoRouter);
router.use("/api/v1/commments", commentRouter);
router.use("/api/v1/auth", authRouter);

export default router;
