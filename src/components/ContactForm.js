import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(`DTCP Plot Inquiry from ${formData.name || 'Website Buyer'}`);
    const body = encodeURIComponent(
      `Hi Saravanan,\n\nI am interested in buying DTCP approved plots in Trichy.\n\n*Name:* ${formData.name || 'N/A'}\n*Phone Number:* ${formData.phone || 'N/A'}\n*Message / Requirements:* ${formData.message || 'Please send details about available plots.'}\n\nLooking forward to your reply.`
    );
    return `mailto:trichydtcpplots123@gmail.com?subject=${subject}&body=${body}`;
  };

  const getWaLink = () => {
    const text = `Hi Saravanan,\n\nI want to inquire about DTCP plots in Trichy.\n\n*Name:* ${formData.name || 'Interested Buyer'}\n*Phone:* ${formData.phone || 'N/A'}\n*Requirement:* ${formData.message || 'Looking for available plot listings.'}`;
    return `https://wa.me/917904595766?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Open user's default email client pre-filled for trichydtcpplots123@gmail.com
    window.location.href = getMailtoLink();
  };

  const resetForm = (e) => {
    if (e) e.preventDefault();
    setFormData({ name: '', phone: '', message: '' });
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
                <a href="https://maps.app.goo.gl/cpMBv3GoyH1rEJ7o7" target="_blank" rel="noreferrer">
                  3 Mary Thozhilagam, 3rd Street Cross Street, Alpha Nagar, Karumandapam, Tiruchirappalli, Tamil Nadu 620001
                </a>
              </div>
            </div>

            <div style={{ marginTop: '20px', marginBottom: '20px', borderRadius: '16px', overflow: 'hidden', height: '185px', border: '1px solid #e2e8f0', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
              <iframe 
                title="Office Location Map"
                src="https://maps.google.com/maps?q=3%20Mary%20Thozhilagam%2C%203rd%20Street%20Cross%20Street%2C%20Alpha%20Nagar%2C%20Karumandapam%2C%20Tiruchirappalli%2C%20Tamil%20Nadu%20620001&t=&z=14&ie=UTF8&iwloc=&output=embed"
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
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name" 
                        required 
                      />
                    </div>
                    <div className="fld">
                      <label>Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your mobile number" 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="fld">
                    <label>Your Message</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your requirements..."
                    ></textarea>
                  </div>
                  
                  <div className="fbtns">
                    <button type="submit" className="bcall">✉️ Send Email</button>
                    <a href={getWaLink()} target="_blank" rel="noreferrer" className="bwa">💬 WhatsApp Me</a>
                  </div>
                </form>
              </div>
            </>
          ) : (
            <div className="suc" style={{display: 'block'}}>
              <div className="tick">✅</div>
              <h3>Inquiry Prepared!</h3>
              <p>Thank you, <strong>{formData.name || 'Friend'}</strong>. Your inquiry has been formatted for <strong>trichydtcpplots123@gmail.com</strong>.</p>
              <div className="sucbtns" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <a href={getMailtoLink()} className="sc" style={{ background: 'var(--primary)', color: '#fff' }}>✉️ Send via Email App</a>
                <a href={getWaLink()} className="sw" target="_blank" rel="noreferrer">💬 Chat on WhatsApp</a>
                <button onClick={resetForm} style={{ background: '#f1f5f9', border: 'none', padding: '10px 18px', borderRadius: '8px', cursor: 'pointer', fontSize: '12px', fontWeight: '600' }}>New Inquiry</button>
              </div>
            </div>
          )}

          {/* Beautiful Decorative Premium Land Plot Banner Image */}
          <div className="fcard-banner">
            <img 
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1000&q=80" 
              alt="Premium Land Plots for Sale in Trichy" 
              className="fcard-banner-img"
              loading="lazy"
            />
            <div className="fcard-banner-overlay">
              <span className="fcard-banner-tag">🌱 Prime Residential Plots</span>
              <strong className="fcard-banner-title">Your Gateway to Elite Living in Trichy</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
