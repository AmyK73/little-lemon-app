import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import { ChakraProvider } from '@chakra-ui/react';
import CustomersSay from './components/CustomersSay';
//import './Styles.css';


const App = () => {
  return (
    <ChakraProvider>
    <Header />
    <Main />
    <CustomersSay />
    <Footer />
    </ChakraProvider>
  )
}


export default App;