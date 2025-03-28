
const express = require('express');
const router = express.Router();
const Appointment = require("../models/Appointments");
const { v4: uuidv4 } = require("uuid");

router.get("/", async (req, res) => {
    try {
      const appointments = await Appointment.find();
      if (!appointments.length) {
        return res.status(404).json({ error: "No appointments found" });
      }
      res.json(appointments);
    } catch (error) {
      console.error("Error fetching appointments:", error);
      res.status(500).json({ error: "Failed to fetch appointments" });
    }
  });
  
  
  router.post("/book", async (req, res) => {
    try {
      const { patient_id, doctor_name, patient_name, specialization, appointment_date, time_slot } = req.body;
  
      // Check for missing fields
      if (!patient_id || !doctor_name || !patient_name || !specialization || !appointment_date || !time_slot) {
        return res.status(400).json({ error: "Missing required fields" });
      }
  
      // Generate a unique _id
      const newAppointment = new Appointment({
        _id: uuidv4(), // Generate unique ID
        patient_id,
        doctor_name,
        patient_name,
        specialization,
        appointment_date,
        time_slot,
        status: "Confirmed", // Default status
      });
  
      await newAppointment.save();
      res.status(201).json({ message: "Appointment booked successfully", appointment: newAppointment });
  
    } catch (error) {
      console.error("Error booking appointment:", error);
      res.status(500).json({ error: error.message });
    }
  });
  
  module.exports = router;
  


  // ✅ Get Appointments by Patient ID
  router.get("/:patientId", async (req, res) => {
    try {
      const { patientId } = req.params;
      console.log(`🔍 Received patientId: '${patientId}' (Type: ${typeof patientId})`);
  
      // Fetch appointments where patient_id matches the given patientId
      const appointments = await Appointment.find({ patient_id: patientId });
  
      if (!appointments.length) {
        console.log("⚠️ No appointments found for this patient.");
        return res.status(404).json({ message: "No appointments found for this patient" });
      }
  
      console.log("📌 Found Appointments:", appointments);
      res.json(appointments);
    } catch (error) {
      console.error("❌ Error fetching appointments:", error);
      res.status(500).json({ message: "Error fetching appointments", error });
    }
  });
  
  
  module.exports = router;