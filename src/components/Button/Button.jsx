import { Link } from 'react-router-dom';
import './Button.css';

export default function Button({
  variant = 'primary',
  to,
  children,
  className = '',
  type = 'button',
  disabled = false,
  onClick,
  ...rest
}) {
  const combinedClass = `btn btn--${variant} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={combinedClass} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedClass}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
