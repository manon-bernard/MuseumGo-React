// STYLES IMPORTS
import './styles.scss';

// INTERFACE
interface InputProps {
  type: 'checkbox' | 'text';
  value: string;
  onChange: () => void;
}

function Input({ type, value, onChange }: InputProps) {
  return (
    <label htmlFor={value}>
      <input
        id={value}
        type={type}
        className={`input--${type}`}
        placeholder={value}
        onChange={onChange}
      />
      {value}
    </label>
  );
}

export default Input;
