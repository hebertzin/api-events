import express from "express";

export const app = express();

app.get("/api/v1/ping", (req, res) => {
  return res.status(200).json({ msg: "pong" });
});
