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
import { useState } from 'react';
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
import https from 'axios'
import Login from './pages/Login';
import Profilo from './pages/Profilo';
import Scuole from './pages/Scuole';
import Users from './components/Users';
import Galleria from './pages/Galleria';
function App() {

        const [mailUtente, setDatiUtente] = useState(null);
        
        
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      {/* Gestione di tutte le routes nell'applicazione */}
      <Routes>
      <Route path="/" element={<FirstPage />} />
      <Route path="scuole" element={<Scuole />} />
      <Route path="invoices" element={<ContainerCarousel />} />
      <Route path="registrati" element={<Registrati />} />
      <Route path="persone" element={<Persone />} />
      <Route path="login" element={<Login setDatiUtente={setDatiUtente} />} />
      <Route path="profilo" element={<Profilo datiUtente={mailUtente}/>} />
      <Route path="adminPanel" element={<Users />} />
      <Route path="galleria" element={<Galleria />} />
    </Routes>
    </ChakraProvider>
  );
}

export default App;
