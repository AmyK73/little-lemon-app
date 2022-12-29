import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
      <><>
      <Header>
        <img Icon icon="emojione:lemon" alt='lemon' />
      </Header>
      <Nav>
        Home
        About
        Menu
        Reservations
        Order Online
        Login
      </Nav>
    </><Main></Main><Footer></Footer></>
        );
        };

        export default App;
