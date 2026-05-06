import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiThreads } from "react-icons/si";

const NewspaperNews = () => {
  return (
    <section id="news" className="np-paper">
      {/* BREAKING NEWS TICKER */}
      <div className="ticker-wrap">
        <div className="ticker-label">BREAKING NEWS</div>
        <div className="ticker-track">
          <div className="ticker-item">NEW DTCP LAYOUT LAUNCHED IN JJ COLLEGE AREA</div>
          <div className="ticker-item">TRICHY REAL ESTATE MARKET SEEING 15% GROWTH</div>
          <div className="ticker-item">NEW BUS STAND AT PANJAPUR INCREASING LAND VALUE</div>
          <div className="ticker-item">SARAVANAN ANNOUNCES EXCLUSIVE OFFERS FOR FIRST 10 BOOKINGS</div>
          {/* Duplicate for seamless scroll */}
          <div className="ticker-item">NEW DTCP LAYOUT LAUNCHED IN JJ COLLEGE AREA</div>
          <div className="ticker-item">TRICHY REAL ESTATE MARKET SEEING 15% GROWTH</div>
        </div>
      </div>

      {/* NEWSPAPER HEADER */}
      <div className="np-header">
        <div className="np-title-row">
          <h1 className="np-masthead">TRICHY <span>PROPERTY</span> TIMES</h1>
          <div className="np-edition">
            <strong>SRI RANGAM EDITION</strong>
            {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </div>
        </div>
        <div className="np-divider">
          <div className="np-divider-line"></div>
          <div className="np-tagline">Exclusively Curated by Saravanan &middot; Trusted Land Consultant</div>
          <div className="np-divider-line"></div>
        </div>
      </div>

      {/* NEWSPAPER BODY */}
      <div className="np-body">
        {/* LEFT SIDEBAR */}
        <aside className="np-sidebar">
          <div className="np-sidebar-title">MARKET WATCH</div>
          <div className="sidebar-scroll">
            <div className="sidebar-inner">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="sitem">
                  <div className={`sitem-cat scat${(i % 4) + 1}`}>TRENDING</div>
                  <h4>Trichy Real Estate Growth</h4>
                  <p>Land value in Panjapur area is expected to double in the next 2 years.</p>
                  <div className="sitem-date">2 HOURS AGO</div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="np-main">
          <div className="np-main-title">TOP STORIES</div>

          <div className="np-hero">
            <div className="np-hero-img">
              {/* Image removed as requested */}
            </div>
            <div className="np-hero-cat">EXCLUSIVE COVERAGE</div>
            <h2>Why <em>Panjapur</em> is the Next Big Thing for Investors?</h2>
            <p>
              With the new Integrated Bus Stand and multi-modal transport hub coming up at Panjapur, the surrounding areas are witnessing unprecedented interest from both residential and commercial buyers. I have personally selected some of the best DTCP approved plots that offer maximum ROI potential in this corridor.
            </p>
            <div className="np-hero-foot">
              <div className="np-date">SPECIAL REPORT &middot; BY SARAVANAN</div>
              <a href="#contact" className="np-link">READ FULL STORY</a>
            </div>
          </div>

          <div className="np-grid">
            <div className="np-card">
              <div className="np-card-img">{/* Image removed as requested */}</div>
              <div className="np-card-cat">INFRASTRUCTURE</div>
              <h3>New Road Extension in Dheeran Nagar</h3>
              <p>The proposed 60ft road extension is set to improve connectivity significantly.</p>
            </div>
            <div className="np-card">
              <div className="np-card-img">{/* Image removed as requested */}</div>
              <div className="np-card-cat">LEGAL ADVICE</div>
              <h3>Understanding DTCP vs Local Approval</h3>
              <p>Why you should always prefer DTCP approved plots for long term peace of mind.</p>
            </div>
            <div className="np-card">
              <div className="np-card-img">{/* Image removed as requested */}</div>
              <div className="np-card-cat">TIPS</div>
              <h3>Top 5 Sites for Immediate Construction</h3>
              <p>Ready to move-in plots with water and electricity connections already in place.</p>
            </div>
          </div>
        </main>
      </div>

      <div className="np-social-bar">
        <h4>FOLLOW THE <em>PROPERTY</em> UPDATES</h4>
        <div className="slinks">
          <a href="https://www.facebook.com/share/1GjfjTbJrL/" className="sl sl-fb">
            <FaFacebook />
          </a>

          <a href="https://www.instagram.com/saravanamu?igsh=MWVvdTNqc3J5MnVreg==" className="sl sl-ig">
            <FaInstagram />
          </a>

          <a href="https://youtube.com/@trichydtcpplots?si=_r4gbN_YrWGMyREn" className="sl sl-yt">
            <FaYoutube />
          </a>

          <a href="https://x.com/SaravanaMu26" className="sl sl-tw" style={{ background: '#000', color: '#fff' }}>
            <FaXTwitter />
          </a>

          <a href="https://www.threads.com/@saravanamu" className="sl sl-th" style={{ background: '#000', color: '#fff' }}>
            <SiThreads />
          </a>

          <a href="https://wa.me/917904595766" className="sl sl-wa">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewspaperNews;
