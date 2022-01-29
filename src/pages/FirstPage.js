import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import FirstPageContent from '../components/FirstPageContent';
import WavedSection from '../components/WavedSection';
import ContainerCarousel from '../components/ContainerCarousel';
export default function FirstPage() {
  return <ChakraProvider theme={theme}>
      <Navbar />
      <FirstPageContent /> 
      <WavedSection />


      <ContainerCarousel />
     
        
    </ChakraProvider>;
}
