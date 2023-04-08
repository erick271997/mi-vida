import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../estilo/menu.css";
import junior from'../img/junior.jpeg'

function Menu() {
 


  const [nombre, SetNombre]= useState('Erick campaz ');

  const cambair=()=>{
   
   SetNombre(' Erick campaz Junior')
   
  }

 const [contador, Setcontador]= useState(0);
  const aumentar=()=>{
  Setcontador(contador+1)
  }
  return (
    <di>
      <div className="menu">
        <input className="TodoSearch" placeholder="Mi vida"></input>
        <button className="btn" type="submit">
          Buscar
        </button>
        <nav className="nav">
          <Link to="/">
          <li className="Inicio"><a> Inicio</a></li>
          </Link>

          <Link to='Informacion'>
          <li className="Inf"><a> Informacion</a></li>
          </Link>

          <Link to='Contacto'>
            <li className="Conta"><a> Contacto</a></li> 
          </Link>

          
        </nav>
        
      </div>

      <div className="mundo">
        
        
      </div>
      <div className="contenido">
      <div className="imgTx">
        <img className="junior" src={junior} alt='Programador'></img>
        <button onClick={aumentar}>Click</button>   
        <h1>Contador {contador}</h1>


        <button onClick={cambair}>Cambair</button>  
        <h1> Me llamo:  {nombre}</h1>

        </div>
        <div className="Text2">
       <p className="lorem"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Exercitationem, quae beatae soluta ea consequuntur ipsum. 
         Reprehenderit architecto nam tempore, placeat quo distinctio,
         numquam enim culpa modi quos aliquid delectus quam.</p>
        </div>
        

</div>
      
   <div>
       
        </div>
     
    </di>
  );
}
export default Menu;
