import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Userlist from './pages/Userlist';
import Createuser from './pages/Createuser';
import Updateuser from './pages/Updateuser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Userlist />} />
        <Route path="/create" element={<Createuser />} />
        <Route path="/edit/:id" element={<Updateuser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
