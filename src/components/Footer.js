import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="ftlg">
        TRICHY DTCP PLOTS
        <small>Saravanan &middot; Land Consultant</small>
      </div>
      <p>&copy; {new Date().getFullYear()} Trichy DTCP Plots. All rights reserved.</p>
      <div className="fla">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
