import { useParams } from "react-router-dom";
import {marcas, celulares} from "./../data/data.js"

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
                <img src={celularEncontrado.fotos}></img>
            </div>
        ) : (
        <p>No se encontró el celular</p>
        )}
    </>
    )
}
export default ProductoDetalle;