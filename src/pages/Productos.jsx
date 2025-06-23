import {marcas, celulares} from "./../data/data.js"
import {Link} from 'react-router-dom'
const Prod= () => {
   
    return (
      <>
      <div>
        <h2>Celulares:</h2>
        {
            celulares.length ===0?
            (<p>No hay celulares</p>):(celulares.map((celulares)=>(<Link to={`/productos/${celulares.id}`}>{celulares.nombre}</Link>)))
        } 
      </div>
      </>
    )
  }
  
  export default Prod
  