import express from "express";
import {
  getAllWorkouts,
  createWorkout,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} from "../controllers/workoutController.js";

const router = express.Router();

router.get("/", getAllWorkouts);
router.post("/", createWorkout);
router.get("/:id", getWorkout);
router.delete("/:id", deleteWorkout);
router.patch("/:id", updateWorkout);

export default router;
