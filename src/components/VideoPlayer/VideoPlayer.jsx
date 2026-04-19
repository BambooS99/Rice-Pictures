import './VideoPlayer.css';

export default function VideoPlayer({ src, thumbnail, title, type = 'thumbnail' }) {
  if (type === 'embed') {
    return (
      <div className="video-player video-player--embed">
        <iframe
          src={src}
          title={title}
          className="video-player__iframe"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="video-player video-player--thumbnail">
      <img
        src={thumbnail}
        alt={title}
        className="video-player__image"
      />

      {/* Play Button Overlay */}
      <div className="video-player__overlay">
        <div className="video-player__play-btn">
          <svg viewBox="0 0 24 24" fill="white" className="video-player__play-icon">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Player Controls */}
      <div className="video-player__controls">
        <span>00:11 / 00:25</span>
        <div className="video-player__controls-right">
          <span>V</span>
          <span>[ ]</span>
        </div>
      </div>
    </div>
  );
}
