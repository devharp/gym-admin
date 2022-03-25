import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import NoPage from './pages/nopage/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<Home />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
