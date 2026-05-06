import React from 'react';

const Locations = () => {
  const locs = [
    {
      name: "JJ College Area",
      desc: "Premium residential plots with excellent road connectivity and amenities.",
      img: "/assets/JJ college.jpeg",
      tag: "TOP SELLING"
    },
    {
      name: "Oolaiyur",
      desc: "Rapidly developing area perfect for long-term investment and home building.",
      img: "/assets/Ollaiyur.jpeg",
      tag: "INVESTMENT"
    },
    {
      name: "Dheeran Nagar",
      desc: "Quiet residential neighborhood with complete infrastructure ready.",
      img: "/assets/Deeran nagar.png",
      tag: "READY TO MOVE"
    },
    {
      name: "Panjapur",
      desc: "Opposite to the upcoming Integrated Bus Stand. Maximum growth potential.",
      img: "/assets/Panjapore.jpeg",
      tag: "HOT PROJECT"
    },
    {
      name: "Nagamangalam",
      desc: "Serene environment with modern amenities. Highly recommended for families.",
      img: "/assets/Nagamangalam.jpeg",
      tag: "NEW LAUNCH"
    }
  ];

  return (
    <section id="locations">
      <div style={{ textAlign: 'center', marginBottom: '50px', position: 'relative', zIndex: '1' }}>
        <div className="tag c rv">Prime Locations</div>
        <h2 className="ttl rv" style={{ color: 'var(--text-main)' }}>Where Your <em>Future Home</em> Waits</h2>
      </div>

      <div className="locg">
        {locs.map((l, i) => (
          <div key={i} className="locc rv">
            <div className="locc-photo">
              <img src={l.img} alt={l.name} />
            </div>
            <div className="locc-body">
              <span className="lbdg">{l.tag}</span>
              <h4>{l.name}</h4>
              <p>{l.desc}</p>
              <div className="locc-btns">
                <a href="tel:+917904595766" className="ltel">Call Now</a>
                <a href="https://wa.me/917904595766" className="lwa" target="_blank" rel="noreferrer">Chat Now</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Locations;
