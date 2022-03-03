import { useState, useEffect } from "react";
import axios from "axios";
import Tags from "../components/Tags";
import WorkshopScuolaCard from "../components/WorkshopScuolaCard";
import Wrapper from "../components/Wrapper";
import './workshops.css'
const WorkShops = () => {
  const [workshops, setWorkshops] = useState(null);
  const [idUtente, setIdUtente] = useState();
  const [iscritto, setIscritto] = useState(null);
  var c = 0;
  let items = [];

  // Prende cookie da browser
  function getCookie(cname) {
    let name = cname + '=';
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }

  let username = getCookie('username');

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

      axios
      .get(
        'https://87.250.73.22/html/Zanchin/vcoopendays/getVisitatoreIDfromMail.php?email=' +
        getCookie('username')
      )
      .then(res => {
        setIdUtente(res.data[0].ID_Visitatore);
      });

      

      
  }, []);
  
  var tags = ['Informatica', 'Matematica']
  const [tagsWrk, setTagsWrk] = useState([])

  return (<div>
    <Wrapper setTagsWrk={setTagsWrk} tagsWrk={tagsWrk} />
    <Tags tagsWrk={tagsWrk} setTagsWrk={setTagsWrk} />
    <div className="workshops">
      {workshops &&
        workshops.items.map(workshop => (
          <WorkshopScuolaCard
            Ora_inizio={workshop.workshop.Tempo_Inizio.substring(0, workshop.workshop.Tempo_Inizio.length - 3)}
            Ora_Fine={workshop.workshop.Tempo_termine.substring(0, workshop.workshop.Tempo_termine.length - 3)}
            nomeScuola={workshop.workshop.Nome_Workshop}
            tags={tags}
            descrizione={workshop.workshop.Descrizione}
            PostiDisponibili={workshop.workshop.Posti}
            codiceMeccanoGraficoScuola={workshop.workshop.Codice_Meccanografico}
            immagine_cover={workshop.workshop.immagine_cover}
            tag={workshop.workshop.tag}
            idUtente={idUtente}
          />
        ))}
    </div>
  </div>);
}

export default WorkShops;