// STYLES IMPORTS
import './styles.scss';

// ROUTER IMPORTS
import { Route, Routes } from 'react-router';

// PAGES IMPORTS
import Museum from '../../pages/Museum';
import Home from '../../pages/Home';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/museum/:id"
          element={<Museum />}
        />
      </Routes>
    </div>
  );
}

export default App;
