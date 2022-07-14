import express from "express";
const router = express.Router();
import userRouter from "./users.mjs";
import commentRouter from "./comments.mjs";
import videoRouter from "./videos.mjs";

router.use("/api/v1/users", userRouter);
router.use("/api/v1/videos", videoRouter);
router.use("/api/v1/commments", commentRouter);

export default router;
