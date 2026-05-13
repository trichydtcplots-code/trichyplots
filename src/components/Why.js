import React from 'react';
import CountUp from './CountUp';

const Why = () => {
  return (
    <section id="why">
      <div className="wgrd">
        <div className="wvis rv2">
          <div className="wfr">
            <img src="/assets/plot1.webp" alt="DTCP Approved Plots in Trichy" />
          </div>
          <div className="wfl">
            <div className="big"><CountUp end={100} suffix="%" /></div>
            <div className="sml">Trust & Satisfaction</div>
          </div>
        </div>
        <div className="wlist rv">
          <div className="tag">Why Choose Me?</div>
          <h2 className="ttl">Direct <em>Dealings</em>, Zero Hassle</h2>
          <p className="dsc" style={{marginBottom: '30px'}}>I work differently. I am not a broker; I am your personal land consultant in Trichy.</p>
          
          <div className="why-items-grid">
            <div className="witem rv">
              <div className="wic">🛡️</div>
              <div>
                <h4>DTCP Approved Only</h4>
                <p>I only deal with 100% legally cleared, DTCP approved layouts. Safety first.</p>
              </div>
            </div>
            
            <div className="witem rv">
              <div className="wic">🤝</div>
              <div>
                <h4>No Hidden Charges</h4>
                <p>Direct pricing from the developers. No brokerage, no extra commissions.</p>
              </div>
            </div>
            
            <div className="witem rv">
              <div className="wic">🚗</div>
              <div>
                <h4>Personal Site Visits</h4>
                <p>I personally pick you up and show you the properties at your convenience.</p>
              </div>
            </div>
            
            <div className="witem rv">
              <div className="wic">📜</div>
              <div>
                <h4>End-to-End Support</h4>
                <p>From document verification to final registration, I handle everything for you.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
