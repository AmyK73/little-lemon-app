import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Main from './components/Main';
import CustomersSay from './components/CustomersSay';
import AboutUs from './components/AboutUs';
import BookingPage from './Pages/BookingPage';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Api from './components/Api';

 export default function App() {
     return (
       <BrowserRouter>
         <Routes>
           <Route path="/" element={<Home />}>
            <Route index element={<Main />} />
            <Route path="menu" element={<Menu />} />
            <Route path="customerssay" element={<CustomersSay />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="bookingpage" element={<BookingPage />} />
            <Route path="footer" element={<Footer />} />
           </Route>
         </Routes>
       </BrowserRouter>
     );
   }


<Api />




const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(<App/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
