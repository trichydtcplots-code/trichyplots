import React from 'react';
import CountUp from './CountUp';

const About = () => {
  return (
    <section id="about">
      <div className="abg">
        <div className="aimg rv">
          <div className="aimg-m">
            <img src="/assets/saravana.jpeg" alt="Saravanan Land Consultant" />
          </div>
          <div className="abdg">
            <div className="big"><CountUp end={10} suffix="+" /></div>
            <div className="sml">Years of Trust</div>
          </div>
          <div className="atag">
            <div className="n">Saravanan</div>
            <div className="l">Land Consultant</div>
          </div>
        </div>
        <div className="atxt rv">
          <div className="tag">About Me</div>
          <h2 className="ttl">Your Trusted Partner in <em>Trichy Real Estate</em></h2>
          <p className="dsc">
            I am <strong>Saravanan</strong>, a dedicated land consultant specializing in DTCP approved plots in and around Trichy. With over a decade of experience, I have helped hundreds of families find their dream home sites.
          </p>
          <p>
            My approach is simple: <strong>Transparency</strong>. I deal directly with buyers, ensuring you get the best price without any middleman commissions. I personally verify all legal documents and guide you through the entire registration process.
          </p>
          <div className="tl">
            <div className="tli">
              <div className="tdot"></div>
              <div className="tyr">2014 - Present</div>
              <h4>Direct Consultations</h4>
              <p>Specializing in JJ College and Panjapur corridors with 100% legal clearance.</p>
            </div>
            <div className="tli">
              <div className="tdot"></div>
              <div className="tyr">Integrity First</div>
              <h4>Personal Verification</h4>
              <p>Every site I sell is personally inspected and documented for your peace of mind.</p>
            </div>
          </div>
          <a href="#contact" className="bg" style={{ marginTop: '20px' }}>Get Free Consultation</a>
        </div>
      </div>
    </section>
  );
};

export default About;
