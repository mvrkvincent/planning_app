import express from "express";

const router = express.Router();

router.post("/planner", (req, res) => {
	// req.body:  { start: dt, end: dt, travelers: int, interests: arr[], activity: str, maxBudget: int }
	// iterate and validate. catch => return error
	// build out query string (per OpenAI API documentation)
	// POST to OpenAI API (Axios?)
	// Format response + send
});
