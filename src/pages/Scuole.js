import { useState } from "react";
import ContainerCarousel from "../components/ContainerCarousel";
import FiltroScuole from "../components/FiltroScuole";
import Folla from "../components/Folla";
import HeroList from "../components/Hero-list";

const Scuole = () => {
    const [listaScuole, setListaScuole] = useState()
    return ( <div>
        <HeroList />
        <FiltroScuole setListaScuole={setListaScuole} listaScuole={listaScuole}/>
        <ContainerCarousel listaScuole={listaScuole} setListaScuole={setListaScuole}/> 
    </div> );
}
 
export default Scuole;