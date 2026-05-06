import React from 'react';

const ServicesAndTesti = () => {
  return (
    <>
      <section id="services">
        <div className="tag c rv">Professional Services</div>
        <h2 className="ttl c rv">Complete <em>Real Estate</em> Solutions</h2>
        <div className="srvg">
          <div className="srvc rv">
            <span className="sic">🏘️</span>
            <h3>Plot Sales</h3>
            <p>Direct sales of DTCP approved residential and commercial plots in prime Trichy locations.</p>
          </div>
          <div className="srvc rv">
            <span className="sic">⚖️</span>
            <h3>Legal Guidance</h3>
            <p>Full assistance in title verification, legal documentation, and registration processes.</p>
          </div>
          <div className="srvc rv">
            <span className="sic">📈</span>
            <h3>Investment Advice</h3>
            <p>Expert consultation on market trends and identifying high-appreciation land investments.</p>
          </div>
        </div>
      </section>

      <section id="testi">
        <div className="pbg"><img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600&q=80" alt="Testimonials BG" /></div>
        <div className="tag c rv">Testimonials</div>
        <h2 className="ttl c rv">What My <em>Clients Say</em></h2>
        <div className="tgrd">
          <div className="tcard rv">
            <div className="tstrs">⭐⭐⭐⭐⭐</div>
            <div className="tq">"</div>
            <p className="ttxt">Saravanan made the entire process so easy. He explained every document and guided me through the registration at JJ College area plot.</p>
            <div className="tauth">
              <div className="tav">R</div>
              <div><div className="tnm">Ramesh Kumar</div><div className="trl">Home Buyer</div></div>
            </div>
          </div>
          <div className="tcard rv">
            <div className="tstrs">⭐⭐⭐⭐⭐</div>
            <div className="tq">"</div>
            <p className="ttxt">The most transparent consultant I've met in Trichy. No hidden fees and genuine direct pricing for my commercial plot in Panjapur.</p>
            <div className="tauth">
              <div className="tav">S</div>
              <div><div className="tnm">Senthil Prabhu</div><div className="trl">Investor</div></div>
            </div>
          </div>
          <div className="tcard rv">
            <div className="tstrs">⭐⭐⭐⭐⭐</div>
            <div className="tq">"</div>
            <p className="ttxt">Highly recommend Saravanan if you are looking for hassle-free DTCP plots. His knowledge of Trichy real estate is unmatched.</p>
            <div className="tauth">
              <div className="tav">A</div>
              <div><div className="tnm">Anitha Devi</div><div className="trl">Resident</div></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesAndTesti;
