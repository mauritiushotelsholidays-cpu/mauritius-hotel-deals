"use client";
const hotels = [
  // 5 STAR HOTELS
  {
    name: "Trou aux Biches Beachcomber Golf Resort & Spa",
    stars: 5,
    location: "Trou aux Biches, Mauritius",
    description:
      "A luxury beachfront resort known for its tropical gardens, beautiful beach and relaxing atmosphere.",
  },
  {
    name: "Sofitel Mauritius L'Impérial Resort & Spa",
    stars: 5,
    location: "Flic en Flac, Mauritius",
    description:
      "An elegant beachfront resort combining French luxury with Mauritian hospitality.",
  },
  {
    name: "LUX* Le Morne",
    stars: 5,
    location: "Le Morne, Mauritius",
    description:
      "A stylish luxury resort located between the Indian Ocean and the iconic Le Morne mountain.",
  },
  {
    name: "Constance Le Chaland IKO Mauritius",
    stars: 5,
    location: "Blue Bay, Mauritius",
    description:
      "A modern luxury resort close to beautiful beaches and the natural surroundings of the southeast.",
  },
  {
    name: "The Westin Turtle Bay Resort & Spa",
    stars: 5,
    location: "Turtle Bay, Mauritius",
    description:
      "A luxury resort offering a peaceful location, spacious accommodation and beautiful ocean views.",
  },
  {
    name: "The Residence Mauritius",
    stars: 5,
    location: "Belle Mare, Mauritius",
    description:
      "An elegant beachfront hotel inspired by classic colonial style and Mauritian charm.",
  },
  {
    name: "Sofitel SO Mauritius",
    stars: 5,
    location: "Bel Ombre, Mauritius",
    description:
      "A contemporary luxury resort surrounded by tropical nature and beautiful beaches.",
  },
  {
    name: "Sugar Beach Mauritius",
    stars: 5,
    location: "Flic en Flac, Mauritius",
    description:
      "A luxurious beachfront resort with beautiful gardens and a relaxing tropical atmosphere.",
  },
  {
    name: "Shanti Maurice Resort & Spa",
    stars: 5,
    location: "Bel Ombre, Mauritius",
    description:
      "A peaceful luxury resort offering beautiful coastal scenery and a premium spa experience.",
  },
  {
    name: "Hilton Mauritius Resort & Spa",
    stars: 5,
    location: "Flic en Flac, Mauritius",
    description:
      "A luxury beachfront resort offering comfortable accommodation and beautiful sunset views.",
  },

  // 4 STAR HOTELS
  {
    name: "Seasense Boutique Hotel & Spa",
    stars: 4,
    location: "Palmar, Mauritius",
    description:
      "An adults-focused boutique hotel offering a relaxing beachfront experience.",
  },
  {
    name: "Quatre Cocos",
    stars: 4,
    location: "East Coast, Mauritius",
    description:
      "A comfortable hotel option close to beautiful beaches and the lagoon.",
  },
  {
    name: "Veranda Pointe aux Biches Hotel & Spa",
    stars: 4,
    location: "Pointe aux Biches, Mauritius",
    description:
      "A relaxed beachfront hotel with a friendly Mauritian atmosphere.",
  },
  {
    name: "The Ravenala Attitude",
    stars: 4,
    location: "Balaclava, Mauritius",
    description:
      "A spacious resort offering a variety of restaurants and activities for couples and families.",
  },
  {
    name: "The Address Boutique Hotel",
    stars: 4,
    location: "Port Chambly, Mauritius",
    description:
      "A stylish boutique hotel located in a peaceful waterfront village.",
  },
  {
    name: "Lagoon Attitude",
    stars: 4,
    location: "Anse la Raie, Mauritius",
    description:
      "An adults-focused hotel offering a relaxing lagoon-side experience.",
  },
  {
    name: "Solana Beach Mauritius",
    stars: 4,
    location: "Belle Mare, Mauritius",
    description:
      "An adults-oriented beachfront hotel on the beautiful east coast of Mauritius.",
  },
  {
    name: "Radisson Blu Poste Lafayette Resort & Spa",
    stars: 4,
    location: "Poste Lafayette, Mauritius",
    description:
      "A beachfront resort located on the peaceful northeast coast of Mauritius.",
  },
  {
    name: "Pearle Beach Resort & Spa",
    stars: 4,
    location: "Flic en Flac, Mauritius",
    description:
      "A beachfront resort offering easy access to one of Mauritius' popular beaches.",
  },
  {
    name: "Le Suffren Hotel & Marina",
    stars: 4,
    location: "Port Louis, Mauritius",
    description:
      "A modern waterfront hotel located close to Port Louis and the marina.",
  },
];

