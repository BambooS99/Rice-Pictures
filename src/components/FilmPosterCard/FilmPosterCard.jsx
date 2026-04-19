import { Link } from 'react-router-dom';
import './FilmPosterCard.css';

export default function FilmPosterCard({ title, imageSrc, slug, className = '' }) {
  const Wrapper = slug ? Link : 'div';
  const wrapperProps = slug ? { to: `/${slug}` } : {};

  return (
    <Wrapper {...wrapperProps} className={`poster-card ${className}`.trim()}>
      <div className="poster-card__image-wrapper">
        <img
          src={imageSrc}
          alt={`${title} Poster`}
          className="poster-card__image"
        />
      </div>
      <h3 className="poster-card__title">{title}</h3>
    </Wrapper>
  );
}
