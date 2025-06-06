🏥 MediConnect  -Intelligent Doctor Appointment Booking System

An AI-enhanced web application that streamlines the healthcare appointment process by enabling patients to book appointments with the right specialists based on their known diseases or entered symptoms. The system leverages intelligent suggestions using a pre-trained AI model and provides seamless role-based functionality for patients, doctors, and admins.

------------------------------------
🚀 Project Importance

In today's fast-paced world, managing healthcare appointments efficiently is critical for both patients and healthcare providers. This system aims to:

- Enhance patient experience by enabling symptom-based specialist suggestions.
- Reduce doctor workload through smart availability and sub-slot management.
- Improve appointment scheduling with real-time availability tracking.
- Ensure efficient hospital management via an admin dashboard for doctor and appointment management.
- Automate communication through email notifications for appointment confirmations.

This intelligent system reduces waiting times, avoids scheduling conflicts, and ensures patients connect with the right healthcare professionals quickly.

------------------------------------
⚙️ Tech Stack

- Frontend: React, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB
- AI Model: MISTRAL API
- Authentication: JWT
- Email Service: Nodemailer

------------------------------------
📁 Project Structure

doctor-appointment-system/
├── backend/
│   ├── server.js
│   └── ... (routes, models)
├── frontend/
│   ├── src/
│   └── ...
└── README.txt

------------------------------------
🧪 How to Run the Project

1. Clone the Repository

   git clone https://github.com/K-Saritha/doctor-appointment-system.git
   cd doctor-appointment-system

2. Run Backend Server

   cd backend
   npm install
   node server.js

   The backend will start at: http://localhost:5000

3. Run Frontend React App

   cd ../frontend
   npm install
   npm run dev

   The frontend will start at: http://localhost:5173

------------------------------------
🔐 Admin Login Details

Use the following credentials to access the Admin Panel:

- Username: admin
- Password: admin123

Admin can:
- Add or remove doctors
- View all appointments
- Manage doctor availability

------------------------------------
📧 Features

- Patient symptom-based booking with AI support
- Specialist recommendation 
- Email confirmations for appointments
- Doctor dashboard for appointment and availability management
- Admin dashboard for system control
- Subslot availability tracking
- JWT-based secure authentication


