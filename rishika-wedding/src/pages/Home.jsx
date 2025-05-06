import Slider from "react-slick";
import slide1 from "../assets//Slider/lalgarh.jpg";
import slide2 from "../assets//Slider/desertcamp.jpg";
import slide3 from "../assets//Slider/camelsafari.jpg";
import slide4 from "../assets//Slider/cocktail.jpg";
import slide5 from "../assets//Slider/wedding.jpg";
import "../assets/css/Home.css";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div>
      <div className="home-slider-container">
        {/* Fixed Text Overlay */}
        <div className="fixed-overlay-text">
          You haven’t been to India until you’ve been to an Indian wedding.
        </div>

        {/* Sliding Images */}
        <Slider {...settings}>
          {[slide1, slide2, slide3, slide4, slide5].map((slide, index) => (
            <div key={index}>
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="slider-image"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="container-div">
        <section className="welcome-banner">
          <h1>Welcome to Rishabh & Ishika's Wedding Celebration</h1>
          <p>
            We are thrilled to invite you to share in the magic of our 4-day
            celebration, where love, tradition, and unforgettable memories come
            together. From the first moment to the last, this will be a journey
            of joy, culture, and heartfelt connections. Whether near or far,
            your presence will make our day even more special, as we create a
            timeless celebration of love that transcends borders. Join us to be
            a part of something truly beautiful and meaningful—together, we’ll
            create memories to last a lifetime.
          </p>
        </section>
        <section className="event-overview">
          <h2>Wedding Itinerary</h2>
          <table>
            <thead>
              <tr>
                <th>Day</th>
                <th>Event</th>
                <th>Date</th>
                <th>Time</th>
                <th>Venue</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Day 1</td>
                <td>Under the Desert Stars</td>
                <td>16 Feb 2026</td>
                <td>6:00 PM</td>
                <td>Will be shared</td>
              </tr>
              <tr>
                <td>Day 2</td>
                <td>Tradition & Toasts</td>
                <td>17 Feb 2026</td>
                <td>09:00 AM & 07:00 PM</td>
                <td>Will be shared</td>
              </tr>
              <tr>
                <td>Day 3</td>
                <td>Rhythms of Ritual</td>
                <td>18 Feb 2026</td>
                <td>09:00 AM & 07:00 PM</td>
                <td>At Venue</td>
              </tr>
              <tr>
                <td>Day 4</td>
                <td>Journey Into Forever</td>
                <td>19 Feb 2026</td>
                <td>07:00 PM</td>
                <td>At Venue</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}

export default Home;
