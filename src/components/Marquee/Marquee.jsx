import './Marquee.css';

export default function Marquee({ items = [], className = '' }) {
  return (
    <div className={`marquee ${className}`.trim()}>
      <div className="marquee__track">
        {/* Duplicate items for seamless looping */}
        {[...items, ...items].map((item, i) => (
          <span key={i} className="marquee__item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
