import Dashboard from './pages/dashboard/Dashboard'
import Login from './pages/login/Login'
import PageNotFound from './pages/pagenotfound/PageNotFound'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/det-admin' element={<Dashboard />} />
          <Route path="/det-admin/login" element={<Login />} />
          <Route path="/det-admin/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
