import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../../assets/css/Dashboard.css";

function Dashboard() {
  const [guestDetails, setGuestDetails] = useState({});
  const [formApproved, setFormApproved] = useState(false); // Dummy state for approval

  useEffect(() => {
    const fetchGuestDetails = async () => {
      try {
        const response = await fetch("http://localhost:28991/api/Guest/Profile", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch guest details");
        }

        const data = await response.json();
        setGuestDetails(data);
        setFormApproved(data.isApproved); // Assume backend gives approval status
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchGuestDetails();
  }, []);

  return (
    <div className="dashboard-container" style={{ backgroundColor: "burlywood", padding: "2rem" }}>
      <section
  className="welcome-message"
  style={{
    backgroundColor: "#fff8e1",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    marginBottom: "2rem",
  }}
>
  <h2 style={{ color: "#821131", marginBottom: "1rem" }}>💌 Welcome from Rishabh & Ishika</h2>
  <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
    <strong>Namaste and warm greetings!</strong><br />
    We are beyond thrilled to invite you to not just a wedding, but a heartfelt celebration of love, culture, and connection.
    <br /><br />
    Join us in the royal city of <strong>Bikaner</strong>, where you'll experience the magic of <strong>Indian traditions</strong>, the warmth of <strong>Rajasthani hospitality</strong>, and the joy of a <strong>once-in-a-lifetime wedding celebration</strong>.
    <br /><br />
    From dancing under the stars in a desert camp to the joyful chaos of our wedding rituals, we promise you'll leave with unforgettable memories—and a place in our hearts forever.
    <br /><br />
    <em>Your presence means the world to us. Let’s create magic together.</em>
    <br /><br />
    With love,<br />
    <strong>Rishabh & Ishika</strong>
  </p>
</section>


      <section className="package-details">
        <h3 style={{ color: "#821131" }}>📦 Package Options</h3>
        <table border="1" cellPadding="10" style={{ width: "100%", backgroundColor: "#fff" }}>
          <thead>
            <tr style={{ backgroundColor: "#821131", color: "#fff" }}>
              <th>Package</th>
              <th>Room Type</th>
              <th>Price ($)</th>
              <th>Inclusions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Basic</td>
              <td>Sharing</td>
              <td>1500 $</td>
              <td>All 4 Days Events, Meals, Stay</td>
            </tr>
            <tr>
              <td>Comfort</td>
              <td>Private Room</td>
              <td>2000 $</td>
              <td>All 4 Days Events, Meals, Private Stay</td>
            </tr>
            <tr>
              <td>Deluxe</td>
              <td>Special Treatment</td>
              <td>2500 $</td>
              <td>Everything + Extra Hospitality</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="guest-info">
        <h3 style={{ color: "#821131" }}>🧾 Your Details</h3>
        <p><strong>Name:</strong> {guestDetails.firstName || "Guest"}</p>
        <p><strong>Email:</strong> {guestDetails.email}</p>
        <p><strong>Phone:</strong> {guestDetails.phone}</p>
        <p><strong>Address:</strong> {guestDetails.address || "Not Provided"}</p>
      </section>

      <section className="actions">
      <Link to="/registrationForm">
  <button
    style={{
      backgroundColor: "#821131",
      color: "#fff",
      padding: "10px 20px",
      borderRadius: "5px",
      margin: "10px 0",
    }}
  >
    Fill Registration Form
  </button>
</Link>

        {formApproved && (
          <button style={{ backgroundColor: "green", color: "#fff", padding: "10px 20px", borderRadius: "5px" }}>
            Make Payment
          </button>
        )}
        {!formApproved && <p style={{ color: "#821131" }}>Please complete and get approval before payment.</p>}
      </section>

      <section className="notes">
        <h4 style={{ color: "#821131" }}>📝 Notes:</h4>
        <ul>
          <li>Transport within Bikaner, all meals (breakfast, lunch, dinner, snacks), and accommodation included.</li>
          <li>Reaching Bikaner is not included. You can arrive via Delhi or Jaipur – we can assist for an extra charge.</li>
          <li>Traditional dresses for events can be arranged upon request with minimal cost.</li>
          <li>Cancellations made before January 10, 2026, are eligible for a 95% refund.</li>
        </ul>
      </section>
    </div>
  );
}

export default Dashboard;
