import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return(
        <>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/quienes-somos">Quienes Somos</Link>
                <Link to="/productos">Productos</Link>
            </nav>
            <Outlet/>
        </>
    );
};

export default Layout;