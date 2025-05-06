// src/pages/Offerings.jsx
import '../assets/css/Offerings.css';
import day1Img from '../assets/Offerings/desertcamp.jpg';
import day2Img from '../assets/Offerings/cocktail.jpg';
import day3Img from '../assets/Offerings/haldi.jpg';
import day4Img from '../assets/Offerings/reception.jpg';

function Offerings() {
  const events = [
    {
      day: 'Day 1 – Under the Desert Stars',
      time: '16 Feb 2026 | 6:00 PM',
      location: 'Desert Camp, Rajasthan',
      details: 'Experience a magical welcome in the golden sands with traditional music, local cuisine, and an unforgettable starlit dinner.',
      image: day1Img,
      reverse: false,
    },
    {
      day: 'Day 2 – Tradition & Toasts',
      time: '17 Feb 2026 | 09:00 AM & 07:00 PM',
      location: 'Venue to be shared',
      details: 'Celebrate vibrant Haldi rituals in the morning, followed by a chic cocktail evening full of dance, toasts, and joy.',
      image: day2Img,
      reverse: true,
    },
    {
      day: 'Day 3 – Rhythms of Ritual',
      time: '18 Feb 2026 | 09:00 AM & 07:00 PM',
      location: 'Main Venue',
      details: 'Immerse in Mehendi and Sangeet festivities, where colors, rhythms, and culture blend into pure happiness.',
      image: day3Img,
      reverse: false,
    },
    {
      day: 'Day 4 – Journey Into Forever',
      time: '19 Feb 2026 | 07:00 PM',
      location: 'Wedding Venue',
      details: 'The grand wedding and reception night – a celebration of eternal love, followed by a royal dinner and dancing.',
      image: day4Img,
      reverse: true,
    },
  ];

  return (
    <div className="offerings-container">
      <h1>Wedding Itinerary</h1>
      {events.map((event, index) => (
        <div key={index} className={`event-section ${event.reverse ? 'reverse' : ''}`}>
          <div className="event-image">
            <img src={event.image} alt={event.day} />
          </div>
          <div className="event-details">
            <h2>{event.day}</h2>
            <p><strong>Time:</strong> {event.time}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p>{event.details}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Offerings;
