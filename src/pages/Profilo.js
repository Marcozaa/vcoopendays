import './profilo.css';
import axios from 'axios';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Avatar,
  Box,
  CloseButton,
  Flex,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useState, useEffect, useRef } from 'react';
import { FaMale, FaSchool } from 'react-icons/fa';
import ProfileSections from '../components/ProfileSections';
import { Form } from '../components/ChangeNameOverlay';
import { Popover, PopoverTrigger } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { FaEdit } from 'react-icons/fa';
import { PopoverContent } from '@chakra-ui/react';
import FocusLock from 'react-focus-lock';
import { PopoverArrow } from '@chakra-ui/react';
import { PopoverCloseButton } from '@chakra-ui/react';
import VerticalTimeline from '../components/VerticalTimeline';
import Timeline from '../components/VerticalTimeline';

const Profilo = ({ datiUtente }) => {
  console.log('rientro');
  const [immagineProfilo, setImmagineProfilo] = useState();
  const [nomeUtente, setNomeUtente] = useState();
  const [cognomeUtente, setCognomeUtente] = useState();
  const [classeUtente, setClasseUtente] = useState();
  const [sessoUtente, setSessoUtente] = useState();
  const [dataNascitaUtente, setDataNascitaUtente] = useState();
  const [confermato, setConfermato] = useState();
  const [idUtente, setIdUtente] = useState();
  const [loggato, setLoggato] = useState(null);
  const [iscrizioni, setIscrizioni] = useState(getIscrizioni());
  const [flag, setFlag] = useState(false)

  useEffect(() => {
    if (getCookie('username') != '') {
      setLoggato(true);
    } else {
      setLoggato(false);
    }
    setDati()
  }, []);

  var items = [];

  function setDati() {
    if (getCookie('permessi') == '1') {
      axios
        .get(
          'https://87.250.73.22/html/Zanchin/vcoopendays/getDatiUtente2.php?emailInserita=' +
          getCookie('username')
        )
        .then(res => {
          setConfermato(res.data[0].Confermato);
          setImmagineProfilo(res.data[0].immagine_profilo);
          document.cookie = "immagineProfilo=" + res.data[0].immagine_profilo
          setNomeUtente(res.data[0].Nome);
          setCognomeUtente(res.data[0].Cognome);
          setClasseUtente(res.data[0].Classe);
          setSessoUtente(res.data[0].Sesso);
          setDataNascitaUtente(res.data[0].Data_Nascita);
          setIdUtente(res.data[0].ID_Visitatore);
        });
    } else {
      axios
        .get(
          'https://87.250.73.22/html/Zanchin/vcoopendays/getDatiOrganizzatore.php?emailInserita=' +
          getCookie('username')
        )
        .then(res => {
          if (getCookie('permessi') == '2' || getCookie('permessi') == '3') {
            setConfermato(1);
            setImmagineProfilo(res.data[0].immagine_profilo);
            document.cookie = "immagineProfilo=" + res.data[0].immagine_profilo
            setNomeUtente(res.data[0].Nome);
            setCognomeUtente(res.data[0].Cognome);
            setIdUtente(res.data[0].ID_Organizzatore);
          } else {
            setConfermato(0);
          }

        });
    }

  }

  function getIscrizioni() {
    console.log("idUtenet: " + idUtente);
    if (getCookie('permessi') == '1') {
      axios
        .get(
          'https://87.250.73.22/html/Zanchin/vcoopendays/GetIscrizioniWorkshop.php?idUtente=' +
          idUtente
        )
        .then(res => {
          if (flag != true && res.data != '') {
            console.log("RES: " + res.data);
            console.log("IDUtente: " + idUtente);
            res.data.map(iscrizione =>
              items.push({
                iscrizione: iscrizione,
              })
            );
            setIscrizioni({ items: items });
            setFlag(true)
          }
        });
    } else {
      axios
        .get(
          'https://87.250.73.22/html/Zanchin/vcoopendays/getWorkshopOrg.php?idUtente=' +
          idUtente
        )
        .then(res => {
          
          if (flag != true && res.data != '') {
            res.data.map(iscrizione =>
              items.push({
                iscrizione: iscrizione,
              })
            );
            setIscrizioni({ items: items });
            setFlag(true)
          }
        });
    }
  }

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

  let user = getCookie('username');

  const { onOpen, onClose, isOpen } = useDisclosure();
  const firstFieldRef = useRef(null);
  return (

    <div>


      {confermato == 1 ? (
        <></>
      ) : (
        <Alert status="error" position={'absolute'}>
          <AlertIcon />
          <AlertTitle mr={2}>Non sei ancora autenticato!</AlertTitle>
          <AlertDescription>
            La tua esperienza potrebbe essere limitata.
          </AlertDescription>
          <CloseButton position="absolute" right="8px" top="8px" />
        </Alert>
      )}
      {loggato ? (
        <div
          className="profilo"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <div className="top">
            <div className="left">
              {immagineProfilo && (
                <Avatar
                  width={'9vw'}
                  minWidth={'5rem'}
                  minHeight={'5rem'}
                  maxWidth={'150px'}
                  maxHeight={'150px'}
                  height={'9vw'}
                  position={'absolute'}
                  top={'11vh'}
                  name={user}
                  border={'10px solid #242424'}
                  src={immagineProfilo}
                />
              )}
            </div>

            <div className="right"></div>
          </div>
          <div className="infos">
            {/*usecolormode*/}
            <div className="infos-top">
              {nomeUtente && (
                <Box
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'center'}
                >
                  <Text className="nome" fontSize="lg">
                    {nomeUtente} {cognomeUtente}&nbsp;
                  </Text>
                  <Popover
                    isOpen={isOpen}
                    initialFocusRef={firstFieldRef}
                    onOpen={onOpen}
                    onClose={onClose}
                    placement="right"
                    closeOnBlur={false}
                  >
                    <PopoverTrigger>
                      <IconButton size="sm" icon={<FaEdit />} />
                    </PopoverTrigger>
                    <PopoverContent p={5}>
                      <FocusLock returnFocus persistentFocus={false}>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <Form
                          firstFieldRef={firstFieldRef}
                          onCancel={onClose}
                        />
                      </FocusLock>
                    </PopoverContent>
                  </Popover>
                </Box>
              )}
            </div>
            {classeUtente && (
              <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <FaSchool />
                <Text fontSize="lg">&nbsp;{classeUtente}</Text>
              </Box>
            )}
            {sessoUtente && dataNascitaUtente && (
              <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <FaMale />
                <Text fontSize="lg">&nbsp;{dataNascitaUtente}</Text>
              </Box>
            )}
          </div>
          <div style={{
            width: '80%'
          }}>
            <Timeline iscrizioni={iscrizioni} />
          </div>
        </div>
      ) : (
        <h1>Non sei loggato!</h1>
      )}
    </div>
  );
};

export default Profilo;
