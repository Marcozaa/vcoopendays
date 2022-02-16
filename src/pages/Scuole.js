import ContainerCarousel from "../components/ContainerCarousel";
import FiltroScuole from "../components/FiltroScuole";
import Folla from "../components/Folla";
import HeroList from "../components/Hero-list";
const Scuole = () => {
    return ( <div>
        <HeroList />
        <FiltroScuole />
        <ContainerCarousel /> 
    </div> );
}
 
export default Scuole;