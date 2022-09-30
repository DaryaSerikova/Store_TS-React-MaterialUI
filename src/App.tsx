import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/system';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import All from './pages/All/All';
import TableSize from './pages/TableSize/TableSize';
import AboutBrand from './pages/AboutBrand/AboutBrand';
import Login from './pages/Login/Login';
import "./App.css";

function App() {

  return (
    <>
      <Header />
      <div className='container-sidebar-page main'>
        <Sidebar />
        <Container sx={{m: "2rem 1rem", height: "auto"}}>
          <Routes>
            <Route path="/" element={ <All />}/>
            {/* <Route path="/new" element={ <All />}/> */}
            {/* <Route path="/promotion" element={ <All />}/> */}
            {/* <Route path="/delivery-and-payment" element={ <All />}/> */}
            <Route path="/table-size" element={ <TableSize />}/>
            <Route path="/about-brand" element={ <AboutBrand />}/>
            {/* <Route path="/contacts" element={ <All />}/> */}
            <Route path="/login" element={ <Login />}/>


          </Routes>
        </Container>
      </div>

      <Footer />
    </>
  );
}

export default App;
