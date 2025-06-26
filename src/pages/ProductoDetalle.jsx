import { useParams } from "react-router-dom";
import {celulares} from "./../data/data.js"
import "./../components/ProductoDetalle.css"

const ProductoDetalle = () => {
    const { celularID } = useParams();
    console.log(celularID)
   /* const celular=celulares[celularID]
    console.log(celulares[celularID])*/
    const celularEncontrado = celulares.find(celular => celular.id == celularID);
console.log(celularEncontrado)
    return (
    <>
        {celularEncontrado ? (
            <div>
                <p>nombre: {celularEncontrado.nombre}</p>
                <p>descripcion: {celularEncontrado.descripcion}</p>
                <p>precio: {celularEncontrado.precio}</p>
                <img src={celularEncontrado.fotos[0]}></img>
                <img src={celularEncontrado.fotos[1]}></img>
                <img src={celularEncontrado.fotos[2]}></img>
            </div>
        ) : (
        <p>No se encontró el celular</p>
        )}
    </>
    )
}
export default ProductoDetalle;