import React from 'react';

const Areas = () => {
  const areas = [
    { title: 'Dindigul road Trichy', desc: 'Residential & commercial plots near JJ College Road' },
    { title: 'Oolaiyur', desc: 'Affordable residential plots in Oolaiyur' },
    { title: 'Dheeran Nagar', desc: 'Premium DTCP layouts in Dheeran Nagar' },
    { title: 'Nagamangalam', desc: 'Premium plots in serene Nagamangalam area' },
    { title: 'Panjapur Bus Stand', desc: 'Commercial & residential opposite Bus Stand' },
  ];

  return (
    <section id="areas">
      <div className="tag rv">Where I Work</div>
      <h2 className="ttl rv">My <em>Active Areas</em> in Trichy</h2>
      <p className="dsc rv">I personally cover these 5 key locations — every plot verified by me.</p>
      <div className="agrd">
        {areas.map((area, index) => (
          <div key={index} className="acard rv">
            <span className="aic">{area.icon}</span>
            <div className="anm">{area.title}</div>
            <div className="adt">{area.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Areas;
