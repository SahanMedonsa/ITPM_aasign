import react from "react";
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Statement from "./component/statement/statement";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/statement" element={<Statement/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
