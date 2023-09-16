// STYLES IMPORTS
import './styles.scss';

// REACT IMPORTS
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { loadMore } from '../../../store/reducers/museum';

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
        aria-label="loadmore"
      >
        Afficher plus
      </button>
    </div>
  );
}

export default Pagination;
