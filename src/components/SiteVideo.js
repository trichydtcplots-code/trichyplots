import React, { useRef, useState } from 'react';

const SiteVideo = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="site-video">
      <div className="video-container">
        <span className="tag">EXCLUSIVE TOUR</span>
        <h2 className="ttl">Drone Walkthrough & <em>Advertisement</em></h2>
        <p className="sub">Take a virtual drone tour of our premium DTCP layouts in Trichy. See the outstanding infrastructure and ready-to-build plots from above.</p>

        <div className="video-wrapper">
          <video
            ref={videoRef}
            src="/assets/sitevideo.mp4"
            autoPlay
            loop
            muted
            playsInline
            controls
            poster="/assets/images.png"
            className="promo-video"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
          {!isPlaying && (
            <div className="video-overlay" onClick={handlePlayPause}>
              <div className="play-btn">
                <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <h3>Watch Site Video Tour</h3>
              <p>Experience the premium connectivity & development live</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SiteVideo;
