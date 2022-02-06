import './profilo.css';
import axios from 'axios';
import { Avatar, Flex, Text } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { FaMale, FaSchool } from 'react-icons/fa';
import ProfileSections from '../components/ProfileSections';

const Profilo = ({ datiUtente }) => {
  const [immagineProfilo, setImmagineProfilo] = useState(null);
  const [nomeUtente, setNomeUtente] = useState(null);
  const [cognomeUtente, setCognomeUtente] = useState(null);
  const [classeUtente, setClasseUtente] = useState(null);
  const [sessoUtente, setSessoUtente] = useState(null);
  const [dataNascitaUtente, setDataNascitaUtente] = useState(null);

  const [loggato, setLoggato] = useState(null);

  useEffect(() => {
    if (document.cookie.indexOf('username=') == 0) {
      setLoggato(true);
    } else {
      setLoggato(false);
      window.location.href = 'login';
    }

    axios
      .get(
        'https://87.250.73.22/html/Zanchin/vcoopendays/getDatiUtente.php?emailInserita=' +
          getCookie('username')
      )
      .then(res => {
        console.log(res);
        setImmagineProfilo(res.data[0].immagine_profilo);
        setNomeUtente(res.data[0].Nome);
        setCognomeUtente(res.data[0].Cognome);
        setClasseUtente(res.data[0].Classe);
        setSessoUtente(res.data[0].Sesso);
        setDataNascitaUtente(res.data[0].Data_Nascita);
      });
  }, []);

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
  return (
    <div >
        {loggato ? (
      <div>
        <div className="top">
          <div className="left">
            {immagineProfilo && (
              <Avatar
                width={'8vw'}
                minWidth={'5rem'}
                minHeight={'5rem'}
                height={'8vw'}
                name={user}
                src={immagineProfilo}
              />
            )}
          </div>

          <div className="right">
            
          </div>
        </div>
        <div className="infos">
            <div className="infos-top">
            {nomeUtente && (
              <Text
              className='nome'
              fontSize="lg">
                {nomeUtente} {cognomeUtente}
              </Text>
            )}
            </div>
            {classeUtente && (
              <div className="scuola">
                <FaSchool />
                <Text fontSize="lg">{classeUtente}</Text>
              </div>
            )}
            {sessoUtente && (
                dataNascitaUtente && (
              <div className="scuola">
                <FaMale />
                <Text fontSize="lg">{dataNascitaUtente}</Text>
              </div>
                )
            )}
        </div>
        <ProfileSections />
      </div>
      ):
      <h1 >Non sei loggato!</h1>
      }
    </div>
  );
};

export default Profilo;
