// STYLES IMPORTS
import { FaHeart } from 'react-icons/fa';
import './styles.scss';

// INTERFACE
interface ButtonProps {
  value: string;
  isSubmit: boolean;
}

function Button({ value, isSubmit }: ButtonProps) {
  return (
    <button
      type={isSubmit ? 'submit' : 'button'}
      className="button">
      {value === 'coeur' ? <FaHeart /> : value}
    </button>
  );
}

export default Button;
