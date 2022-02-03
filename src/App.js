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
import https from 'axios'
import Login from './pages/Login';
function App() {


/* Ignorare certificato ssl

const instance = axios.create({
  httpsAgent: new https.Agent({  
    rejectUnauthorized: false
  })
});
instance.get('https://something.com/foo');

// At request level
const agent = new https.Agent({  
  rejectUnauthorized: false
});
axios.get('https://something.com/foo', { httpsAgent: agent });
        // get request
        */
        axios.get('https://87.250.73.22/html/Zanchin/vcoopendays/connection.php').then(res => 
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
      <Route path="login" element={<Login />} />
    </Routes>
    </ChakraProvider>
  );
}

export default App;
