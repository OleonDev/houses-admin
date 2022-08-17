import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import House from './components/houses/House';

function App() {
  return (
    <BrowserRouter>
      <Link to="/"> House</Link>
      <Routes>
        <Route path="/" element={<House />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
