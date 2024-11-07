const express = require("express");
const {
  createBooking,
  getDashboard,
  updateBooking,
  deleteBooking,
} = require("../controllers/bookingController");
const router = express.Router();

router.post("/", createBooking);
router.get("/dashboard", getDashboard);
router.put("/:id", updateBooking);
router.delete("/:id", deleteBooking);

module.exports = router;
