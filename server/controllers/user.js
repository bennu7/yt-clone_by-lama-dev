export const test = (req, res) => {
  //   console.log("test if work");
  res.status(200).json({
    status: true,
    message: "success",
  });
};
