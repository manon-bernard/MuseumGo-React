// STYLES IMPORTS
import './styles.scss';

// INTERFACE
interface InputProps {
  type: 'checkbox' | 'text';
  value: string;
}

function Input({
  type,
  value,
} : InputProps) {
  return (
    <label htmlFor={value}>
      <input
        id={value}
        type={type}
        className={`input--${type}`}
        placeholder={value}
      />
      {value}
    </label>

  );
}

export default Input;
