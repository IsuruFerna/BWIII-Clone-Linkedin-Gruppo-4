import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContent from "./Components/Me/MainContent";

function App() {
  return (
    <BrowserRouter>
      <div>Header</div>
      <Routes>
        <Route element={<MainContent />} path="/" />
      </Routes>
      <div>footer</div>
    </BrowserRouter>
  );
}

export default App;
