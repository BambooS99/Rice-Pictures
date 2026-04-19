import { Link } from 'react-router-dom';

export default function AboutButton({ to, children, onClick, className = '' }) {
  const base =
    'inline-block bg-rice-orange text-white font-bold tracking-widest uppercase px-20 py-6 rounded-full text-xl hover:opacity-90 transition-opacity ' +
    className;

  if (to) {
    return (
      <Link to={to} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={base}>
      {children}
    </button>
  );
}
