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
        <span className="tag c rv">EXCLUSIVE TOUR</span>
        <h2 className="ttl c rv">Drone Walkthrough & <em>Advertisement</em></h2>
        <p className="sub rv">Take a virtual drone tour of our premium DTCP layouts in Trichy. See the outstanding infrastructure and ready-to-build plots from above.</p>

        {/* 9:16 VERTICAL INSTAGRAM REEL FORMATTED CONTAINER */}
        <div className="video-wrapper reel-format rv">
          <video
            ref={videoRef}
            src="/assets/sitevideo.mp4"
            autoPlay
            loop
            muted
            playsInline
            controls
            poster="/assets/plot1.webp"
            className="promo-video"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
          {!isPlaying && (
            <div className="video-overlay" onClick={handlePlayPause}>
              <div className="reel-badge">🎬 REELS WALKTHROUGH</div>
              <div className="play-btn">
                <svg viewBox="0 0 24 24" width="34" height="34" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <h3>Watch Full Site Reel</h3>
              <p>Experience the premium connectivity & development live</p>
            </div>
          )}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        #site-video {
          background: linear-gradient(180deg, #FAF8F5 0%, #EBF5FF 50%, #FAF8F5 100%) !important;
          padding: 80px 5vw !important;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          width: 100% !important;
          box-sizing: border-box !important;
        }

        .video-container {
          max-width: 1000px !important;
          width: 100% !important;
          margin: 0 auto !important;
          text-align: center !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
        }

        .video-container .tag {
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.12), rgba(16, 185, 129, 0.15)) !important;
          color: #1D4ED8 !important;
          border: 1px solid rgba(37, 99, 235, 0.3) !important;
          padding: 7px 20px !important;
          border-radius: 50px !important;
          font-size: 11px !important;
          font-weight: 800 !important;
          letter-spacing: 2.5px !important;
          text-transform: uppercase !important;
          margin-bottom: 16px !important;
          box-shadow: 0 4px 15px rgba(37, 99, 235, 0.12) !important;
          display: inline-flex !important;
        }

        .video-container .tag::before,
        .video-container .tag::after {
          display: none !important;
        }

        .video-container .ttl {
          color: #0F172A !important;
          font-weight: 900 !important;
          font-size: clamp(26px, 3.5vw, 44px) !important;
          line-height: 1.25 !important;
          letter-spacing: -0.5px !important;
        }

        .video-container .ttl em {
          background: linear-gradient(135deg, #2563EB 0%, #10B981 100%) !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          font-style: italic !important;
          font-weight: 900 !important;
          padding: 0 4px !important;
        }

        .video-container .sub {
          color: #334155 !important;
          font-size: clamp(14px, 1.6vw, 16px) !important;
          font-weight: 500 !important;
          line-height: 1.65 !important;
          max-width: 680px !important;
          margin: 14px auto 36px auto !important;
        }

        /* VERTICAL REEL STYLING */
        .video-wrapper.reel-format {
          position: relative !important;
          width: 100% !important;
          max-width: 380px !important;
          aspect-ratio: 9 / 16 !important;
          margin: 0 auto !important;
          border-radius: 28px !important;
          overflow: hidden !important;
          box-shadow: 0 25px 65px rgba(15, 23, 42, 0.25), 0 0 40px rgba(37, 99, 235, 0.2) !important;
          border: 3px solid #0F172A !important;
          background: #000000 !important;
          transition: transform 0.4s var(--e), box-shadow 0.4s var(--e) !important;
        }

        .video-wrapper.reel-format:hover {
          transform: translateY(-4px) scale(1.01) !important;
          box-shadow: 0 35px 80px rgba(15, 23, 42, 0.3), 0 0 50px rgba(37, 99, 235, 0.3) !important;
        }

        .promo-video {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          display: block !important;
          border-radius: 24px !important;
        }

        .video-overlay {
          position: absolute !important;
          inset: 0 !important;
          background: linear-gradient(180deg, rgba(15, 23, 42, 0.2) 0%, rgba(15, 23, 42, 0.75) 70%, rgba(15, 23, 42, 0.9) 100%) !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: center !important;
          color: #ffffff !important;
          cursor: pointer !important;
          text-align: center !important;
          padding: 24px 18px !important;
          backdrop-filter: blur(3px) !important;
          transition: all 0.35s var(--e) !important;
          z-index: 10 !important;
        }

        .reel-badge {
          background: rgba(255, 255, 255, 0.2) !important;
          border: 1px solid rgba(255, 255, 255, 0.4) !important;
          color: #ffffff !important;
          padding: 5px 14px !important;
          border-radius: 30px !important;
          font-size: 10px !important;
          font-weight: 800 !important;
          letter-spacing: 1.5px !important;
          margin-bottom: auto !important;
          backdrop-filter: blur(10px) !important;
        }

        .play-btn {
          width: 72px !important;
          height: 72px !important;
          border-radius: 50% !important;
          background: linear-gradient(135deg, #2563EB 0%, #10B981 100%) !important;
          color: #ffffff !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          margin: auto 0 16px 0 !important;
          box-shadow: 0 10px 30px rgba(37, 99, 235, 0.6), 0 0 20px rgba(16, 185, 129, 0.5) !important;
          transition: all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
          border: 2px solid rgba(255, 255, 255, 0.3) !important;
          animation: playPulse 2s infinite !important;
        }

        @keyframes playPulse {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.7);
          }
          70% {
            box-shadow: 0 0 0 16px rgba(37, 99, 235, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 99, 235, 0);
          }
        }

        .play-btn svg {
          margin-left: 4px !important;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3)) !important;
        }

        .video-overlay:hover .play-btn {
          transform: scale(1.14) !important;
          box-shadow: 0 15px 45px rgba(37, 99, 235, 0.85), 0 0 35px rgba(16, 185, 129, 0.6) !important;
        }

        .video-overlay h3 {
          font-family: 'Outfit', sans-serif !important;
          font-size: 20px !important;
          font-weight: 800 !important;
          color: #ffffff !important;
          margin-bottom: 4px !important;
          letter-spacing: 0.3px !important;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7) !important;
        }

        .video-overlay p {
          font-size: 12px !important;
          color: #F1F5F9 !important;
          font-weight: 500 !important;
          max-width: 300px !important;
          line-height: 1.4 !important;
          text-shadow: 0 1px 6px rgba(0, 0, 0, 0.7) !important;
        }

        /* MOBILE REELS RESPONSIVE MEDIA QUERIES */
        @media (max-width: 768px) {
          #site-video {
            padding: 50px 16px !important;
          }
          .video-container .ttl {
            font-size: 22px !important;
          }
          .video-container .sub {
            font-size: 13px !important;
            margin-bottom: 24px !important;
          }
          .video-wrapper.reel-format {
            max-width: 340px !important;
            aspect-ratio: 9 / 16 !important;
            border-radius: 24px !important;
          }
          .promo-video {
            border-radius: 20px !important;
          }
          .play-btn {
            width: 60px !important;
            height: 60px !important;
          }
          .play-btn svg {
            width: 26px !important;
            height: 26px !important;
          }
          .video-overlay h3 {
            font-size: 17px !important;
          }
          .video-overlay p {
            font-size: 11px !important;
          }
        }

        @media (max-width: 480px) {
          #site-video {
            padding: 35px 12px !important;
          }
          .video-container .ttl {
            font-size: 20px !important;
          }
          .video-container .sub {
            font-size: 12px !important;
            margin-bottom: 18px !important;
          }
          .video-wrapper.reel-format {
            max-width: 310px !important;
            aspect-ratio: 9 / 16 !important;
            border-radius: 22px !important;
            border-width: 2.5px !important;
          }
          .promo-video {
            border-radius: 18px !important;
          }
          .play-btn {
            width: 52px !important;
            height: 52px !important;
          }
          .play-btn svg {
            width: 22px !important;
            height: 22px !important;
          }
          .video-overlay h3 {
            font-size: 15px !important;
          }
          .video-overlay p {
            font-size: 10.5px !important;
          }
        }
      `
      }} />
    </section>
  );
};

export default SiteVideo;
