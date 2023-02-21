import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import { ChakraProvider } from '@chakra-ui/react';
import CustomersSay from './components/CustomersSay';
import AboutUs from './components/AboutUs';
import BookingPage from './Pages/BookingPage';
//import './Styles.css';


const App = () => {
  return (
    <ChakraProvider>
    <Header />
    <Main />
    <CustomersSay />
    <AboutUs />
    <Footer />
    <BookingPage/>
    </ChakraProvider>
  )
}


export default App;