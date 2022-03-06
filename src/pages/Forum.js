import { Button, chakra, Divider, Flex, Stack, Text, FormControl, MenuDivider, Center } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { AiFillMessage, AiFillTags } from 'react-icons/ai';
import { BsDash, BsSquare, BsSquareFill } from 'react-icons/bs';
import { FaExpand, FaStaylinked, FaUser } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { MdBluetoothAudio, MdComputer } from 'react-icons/md';
import CardAnswer from '../components/CardAnswer';
import CardQuestion from '../components/CardQuestion';
import ForumFeatures from '../components/ForumFeatures';
import shortQuestion, { ShortQuestion } from '../components/shortQuestion';
import axios from 'axios';
import './forum.css';

import { useRef } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'
import InserimentoDomanda from '../components/InserimentoDomanda';
export default function Forum() {
  const [idUtente, setIdUtente] = useState(null)
  const [permessi, setPermessi] = useState(null);
  const fooData = {
    answer:
      "Frequenti o gestisci una scuola superiore di primo o secondo grado?Accedi, prenota e gestisci le attività che partecipano all'evento di orientamento.Vi aspettiamo numerosi.",
    username: 'Adin Ross',
    immagineProfilo:
      'https://images.unsplash.com/photo-1646492459678-d64fa54f5970?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    question: 'Come mi chiamo?',
  };

  const [domande, setDomande] = useState(null);
  var c = 0;
  let items = [];
  useEffect(() => {
    setPermessi(getCookie('permessi'));
    axios
      .get('https://87.250.73.22/html/Zanchin/vcoopendays/getDomandeForum.php')
      .then(res => {
        res.data.map(domanda =>

          items.push({
            domanda: domanda,
          })
        );
        setDomande({ items: items });
      });
    axios
      .get(
        'https://87.250.73.22/html/Zanchin/vcoopendays/getDatiUtente2.php?emailInserita=' +
        getCookie('username')
      )
      .then(res => {
        if (getCookie('permessi') == '1') {
          setIdUtente(res.data[0].ID_Visitatore);
        } else {
          if (getCookie('permessi') == '2') {
            setIdUtente(res.data[0].ID_Organizzatore);
          }
        }
      });

    console.log("IDUtente: " + idUtente)
  }, []);
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

  const { onOpen, onClose, isOpen } = useDisclosure();
  const firstFieldRef = useRef(null);
  return (
    <div>

      <ForumFeatures title={'Benvenuto nel forum di VCOopendays'} />

      <div className="contentForum">
        <div className="left1">
          {permessi == 1 ? (
            <Button margin={'2rem'} onClick={onOpen}>Inizia una discussione</Button>
          ) : null}

          <Flex direction={'column'} alignItems={'flex-start'} margin={'0.5rem'}>
            <Stack direction={'row'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
              <AiFillMessage />
              <p>Tutte le discussioni</p>
            </Stack>
            <Stack direction={'row'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
              <AiFillTags />
              <p>Tags</p>
            </Stack>
          </Flex>

          <Flex direction={'column'} alignItems={'flex-start'}>
            <Stack direction={'row'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
              <BsSquareFill color='lightblue' />
              <p>Scuole</p>
            </Stack>
            <Stack direction={'row'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
              <BsSquareFill color='green' />
              <p>Utenti</p>
            </Stack>
            <Stack direction={'row'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
              <BsSquareFill color='teal' />
              <p>Workshop</p>
            </Stack>
            <Stack direction={'row'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
              <BsSquareFill />
              <p>Server-Side</p>
            </Stack>

          </Flex>
        </div>
        <Center>
          <Divider orientation='vertical' />
        </Center>
        <div className="right2">

          {
            domande && (
              domande.items.map(domanda => (
                <>
                  <ShortQuestion idUtente={idUtente} id={domanda.domanda.id} data={domanda.domanda.data} descrizione={domanda.domanda.descrizione} nome={domanda.domanda.Nome} cognome={domanda.domanda.Cognome} immagineProfilo={domanda.domanda.immagine_profilo} titoloDomanda={domanda.domanda.Contenuto} />
                  <Divider />
                </>
              )))}


        </div>
      </div>
      {/*
        <div className="questionsContainer">
          <div className="questions">
            <div className="cardQuestion">
              <CardQuestion question={fooData.question} username={fooData.username} immagineProfilo={fooData.immagineProfilo}/>
              <CardAnswer answer={fooData.answer} username={fooData.username} immagineProfilo={fooData.immagineProfilo}/>
              <CardAnswer answer={fooData.answer} username={fooData.username} immagineProfilo={fooData.immagineProfilo}/>
            </div>
            <div className="cardQuestion">
              <CardQuestion question={fooData.question} username={fooData.username} immagineProfilo={fooData.immagineProfilo}/>
              <CardAnswer answer={fooData.answer} username={fooData.username} immagineProfilo={fooData.immagineProfilo}/>
              <CardAnswer answer={fooData.answer} username={fooData.username} immagineProfilo={fooData.immagineProfilo}/>
            </div>
            <div className="cardQuestion">
              <CardQuestion question={fooData.question} username={fooData.username} immagineProfilo={fooData.immagineProfilo}/>
              <CardAnswer answer={fooData.answer} username={fooData.username} immagineProfilo={fooData.immagineProfilo}/>
              <CardAnswer answer={fooData.answer} username={fooData.username} immagineProfilo={fooData.immagineProfilo}/>
            </div>
            <div className="cardQuestion">
              <CardQuestion question={fooData.question} username={fooData.username} immagineProfilo={fooData.immagineProfilo}/>
              <CardAnswer answer={fooData.answer} username={fooData.username} immagineProfilo={fooData.immagineProfilo}/>
              <CardAnswer answer={fooData.answer} username={fooData.username} immagineProfilo={fooData.immagineProfilo}/>
            </div>
          


          </div>

            </div>
        */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <InserimentoDomanda idUtente={idUtente} />
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Chiudi
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
