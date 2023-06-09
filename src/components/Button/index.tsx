// STYLES IMPORTS
import './styles.scss';

// INTERFACE
interface ButtonProps {
  value : string;
  onClickHandler : () => void;
  isSubmit: boolean;
}

function Button({
  value,
  onClickHandler,
  isSubmit,
} : ButtonProps) {
  return (
    <button
      type={isSubmit ? 'submit' : 'button'}
      className="button"
      onClick={onClickHandler}
    >

      {value}
    </button>
  );
}

export default Button;
