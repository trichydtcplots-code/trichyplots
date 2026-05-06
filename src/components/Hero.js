import React from 'react';
import CountUp from './CountUp';

const Hero = () => {
  return (
    <section id="hero">
      <div className="pbg">
        <img src="/trichy-hero-bg.png" alt="Trichy Rockfort Landmark" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div className="hfade"></div>
      <div className="hbody">
        <div className="heye">TRICHY DTCP PLOTS — Saravanan, Trichy</div>
        <h1 className="ht">
          <span className="fl">TRICHY</span><br />
          <span className="it">DTCP PLOTS</span><br />
          <span className="sm">Saravanan, Land Consultant</span>
        </h1>
        <p className="hsub">Looking for the perfect DTCP plot in Trichy? I personally guide you from site visit to registration — no agents, no middlemen, just me.</p>
        <div className="hbtns">
          <a href="#properties" className="bg">View My Listings</a>
          <a href="#contact" className="bw">Talk to Me</a>
        </div>
      </div>
      <div className="hstats">
        <div className="hst">
          <div className="hstn"><CountUp end={200} suffix="+" /></div>
          <div className="hstl">Plots Sold</div>
        </div>
        <div className="hst">
          <div className="hstn"><CountUp end={10} suffix="+" /></div>
          <div className="hstl">Years Exp.</div>
        </div>
        <div className="hst">
          <div className="hstn"><CountUp end={5} /></div>
          <div className="hstl">Key Areas</div>
        </div>
      </div>
      <div className="scue">
        <div className="sbar"></div>
        Scroll Down
      </div>
    </section>
  );
};

export default Hero;
