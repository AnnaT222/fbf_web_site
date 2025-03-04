import "./Demo.css";
import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const YouTubeEmbed = ({ videoId }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const onPlayerReady = (event) => {
      event.target.playVideo();
    };

    const onPlayerStateChange = (event) => {
      if (event.data === window.YT.PlayerState.ENDED) {
        event.target.playVideo();
      }
    };

    const loadVideo = () => {
      new window.YT.Player(videoRef.current, {
        videoId,
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
        playerVars: {
          autoplay: 1,
          loop: 1,
          playlist: videoId,
        },
      });
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadVideo();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [videoId]);

  return (
    <div className="youtube-embed" ref={videoRef}>
      <div id={`youtube-player-${videoId}`}></div>
    </div>
  );
};

YouTubeEmbed.propTypes = {
  videoId: PropTypes.string.isRequired,
};

export default YouTubeEmbed;
