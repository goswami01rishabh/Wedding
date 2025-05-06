// src/pages/admin/GuestList.jsx
import { useEffect, useState } from "react";

function GuestList() {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    const fetchGuests = async () => {
      const token = localStorage.getItem("token");

      const response = await fetch("http://localhost:28991/api/admin/guests", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setGuests(data);
      } else {
        alert("Failed to fetch guests");
      }
    };

    fetchGuests();
  }, []);

  const handleApproval = async (guestId, approved) => {
    const token = localStorage.getItem("token");

    const response = await fetch(
      `http://localhost:28991/api/admin/approve/${guestId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ approved }),
      }
    );

    if (response.ok) {
      alert("Guest status updated");
      setGuests((prev) =>
        prev.map((g) =>
          g.id === guestId ? { ...g, isApproved: approved } : g
        )
      );
    } else {
      alert("Failed to update status");
    }
  };

  return (
    <div>
      <h2>All Guests</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Payment</th>
            <th>Status</th>
            <th>Approve</th>
          </tr>
        </thead>
        <tbody>
          {guests.map((guest) => (
            <tr key={guest.id}>
              <td>{guest.firstName} {guest.lastName}</td>
              <td>{guest.email}</td>
              <td>{guest.phone}</td>
              <td>{guest.hasPaid ? "Paid" : "Pending"}</td>
              <td>{guest.isApproved ? "Approved" : "Pending"}</td>
              <td>
                <button
                  disabled={!guest.hasPaid}
                  onClick={() => handleApproval(guest.id, true)}
                >
                  Approve
                </button>
                <button
                  disabled={!guest.hasPaid}
                  onClick={() => handleApproval(guest.id, false)}
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GuestList;
