import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MePage from "./pages/MePage";
import Footer from "./Components/Me/footer";
import Formazione from "./Components/Me/formazione";
import Competenze from "./Components/Me/competenze";


function App() {
   return (
      <BrowserRouter>
         <div></div>
         <Routes>
            <Route element={<MePage />} path="/" />
         </Routes>
         <div><Competenze/></div>
         <div><Formazione/></div>
         <div><Footer/></div>
      </BrowserRouter>
   );
}

export default App;

// Your access token for Token Based Authentication is:

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZGI4NWM1NWU3ZTAwMThmODNiZWMiLCJpYXQiOjE2OTk4NjM0MjksImV4cCI6MTcwMTA3MzAyOX0.AeGut2RX1oz62ERdBCMBJM1Piacgla1-NhTGgCVSkJI