export default function Home() {
  const fiveStarHotels = hotels.filter((hotel) => hotel.stars === 5);
  const fourStarHotels = hotels.filter((hotel) => hotel.stars === 4);

  return (
    <main>
      <header>
        <div className="container nav">
          <div className="logo">
            Mauritius<span>Hotels</span>.deals
          </div>

          <nav>
            <a href="#hotels">Hotels</a>
            <a href="#five-star">5 Star</a>
            <a href="#four-star">4 Star</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-content">
          <p className="eyebrow">MAURITIUS HOTEL HOLIDAYS</p>

          <h1>
            Discover Amazing
            <br />
            Hotel Deals in Mauritius
          </h1>

          <p className="hero-text">
            Discover selected 4-star and 5-star hotels in Mauritius.
            Send us your booking request and we will personally assist
            with your hotel reservation.
          </p>

          <a href="#hotels" className="primary-button">
            Explore Hotels
          </a>
        </div>
      </section>

      <section className="intro">
        <div className="container">
          <h2>Find Your Perfect Mauritius Hotel</h2>

          <p>
            Explore our selection of carefully chosen 4-star and 5-star
            hotels across Mauritius.
          </p>

          <div className="stats">
            <div>
              <strong>20</strong>
              <span>Selected Hotels</span>
            </div>

            <div>
              <strong>10</strong>
              <span>5-Star Hotels</span>
            </div>

            <div>
              <strong>10</strong>
              <span>4-Star Hotels</span>
            </div>
          </div>
        </div>
      </section>

      <section id="hotels" className="hotels-section">
        <div className="container">
          <div id="five-star" className="section-heading">
            <p>PREMIUM SELECTION</p>
            <h2>★★★★★ 5-Star Hotels</h2>
          </div>

          <div className="hotel-grid">
            {fiveStarHotels.map((hotel) => (
              <HotelCard key={hotel.name} hotel={hotel} />
            ))}
          </div>

          <div id="four-star" className="section-heading second-heading">
            <p>EXCEPTIONAL VALUE</p>
            <h2>★★★★ 4-Star Hotels</h2>
          </div>

          <div className="hotel-grid">
            {fourStarHotels.map((hotel) => (
              <HotelCard key={hotel.name} hotel={hotel} />
            ))}
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="container">
          <div className="section-heading">
            <p>SIMPLE AND RELIABLE</p>
            <h2>How It Works</h2>
          </div>

          <div className="steps">
            <div className="step">
              <div className="number">1</div>
              <h3>Choose a Hotel</h3>
              <p>
                Browse our selected 4-star and 5-star hotels.
              </p>
            </div>

            <div className="step">
              <div className="number">2</div>
              <h3>Send a Booking Request</h3>
              <p>
                Tell us your preferred hotel, dates and number of guests.
              </p>
            </div>

            <div className="step">
              <div className="number">3</div>
              <h3>We Arrange Your Reservation</h3>
              <p>
                We personally assist with the hotel reservation process.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container contact-content">
          <p>READY TO PLAN YOUR STAY?</p>

          <h2>Contact Mauritius Hotels Holidays</h2>

          <p className="contact-text">
            Send us your preferred hotel, travel dates and number of guests.
          </p>

          <a
            className="email-button"
            href="mailto:mauritiushotelsholidays@gmail.com?subject=Mauritius Hotel Booking Request"
          >
            Email Us Now
          </a>

          <p className="email-address">
            mauritiushotelsholidays@gmail.com
          </p>
        </div>
      </section>

      <footer>
        <div className="container footer-content">
          <div>
            <strong>MauritiusHotels.deals</strong>
            <p>Discover your Mauritius hotel experience.</p>
          </div>

          <p>© 2026 Mauritius Hotels Holidays</p>
        </div>
      </footer>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        main {
          font-family: Arial, Helvetica, sans-serif;
          color: #1d2939;
          background: #ffffff;
        }

        .container {
          width: min(1120px, 90%);
          margin: auto;
        }

        header {
          background: white;
          border-bottom: 1px solid #e5e7eb;
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .nav {
          min-height: 75px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          font-size: 24px;
          font-weight: 800;
          color: #12355b;
        }

        .logo span {
          color: #c8942e;
        }

        nav {
          display: flex;
          gap: 25px;
        }

        nav a {
          text-decoration: none;
          color: #344054;
          font-weight: 600;
        }

        .hero {
          background:
            linear-gradient(
              135deg,
              rgba(10, 46, 77, 0.94),
              rgba(21, 102, 122, 0.82)
            );
          color: white;
          padding: 120px 0;
        }

        .hero-content {
          max-width: 850px;
        }

        .eyebrow,
        .section-heading > p,
        .contact-content > p:first-child {
          color: #c8942e;
          font-weight: 800;
          letter-spacing: 2px;
          font-size: 13px;
        }

        h1 {
          font-size: clamp(42px, 7vw, 72px);
          line-height: 1.08;
          margin: 15px 0 25px;
        }

        .hero-text {
          font-size: 20px;
          line-height: 1.7;
          max-width: 700px;
          color: #eef6fa;
        }

        .primary-button,
        .email-button,
        .booking-button {
          display: inline-block;
          background: #c8942e;
          color: white;
          text-decoration: none;
          font-weight: bold;
          padding: 16px 28px;
          border-radius: 6px;
          margin-top: 20px;
          transition: 0.2s;
        }

        .primary-button:hover,
        .email-button:hover,
        .booking-button:hover {
          opacity: 0.88;
        }

        .intro {
          text-align: center;
          padding: 85px 0;
        }

        h2 {
          font-size: 38px;
          margin: 10px 0 20px;
          color: #12355b;
        }

        .intro > .container > p {
          color: #667085;
          font-size: 18px;
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 50px;
        }

        .stats div {
          padding: 30px;
          background: #f6f8fa;
          border-radius: 10px;
        }

        .stats strong {
          display: block;
          color: #c8942e;
          font-size: 42px;
        }

        .stats span {
          color: #475467;
        }

        .hotels-section {
          background: #f6f8fa;
          padding: 90px 0;
        }

        .section-heading {
          text-align: center;
          margin-bottom: 45px;
        }

        .section-heading p {
          margin-bottom: 5px;
        }

        .second-heading {
          margin-top: 100px;
        }

        .hotel-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .hotel-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          display: flex;
          flex-direction: column;
        }

        .hotel-image {
          height: 190px;
          background:
            linear-gradient(
              135deg,
              #0f4c5c,
              #2f8f9d
            );
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 55px;
        }

        .hotel-info {
          padding: 25px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .stars {
          color: #c8942e;
          font-size: 16px;
          margin-bottom: 10px;
        }

        .hotel-info h3 {
          color: #12355b;
          font-size: 21px;
          line-height: 1.35;
          margin: 0 0 10px;
        }

        .location {
          color: #667085;
          font-weight: bold;
          font-size: 14px;
        }

        .description {
          color: #667085;
          line-height: 1.6;
          flex: 1;
          margin-top: 15px;
        }

        .booking-button {
          text-align: center;
          margin-top: 20px;
        }

        .how-it-works {
          padding: 90px 0;
          background: white;
        }

        .steps {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 35px;
        }

        .step {
          text-align: center;
          padding: 25px;
        }

        .number {
          width: 60px;
          height: 60px;
          background: #12355b;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: auto;
          font-size: 24px;
          font-weight: bold;
        }

        .step h3 {
          margin-top: 20px;
          color: #12355b;
        }

        .step p {
          color: #667085;
          line-height: 1.6;
        }

        .contact {
          padding: 90px 0;
          text-align: center;
          background: #12355b;
          color: white;
        }

        .contact h2 {
          color: white;
        }

        .contact-text {
          font-size: 18px;
          color: #d7e4ed;
        }

        .email-button {
          background: #c8942e;
        }

        .email-address {
          margin-top: 25px;
          color: #d7e4ed;
        }

        footer {
          background: #0b253d;
          color: white;
          padding: 35px 0;
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        footer p {
          color: #b8c5cf;
          margin: 7px 0;
        }

        @media (max-width: 850px) {
          nav {
            display: none;
          }

          .hotel-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .hero {
            padding: 80px 0;
          }

          .stats,
          .hotel-grid,
          .steps {
            grid-template-columns: 1fr;
          }

          .footer-content {
            display: block;
            text-align: center;
          }

          h2 {
            font-size: 30px;
          }
        }
      `}</style>
    </main>
  );
}

function HotelCard({ hotel }) {
  const subject = encodeURIComponent(
    `Booking Request - ${hotel.name}`
  );

  const body = encodeURIComponent(
    `Hello,\n\nI would like to request a booking for:\n\nHotel: ${hotel.name}\nLocation: ${hotel.location}\n\nCheck-in date:\nCheck-out date:\nNumber of adults:\nNumber of children:\n\nThank you.`
  );

  return (
    <article className="hotel-card">
      <div className="hotel-image">🏨</div>

      <div className="hotel-info">
        <div className="stars">
          {"★".repeat(hotel.stars)}
        </div>

        <h3>{hotel.name}</h3>

        <p className="location">📍 {hotel.location}</p>

        <p className="description">
          {hotel.description}
        </p>

        <a
          className="booking-button"
          href={`mailto:mauritiushotelsholidays@gmail.com?subject=${subject}&body=${body}`}
        >
          Request Booking
        </a>
      </div>
    </article>
  );
}
