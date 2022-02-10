import React from 'react';
import axios from 'axios';
import { Avatar, Flex, Text } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import ScuolaCard from './ScuolaCard';
import './scuolecarousel.css';

export default function ContainerCarousel() {
  const [nomeScuole, setNomeScuole] = useState(null);
  var c = 0;
  let items = []
  useEffect(() => {
    axios
      .get(
        'https://87.250.73.22/html/Zanchin/vcoopendays/getScuole.php'
      )
      .then(res => {
        console.log(res.data)
        res.data.map(scuola => 
          items.push({
            
            scuola: scuola
          })
        )
        setNomeScuole({ items: items})

        console.log(nomeScuole.items[0].scuola.Nome_Scuola)
      });
  }, []);

  return (
    <div className="carousel">
      <div className="scuole">
        {nomeScuole && (
        nomeScuole.items.map(scuola => (
          <ScuolaCard immagine={scuola.scuola.Logo} nome={scuola.scuola.Nome_Scuola} codice={scuola.scuola.Codice_Meccanografico}  />
        ))
        )}
      </div>
    </div>
  );
}
