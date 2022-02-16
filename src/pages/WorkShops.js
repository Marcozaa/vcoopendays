import { useState } from "react";
import Tags from "../components/Tags";
import WorkshopScuolaCard from "../components/WorkshopScuolaCard";
import Wrapper from "../components/Wrapper";

const WorkShops = () => {
    var tags=['Informatica' , 'Matematica']
    const [tagsWrk, setTagsWrk] = useState([])
    return ( <div>
        <Wrapper setTagsWrk={setTagsWrk} tagsWrk={tagsWrk} />
        <Tags tagsWrk={tagsWrk} setTagsWrk={setTagsWrk} />
        <WorkshopScuolaCard nomeScuola={'IIS Cobianchi'} tags={tags} descrizione = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.'} utentiIscritti={''}/>
    </div> );
}
 
export default WorkShops;