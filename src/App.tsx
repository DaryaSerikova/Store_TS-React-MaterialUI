import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/system';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import All from './pages/All/All';
import AboutBrand from './pages/AboutBrand/AboutBrand';
import "./App.css";

function App() {

  return (
    <>
      <Header />
      <div className='container-sidebar-page'>
        <Sidebar />
        <Container>
          <Routes>
            <Route path="/" element={ <All />}/>
            {/* <Route path="/new" element={ <All />}/> */}
            {/* <Route path="/promotion" element={ <All />}/> */}
            {/* <Route path="/delivery-and-payment" element={ <All />}/> */}
            <Route path="/about-brand" element={ <AboutBrand />}/>
            {/* <Route path="/contscts" element={ <All />}/> */}

          </Routes>
        </Container>
      </div>

      {/* <Footer /> */}
    </>
  );
}

export default App;
