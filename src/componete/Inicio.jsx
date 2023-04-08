import { Fragment } from "react";
import Headers from "./header";
import '../estilo/App.css';
import Menu from "./Menu";


function Inicio() {
  return (
    <div className="cabeza">
      <Headers/>
      <Menu/>
    </div>
  );
}

export default Inicio;
