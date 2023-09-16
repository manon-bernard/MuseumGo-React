// STYLES IMPORTS
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { loadMore } from '../../../store/reducers/museum';
import './styles.scss';

// ROUTER IMPORTS

// COMPONENTS IMPORTS

// TYPES IMPORTS

// INTERFACE

function Pagination() {
  const dispatch = useAppDispatch();

  const handleClick = (): void => {
    dispatch(loadMore());
  };

  // Museum Data

  return (
    <div className="pagination">
      <button
        type="button"
        className="button"
        onClick={handleClick}
      >
        Afficher plus
      </button>
    </div>
  );
}

export default Pagination;
