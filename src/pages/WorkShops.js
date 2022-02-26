import { useState, useEffect } from "react";
import axios from "axios";
import Tags from "../components/Tags";
import WorkshopScuolaCard from "../components/WorkshopScuolaCard";
import Wrapper from "../components/Wrapper";
import './workshops.css'
const WorkShops = () => {
     const [workshops, setWorkshops] = useState(null);
  var c = 0;
  let items = [];
  useEffect(() => {
    axios
      .get('https://87.250.73.22/html/Zanchin/vcoopendays/getWorkshopData.php')
      .then(res => {
        console.log('Res.data=' + res.data);

        res.data.map(workshop =>
          
          items.push({
            workshop: workshop,
          })
        );
        setWorkshops({ items: items });

        
      });
  }, []);
  console.log(workshops)
      var tags=['Informatica' , 'Matematica']
    const [tagsWrk, setTagsWrk] = useState([])
    return ( <div>
        <Wrapper setTagsWrk={setTagsWrk} tagsWrk={tagsWrk} />
        <Tags tagsWrk={tagsWrk} setTagsWrk={setTagsWrk} />
        <div className="workshops">
        {workshops &&
          workshops.items.map(workshop => (
                    <WorkshopScuolaCard 
                    Ora_inizio={workshop.workshop.Tempo_Inizio.substring(0, workshop.workshop.Tempo_Inizio.length - 3)} 
                    Ora_Fine={workshop.workshop.Tempo_termine.substring(0, workshop.workshop.Tempo_termine.length - 3)} 
                    nomeScuola={workshop.workshop.Nome} 
                    tags={tags}
                    descrizione = {workshop.workshop.Descrizione} 
                    PostiDisponibili={workshop.workshop.Posti}
                    codiceMeccanoGraficoScuola={workshop.workshop.Codice_Meccanografico}
                    immagine_cover={workshop.workshop.immagine_cover}
                    tag={workshop.workshop.tag}
                    />
          ))}
        </div>
    </div> );
}
 
export default WorkShops;