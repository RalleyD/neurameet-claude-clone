import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Recording from './components/recording';
import LandingPage from './components/landing-page';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/record">Record</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/record" element={<Recording />} />
          <Route path="/" element={<LandingPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
