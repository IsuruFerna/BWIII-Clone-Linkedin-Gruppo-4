import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MePage from "./pages/MePage";

function App() {
   return (
      <BrowserRouter>
         <div>Header</div>
         <Routes>
            <Route element={<MePage />} path="/" />
         </Routes>
         <div>footer</div>
      </BrowserRouter>
   );
}

export default App;
