import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Challenge1 from './components/Challenge1';
import Challenge2 from './components/Challenge2';
import Challenge3 from './components/Challenge3';
import Challenge4 from './components/Challenge4';
import Final from './components/Final';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/challenge1" element={<Challenge1 />} />
          <Route path="/challenge2" element={<Challenge2 />} />
          <Route path="/challenge3" element={<Challenge3 />} />
          <Route path="/challenge4" element={<Challenge4 />} />
          <Route path="/final" element={<Final />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
