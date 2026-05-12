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
          <span className="fl"><span className="an-wrd">TRICHY</span></span><br />
          <span className="it"><span className="an-wrd">DTCP</span> <span className="an-wrd">PLOTS</span></span><br />
          <span className="sm"><span className="an-wrd">Saravanan,</span> <span className="an-wrd">Land</span> <span className="an-wrd">Consultant</span></span>
        </h1>
        <p className="hsub">
          <span className="an-wrd">Looking</span> <span className="an-wrd">for</span> <span className="an-wrd">the</span> <span className="an-wrd">perfect</span> <span className="an-wrd">DTCP</span> <span className="an-wrd">plot</span> <span className="an-wrd">in</span> <span className="an-wrd">Trichy?</span> <span className="an-wrd">I</span> <span className="an-wrd">personally</span> <span className="an-wrd">guide</span> <span className="an-wrd">you</span> <span className="an-wrd">from</span> <span className="an-wrd">site</span> <span className="an-wrd">visit</span> <span className="an-wrd">to</span> <span className="an-wrd">registration</span> <span className="an-wrd">—</span> <span className="an-wrd">no</span> <span className="an-wrd">agents,</span> <span className="an-wrd">no</span> <span className="an-wrd">middlemen,</span> <span className="an-wrd">just</span> <span className="an-wrd">me.</span>
        </p>
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
