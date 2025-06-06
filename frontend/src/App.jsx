import React from 'react'
import {Route,Routes} from 'react-router-dom'
import LoginAs from './pages/LoginAs'
import PatientLogin from './pages/PatientLogin'
import DoctorLogin from './pages/DoctorLogin'
import AdminLogin from './pages/AdminLogin'
import PatientSignup from './pages/PatientSignup'
import PatientDashboard from './pages/PatientDashboard'
import AdminDashboard from './pages/AdminDashboard'
import SpecialistList from './pages/SpecialistList'
import BookingConfirmed from './pages/ConfirmBooking'
import DoctorDashboard from './pages/Doctordashboard'


const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Routes>
        <Route  path='/' element={<LoginAs />}/>
         <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/doctor-login" element={<DoctorLogin />} />
        <Route path="/patient-login" element={<PatientLogin />} />
        <Route path="/patient-signup" element={<PatientSignup />} /> 
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="/admin_dashboard" element={<AdminDashboard />} />
        <Route path="/patient-dashboard/specialist" element={<SpecialistList />} />
        <Route path="/patient-dashboard/specialist/booking-confirmed" element={<BookingConfirmed />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        
        
        
      </Routes>


    </div>
  )
}

export default App
