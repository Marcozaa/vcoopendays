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
import Navbar from './components/Navbar';
import FirstPageContent from './components/FirstPageContent';
import WavedSection from './components/WavedSection';
import ContainerCarousel from './components/ContainerCarousel';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";import FirstPage from './pages/FirstPage';
import Registrati from './pages/Registrati';
import Persone from './pages/Persone';
import axios from 'axios';
function App() {



  // Prova connessione db
        // get request
        axios.get('http://localhost:4300/vcoopendays/backend/connection.php').then(res => 
        {
        
        console.log(res.data);
           }); 
          
        
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      {/* Gestione di tutte le routes nell'applicazione */}
       <Routes>
      <Route path="/" element={<FirstPage />} />
      <Route path="scuole" element={<ContainerCarousel />} />
      <Route path="invoices" element={<ContainerCarousel />} />
      <Route path="registrati" element={<Registrati />} />
      <Route path="persone" element={<Persone />} />
    </Routes>
    </ChakraProvider>
  );
}

export default App;
