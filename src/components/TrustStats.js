import React from 'react';
import CountUp from './CountUp';

const TrustStats = () => {
  return (
    <section id="stats">
      <div className="sgrd">
        <div className="sbox">
          <div className="snum"><CountUp end={200} suffix="+" /></div>
          <div className="slbl">HAPPY CLIENTS</div>
        </div>
        <div className="sbox">
          <div className="snum"><CountUp end={10} suffix="+" /></div>
          <div className="slbl">YEARS OF EXP.</div>
        </div>
        <div className="sbox">
          <div className="snum"><CountUp end={100} suffix="%" /></div>
          <div className="slbl">LEGAL CLEARANCE</div>
        </div>
        <div className="sbox">
          <div className="snum">24/7</div>
          <div className="slbl">SUPPORT</div>
        </div>
      </div>
    </section>
  );
};

export default TrustStats;
