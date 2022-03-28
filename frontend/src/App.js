import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';
import Home from './pages/home/Home';
import Home2 from './pages/home2/Home2';
import Login from './pages/login/Login';
import NoPage from './pages/nopage/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<Home />} />
        <Route path='/admin/home2' element={<Home2 />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
