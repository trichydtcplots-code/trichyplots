import React, { useState } from 'react';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = (e) => {
    if (e) e.preventDefault();
    setSubmitted(false);
  };

  return (
    <section id="contact">
      <div className="tag c rv">Get in Touch</div>
      <h2 className="ttl c rv">Let's Find Your <em>Dream Plot</em></h2>
      
      <div className="ctg">
        <div className="cinfo rv">
          <div className="cicard">
            <h3>Direct Contact</h3>
            <div className="ci">
              <div className="ciic">📞</div>
              <div className="citxt">
                <p>Call or Text</p>
                <a href="tel:+917904595766">+91 79045 95766</a>
              </div>
            </div>
            <div className="ci">
              <div className="ciic">💬</div>
              <div className="citxt">
                <p>WhatsApp</p>
                <a href="https://wa.me/917904595766" target="_blank" rel="noreferrer">Chat with Saravanan</a>
              </div>
            </div>
            <div className="ci">
              <div className="ciic">✉️</div>
              <div className="citxt">
                <p>Email Address</p>
                <a href="mailto:trichydtcpplots123@gmail.com">trichydtcpplots123@gmail.com</a>
              </div>
            </div>
            <div className="ci">
              <div className="ciic">📍</div>
              <div className="citxt">
                <p>Office Location</p>
                <a href="https://maps.app.goo.gl/EmqcJuS5ARKSHaH36?g_st=awb" target="_blank" rel="noreferrer">S Deepam Nagar, Trichy</a>
              </div>
            </div>

            <div style={{ marginTop: '20px', marginBottom: '20px', borderRadius: '16px', overflow: 'hidden', height: '185px', border: '1px solid #e2e8f0', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
              <iframe 
                title="S Deepam Nagar Office Location Map"
                src="https://maps.google.com/maps?q=S%20SQUARE%20'%20S%20DEEPAM%20NAGAR%2C%203%2F89A%2C%20Kodayur%2C%20Tamil%20Nadu%20620012&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="hrsg">
              <div className="hrb">
                <div className="hrd">Monday - Friday</div>
                <div className="hrt">9:00 AM - 8:00 PM</div>
              </div>
              <div className="hrb">
                <div className="hrd">Weekends</div>
                <div className="hrt">10:00 AM - 6:00 PM</div>
              </div>
            </div>
            
            <div className="trust">
              <div className="tbg">✅ Verified Consultant</div>
              <div className="tbg">⭐ 4.9/5 Rating</div>
              <div className="tbg">📜 DTCP Specialist</div>
            </div>
          </div>
        </div>

        <div className="fcard rv">
          {!submitted ? (
            <>
              <div className="fhd">
                <h2>Send an <em>Inquiry</em></h2>
                <p>Fill out the form below and I will get back to you personally within 24 hours.</p>
              </div>
              <div className="fbd">
                <form onSubmit={handleSubmit}>
                  <div className="fg">
                    <div className="fld">
                      <label>Full Name</label>
                      <input type="text" placeholder="Enter your name" required />
                    </div>
                    <div className="fld">
                      <label>Phone Number</label>
                      <input type="tel" placeholder="Your mobile number" required />
                    </div>
                  </div>
                  
                  <div className="fld">
                    <label>Your Message</label>
                    <textarea placeholder="Tell me about your requirements..."></textarea>
                  </div>
                  
                  <div className="fbtns">
                    <button type="submit" className="bcall">Send Inquiry</button>
                    <a href="https://wa.me/917904595766" target="_blank" rel="noreferrer" className="bwa">WhatsApp Me</a>
                  </div>
                </form>
              </div>
            </>
          ) : (
            <div className="suc" style={{display: 'block'}}>
              <div className="tick">✅</div>
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. Saravanan will contact you personally very soon.</p>
              <div className="sucbtns">
                <a href="#contact" className="sc" onClick={resetForm}>New Inquiry</a>
                <a href="https://wa.me/917904595766" className="sw" target="_blank" rel="noreferrer">WhatsApp Me</a>
              </div>
            </div>
          )}

          {/* Beautiful Decorative Premium Land Plot Banner Image */}
          <div style={{ marginTop: '25px', borderRadius: '16px', overflow: 'hidden', flex: 1, minHeight: '160px', position: 'relative', border: '1px solid rgba(0,0,0,0.05)' }}>
            <img 
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1000&q=80" 
              alt="Premium Land Plot in Trichy" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 23, 42, 0.8), transparent)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '18px' }}>
              <span style={{ color: '#10B981', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '4px' }}>🌱 Prime Residential Plots</span>
              <strong style={{ color: '#ffffff', fontSize: '15px', fontWeight: 700, letterSpacing: '0.5px' }}>Your Gateway to Elite Living in Trichy</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
