import react from "react";
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Statement from "./component/statement/statement";
import './App.css';
import Header from "./component/header";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/statement" element={<Statement/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
