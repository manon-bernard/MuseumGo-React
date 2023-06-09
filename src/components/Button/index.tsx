// STYLES IMPORTS
import './styles.scss';

// INTERFACE
interface ButtonProps {
  value : string;
  isSubmit: boolean;
}

function Button({
  value,
  isSubmit,
} : ButtonProps) {
  return (
    <button
      type={isSubmit ? 'submit' : 'button'}
      className="button"
    >
      {value}
    </button>
  );
}

export default Button;
