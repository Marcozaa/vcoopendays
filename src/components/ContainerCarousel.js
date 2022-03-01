import React from 'react';
import axios from 'axios';
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  SimpleGrid,
  GridItem,
  Heading,
  Text,
  Stack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  FormHelperText,
  Textarea,
  Avatar,
  Icon,
  Button,
  VisuallyHidden,
  Select,
  Checkbox,
  RadioGroup,
  Radio,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import ScuolaCard from './ScuolaCard';
import './scuolecarousel.css';

export default function ContainerCarousel({listaScuole,setListaScuole}) {
  const [nomeScuole, setNomeScuole] = useState(null);
  var c = 0;
  let items = [];
  useEffect(() => {
    axios
      .get('https://87.250.73.22/html/Zanchin/vcoopendays/getPadiglioni.php')
      .then(res => {
        console.log('Res.data=' + res.data);

        res.data.map(scuola =>
          
          items.push({
            scuola: scuola,
          })
        );
        setNomeScuole({ items: items });
        setListaScuole({items: items})

        
      });
  }, []);
    const immaginiScuolePlaceholder = [
      "https://images.unsplash.com/photo-1516308354296-1c9c5b561e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNjaG9vbCUyMGFyY2hpdGVjdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://archello.s3.eu-central-1.amazonaws.com/images/2020/12/02/noahh---network-oriented-architecture-nature-inclusive-school-campus-csg-reggesteyn-primary-schools-archello.1606887333.6487.jpg",
      "https://theplan.it/images/223foto_1_OPT.jpg",
      "https://www.floornature.com/media/photos/1/16053/13_Menzione_De-Gioia_full.jpg",
      "https://images.adsttc.com/media/images/56d2/440f/e58e/ce50/4c00/0019/newsletter/06%E5%BB%BA%E7%AD%91%E5%A4%96%E8%A7%82facade.jpg?1456620544",
      "https://archello.s3.eu-central-1.amazonaws.com/images/2019/06/20/The-learning-loop-Render-by-EDiT-architectural-visualization-studio.1561022321.4658.jpg",
      "https://images.unsplash.com/photo-1516308354296-1c9c5b561e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNjaG9vbCUyMGFyY2hpdGVjdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://miro.medium.com/max/800/1*VT7ocS00FLAtIbsWySi7gw.jpeg",
      "https://theplan.it/images/223foto_1_OPT.jpg",
      "https://www.floornature.com/media/photos/1/16053/13_Menzione_De-Gioia_full.jpg",
      "https://images.adsttc.com/media/images/56d2/440f/e58e/ce50/4c00/0019/newsletter/06%E5%BB%BA%E7%AD%91%E5%A4%96%E8%A7%82facade.jpg?1456620544",
      "https://archello.s3.eu-central-1.amazonaws.com/images/2019/06/20/The-learning-loop-Render-by-EDiT-architectural-visualization-studio.1561022321.4658.jpg",
      "https://interiordesign.net/wp-content/uploads/2021/08/LARGEIDPHOTOInterior-Design-Laboratory-for-Visionary-Architecture-Vietnam-school-idx210201_lava01_2-02.21.jpg",
      "https://images.unsplash.com/photo-1516308354296-1c9c5b561e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNjaG9vbCUyMGFyY2hpdGVjdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://archello.s3.eu-central-1.amazonaws.com/images/2020/12/02/noahh---network-oriented-architecture-nature-inclusive-school-campus-csg-reggesteyn-primary-schools-archello.1606887333.6487.jpg",
      "https://theplan.it/images/223foto_1_OPT.jpg",
      "https://www.floornature.com/media/photos/1/16053/13_Menzione_De-Gioia_full.jpg",
      "https://images.adsttc.com/media/images/56d2/440f/e58e/ce50/4c00/0019/newsletter/06%E5%BB%BA%E7%AD%91%E5%A4%96%E8%A7%82facade.jpg?1456620544",
      "https://archello.s3.eu-central-1.amazonaws.com/images/2019/06/20/The-learning-loop-Render-by-EDiT-architectural-visualization-studio.1561022321.4658.jpg",
      "https://images.unsplash.com/photo-1516308354296-1c9c5b561e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNjaG9vbCUyMGFyY2hpdGVjdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://miro.medium.com/max/800/1*VT7ocS00FLAtIbsWySi7gw.jpeg",
      "https://theplan.it/images/223foto_1_OPT.jpg",
      "https://www.floornature.com/media/photos/1/16053/13_Menzione_De-Gioia_full.jpg",
      "https://images.adsttc.com/media/images/56d2/440f/e58e/ce50/4c00/0019/newsletter/06%E5%BB%BA%E7%AD%91%E5%A4%96%E8%A7%82facade.jpg?1456620544",
      "https://archello.s3.eu-central-1.amazonaws.com/images/2019/06/20/The-learning-loop-Render-by-EDiT-architectural-visualization-studio.1561022321.4658.jpg",
      "https://interiordesign.net/wp-content/uploads/2021/08/LARGEIDPHOTOInterior-Design-Laboratory-for-Visionary-Architecture-Vietnam-school-idx210201_lava01_2-02.21.jpg",
    ]
  return (
    
    <div className="carouselScuole">
      <main class="page-content">
        {listaScuole &&
          listaScuole.items.map((scuola, i) => (
            <ScuolaCard
              immagine={immaginiScuolePlaceholder[i]}
              nome={scuola.scuola.Nome_Scuola}
              codice={scuola.scuola.Codice_Meccanografico}
            >
            
            </ScuolaCard>
          ))}
      </main>
    </div>
  );
}
