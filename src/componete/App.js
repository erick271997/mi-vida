import { Fragment } from "react";
import Headers from "./header";
import '../estilo/App.css';
import Menu from "./Menu";
import Inicio from './Inicio'
import { BrowserRouter,Layout, Route, Routes } from "react-router-dom";
import Informacion from "./Informacion";
import Contacto from "./Contacto";
import NotFound from "./NotFound";


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route  path="/" element={<Inicio/>} ></Route>
    <Route  path="/Informacion" element={<Informacion/>} ></Route>
    <Route  path="/Contacto" element={<Contacto/>} ></Route>
    <Route component={<NotFound/>} ></Route>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
