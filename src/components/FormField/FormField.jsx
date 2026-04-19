import './FormField.css';

export default function FormField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required = false,
  rows,
}) {
  const isTextarea = type === 'textarea' || rows;

  return (
    <div className="form-field">
      <label className="form-field__label" htmlFor={name}>
        {label}{required && ' *'}
      </label>
      {isTextarea ? (
        <textarea
          id={name}
          name={name}
          rows={rows || 6}
          value={value}
          onChange={onChange}
          required={required}
          className="form-field__input form-field__input--textarea"
        />
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="form-field__input"
        />
      )}
    </div>
  );
}
