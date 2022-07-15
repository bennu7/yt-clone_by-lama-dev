import express from "express";
const app = express();
app.use(express.json());

// handling middleware error
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.status || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

export default app;
