// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/User/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminGuestList from "./pages/Admin/AdminGuestList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Offerings from "./pages/Offerings";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import FAQ from "./pages/FAQ";
import ContactUs from "./pages/ContactUs";
import RegistrationForm from "./pages/User/RegistrationForm";
import "./assets/css/App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            {/* <Route path="/dashboard"element={<ProtectedRoute><Dashboard /></ProtectedRoute>}/>
            <Route path="/admin/guestlist"element={<ProtectedRoute requiredRole="Admin"><AdminGuestList /></ProtectedRoute>}/> */}
             <Route path="/dashboard" element = {<Dashboard/>}/> 
            <Route path="/guestlist" element = {<AdminGuestList/>}/>
            <Route path="/registrationForm" element = {<RegistrationForm/>}/>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/offerings" element={<Offerings />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
