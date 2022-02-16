import React from "react";
import { Avatar, Text, Flex, useColorModeValue } from "@chakra-ui/react";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";

export default function AutoCompletaTagWorkshop({tagsWrk, setTagsWrk}) {
  const people = [
    { name: "Matematica", image: "https://images.everyeye.it/img-notizie/la-matematica-reale-tratta-inventata-dall-uomo-v3-467060.jpg" },
    { name: "Filosofia", image: "https://www.tecnicadellascuola.it/wp-content/uploads/2021/09/scuola_di_atene-300x194.jpg" },
    { name: "Biologia", image: "https://dbb.unipv.it/wp-content/uploads/2016/04/biologia-molecolare-e-cellulare.jpg" },
    { name: "Chimica", image: "https://www.uniba.it/corsi/chimica/homeImages/1/image" },
    { name: "Informatica", image: "https://imgcdn.agendadigitale.eu/wp-content/uploads/2018/09/17110829/coding1-e1537175323752.jpg" },
  ];

  function tagSelezionato(tag){
      setTagsWrk([...tagsWrk, tag])
  }

  return (
    
      <AutoComplete >
        <AutoCompleteInput variant="filled" placeholder="Tag" autoFocus />
        <AutoCompleteList>
          {people.map((person, oid) => (
            <AutoCompleteItem
              key={`option-${oid}`}
              value={person.name}
              textTransform="capitalize"
              align="center"
              onClick={()=>tagSelezionato(person.name)}
            >
              <Avatar size="sm" name={person.name} src={person.image} />
              <Text ml="4">{person.name}</Text>
            </AutoCompleteItem>
          ))}
        </AutoCompleteList>
      </AutoComplete>
  
  );
}