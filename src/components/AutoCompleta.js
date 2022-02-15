import React from "react";
import { Avatar, Text, Flex, useColorModeValue } from "@chakra-ui/react";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";

export default function AutoCompleta() {
  const people = [
    { name: "Ivan Caretti", image: "https://bit.ly/broken-link" },
    { name: "Cristian Dicastri", image: "https://bit.ly/kent-c-dodds" },
    { name: "Andrea Pinto", image: "https://bit.ly/sage-adebayo" },
    { name: "Daniele Sif", image: "https://bit.ly/prosper-baba" },
    { name: "Luca Piralla", image: "https://bit.ly/ryan-florence" },
  ];

  return (
    
      <AutoComplete rollNavigation>
        <AutoCompleteInput variant="filled" placeholder="Search..." autoFocus />
        <AutoCompleteList>
          {people.map((person, oid) => (
            <AutoCompleteItem
              key={`option-${oid}`}
              value={person.name}
              textTransform="capitalize"
              align="center"
            >
              <Avatar size="sm" name={person.name} src={person.image} />
              <Text ml="4">{person.name}</Text>
            </AutoCompleteItem>
          ))}
        </AutoCompleteList>
      </AutoComplete>
  
  );
}