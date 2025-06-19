import {marcas, celulares} from "./../data/data.js"
const Prod= () => {
   
    return (
      <>
      <div>
        <h2>Celulares:</h2>
        {
            celulares.length ===0?
            (<p>No hay celulares</p>):(celulares.map((celulares, celulares.id)=>(<)))
        } 
      </div>
      </>
    )
  }
  
  export default Prod
  