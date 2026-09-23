import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateUser from "./pages/CreateUser";
import UpdateUser from "./pages/UpdateUser";
import UserList from "./pages/UserList";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/create' element={<CreateUser />} />
          <Route path='/edit' element={<UpdateUser />}   />
          <Route path='/user' element={<UserList />}   />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App