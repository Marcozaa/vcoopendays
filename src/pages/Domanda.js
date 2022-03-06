import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import CardQuestion from '../components/CardQuestion';
import axios from 'axios';
import './forum.css';
import ForumFeatures from '../components/ForumFeatures';
import { Flex, Tag, TagLabel, Text } from '@chakra-ui/react';
import { Stack } from '@chakra-ui/react';
import { BsQuestion, BsSquareFill } from 'react-icons/bs';
import { MdNewReleases } from 'react-icons/md';
import RispostaDomandaInputField from '../components/RispostaDomandaInputField';
import CardAnswer from '../components/CardAnswer';
import { Center, Divider }  from '@chakra-ui/react';
export default function Domanda() {

    let { id } = useParams();
    let { idUtente } = useParams();
    const [risposte, setRisposte] = useState(null);
    const [infoDomanda, setInfoDomanda] = useState({})
  var c = 0;
  let items = [];
  useEffect(() => {
    // Ottieni datri domanda
    axios
      .get('https://87.250.73.22/html/Zanchin/vcoopendays/getDomandaFromID.php?id='+id)
      .then(res => {
        console.log(res.data);

        setInfoDomanda({...infoDomanda, 
        titolo: res.data[0].Contenuto,
        nomeUtente: res.data[0].Nome,
        cognomeUtente: res.data[0].Cognome,
        descrizioneDomanda: res.data[0].descrizione,
        immagine_profilo_utente: res.data[0].immagine_profilo
        })
      });

      // Ottieni dati risposta
      axios
      .get('https://87.250.73.22/html/Zanchin/vcoopendays/getRisposteDomanda.php?id='+ id)
      .then(res => {
        console.log('Res.data=' + res.data);

        res.data.map(risposta =>
          
          items.push({
            risposta: risposta,
          })
        );
        setRisposte({ items: items });

        
      });
  }, []);
  return (
 
    
  <div className='all'>
    
     
           <RispostaDomandaInputField idDomanda={id} idUtente={idUtente}/>
      
      <div className="contentForum" style={{marginTop:'3rem'}}>
        <div className="left1">
       
          <Flex direction={'column'} alignItems={'flex-start'} margin={'0.5rem'}>
          <Stack direction={'row'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
           <BsQuestion />
           <Text fontSize={'lg'}>Altre domande</Text>
          </Stack>
           <Stack direction={'row'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Tag size={'sm'} key={'md'} variant='solid' colorScheme='teal'>
                22
              </Tag>
            <Text fontSize={'md'}>
              
              Perchè non posso iscrivermi a nessun workshop?
            </Text>
            
          </Stack>
          <Stack direction={'row'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Tag size={'sm'} key={'md'} variant='solid' colorScheme='teal'>
                -2
              </Tag>
              <Tag
      size={'md'}
      key={'md'}
      borderRadius='full'
      variant='solid'
      colorScheme='green'
    >
      <TagLabel>NEW</TagLabel>
      <MdNewReleases />
    </Tag>
            <Text size={'md'}>
              
              Perchè non riesco a loggarmi?
            </Text>
            
          </Stack>

          </Flex>

         
        </div>
        <Center>
          <Divider orientation='vertical' />
        </Center>
        <div className="right2">
      
        
   <div className="questionsContainer">
          
            
            
              <CardQuestion 
              id={id}
              idUtente={idUtente}
              question={infoDomanda.titolo} 
              nome={infoDomanda.nomeUtente} 
              cognome={infoDomanda.cognomeUtente} 
              descrizioneDomanda={infoDomanda.descrizioneDomanda} 
              imgProfilo={infoDomanda.immagine_profilo_utente}
              />

              { risposte && (

                risposte.items.length > 0 ? (
              
              risposte.items.map(risposta =>(
                <CardAnswer risposta={risposta}/>
              ))):<Flex 
              w={'90%'} 
              justifyContent={'center'} 
              alignItems={'center'}>
                <Text 
                fontSize={'xl'} 
                color={'gray.400'}>
                  Ancora nessuna risposta...
                  </Text>
                  </Flex>)}
              
            
            
        </div>

        </div>
      </div>
     
       
    </div>
  )
}
