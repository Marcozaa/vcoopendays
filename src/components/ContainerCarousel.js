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

  return (
    <div className="carousel">
      <div className="scuole">
        {listaScuole &&
          listaScuole.items.map(scuola => (
            <ScuolaCard
              immagine={scuola.scuola.Logo}
              nome={scuola.scuola.Nome_Scuola}
              codice={scuola.scuola.Codice_Meccanografico}
            >
              <Select id="select_sesso" size={'sm'}>
                <option value="uomo">Uomo</option>
                <option value="donna">Donna</option>
                <option value="altro">Altro</option>
              </Select>
            </ScuolaCard>
          ))}
      </div>
    </div>
  );
}
