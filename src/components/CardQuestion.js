import React, { useState, useEffect } from 'react';
import CardAnswer from './CardAnswer';
import './CardQuestion.css';
import axios from 'axios';
import {
  ArrowUpIcon,
  TriangleDownIcon,
  TriangleUpIcon,
} from '@chakra-ui/icons';
import { Text } from '@chakra-ui/react';
import { MdAccessTime, MdArrowDownward, MdArrowUpward } from 'react-icons/md';
import { useColorModeValue } from '@chakra-ui/react';
export default function CardQuestion({
  id,
  idUtente,
  question,
  nome,
  imgProfilo,
  descrizioneDomanda,
  cognome,
}) {
  const [vote, setVote] = useState(null);
  const [punteggio, setPunteggio] = useState();
  const [flag, setFlag] = useState(false);
  const [punteggioDomanda, setPunteggioDomanda] = useState(0)
  let items = [];
  var punti = 0;

  function setPunti() {
    axios
      .get(
        'https://87.250.73.22/html/Zanchin/vcoopendays/getPunteggioDomanda.php?id=' +
        id
      )
      .then(res => {
        console.log(res.data)
        setPunteggioDomanda(res.data[0].votes)
      });
      
  }

  function aggiungiVoto(valore) {
    setVote(valore);
  }

  useEffect(() => {
    setPunti();
    
    

    axios
      .get(
        'https://87.250.73.22/html/Zanchin/vcoopendays/insertVoto.php?idDomanda=' +
        id +
        '&idUtente=' +
        idUtente +
        '&valore=' +
        vote
      )
      .then(res => {
        //console.log(res.data);
      });
  }, [vote]);

  useEffect(() => {
    console.log(items[0]);
    console.log(items.length);
  }, [items])
  var puntiDomanda = 0;

  return (
    <div className="upvotes">
      <div className="arrowsCount">
        {vote == 'up' ? (
          <MdArrowUpward color="orange" onClick={() => aggiungiVoto('up')} />
        ) : (
          <MdArrowUpward color="black" onClick={() => aggiungiVoto('up')} />
        )}
        {punteggioDomanda && (
        <label id="votes">
          {punteggioDomanda}
          </label>
        )}
        {vote == 'down' ? (
          <MdArrowDownward
            color="orange"
            onClick={() => aggiungiVoto('down')}
          />
        ) : (
          <MdArrowDownward color="black" onClick={() => aggiungiVoto('down')} />
        )}
      </div>
      <section class="question-card">
        <header>
          <img src={imgProfilo} />
          <span ><Text fontSize={'sm'} color={useColorModeValue("black", "white")}>
            {nome} {cognome}
            </Text>
          </span>
        </header>
        <p ><Text fontSize={'lg'} color={useColorModeValue("black", "white")}>{question}</Text></p>
        <footer>
          <div 
          class="question-info"
            
          ><Text color={useColorModeValue("black", "white")}> {descrizioneDomanda} </Text></div>
          <div class="question-tags">
            <span class="tag">Python</span>
            <span class="tag">Coding</span>
          </div>
        </footer>
      </section>
    </div>
  );
}
