import React, { useState, useEffect } from 'react';
import CardAnswer from './CardAnswer';
import './CardQuestion.css';
import axios from 'axios';
import {
  ArrowUpIcon,
  TriangleDownIcon,
  TriangleUpIcon,
} from '@chakra-ui/icons';
import { MdAccessTime, MdArrowDownward, MdArrowUpward } from 'react-icons/md';
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
  const [punteggio, setPunteggio] = useState(setPunti());
  const [flag,setFlag] = useState(false);
  let items = [];

  function setPunti() {
    axios
      .get(
        'https://87.250.73.22/html/Zanchin/vcoopendays/getPunteggioDomanda.php?id=' +
          id
      )
      .then(res => {
        if (flag != true && res.data != '') {
          res.data.map(punto =>
            items.push({
              punto: punto,
            })
          );
          setPunteggio({ items: items });
          setFlag(true);
        }
      });
  }

  function aggiungiVoto(valore) {
    setVote(valore);
  }

  useEffect(() => {
    console.log("Punteggio: " + punteggio.punto.punto);
    document.getElementById('votes').innerHTML = punteggio;

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
  var puntiDomanda = 0;

  return (
    <div className="upvotes">
      <div className="arrowsCount">
        {vote == 'up' ? (
          <MdArrowUpward color="orange" onClick={() => aggiungiVoto('up')} />
        ) : (
          <MdArrowUpward color="black" onClick={() => aggiungiVoto('up')} />
        )}
        <label id="votes">0</label>
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
          <span>
            {nome} {cognome}
          </span>
        </header>
        <p>{question}</p>
        <footer>
          <div class="question-info">{descrizioneDomanda}</div>
          <div class="question-tags">
            <span class="tag">Python</span>
            <span class="tag">Coding</span>
          </div>
        </footer>
      </section>
    </div>
  );
}
