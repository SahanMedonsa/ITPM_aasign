import react from "react";
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Statement from "./component/statement/statement";
import UpdateStatement from "./component/statement/updateStatement";
import './App.css';
import Header from "./component/header";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/statement" element={<Statement/>} />
      <Route path="/updateStatement/:_id" element={<UpdateStatement/>}   />
      
      </Routes>
    </BrowserRouter>

  );
}

export default App;
