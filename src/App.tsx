import { Container } from '@mui/system';
import React from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import OneCard from './components/OneCard/OneCard';
import { Grid } from '@mui/material';
import {imagesArray} from "./utils/utils";

function App() {
  const Cards = imagesArray.map(item => <OneCard img={item}/>)
  return (
    <>
      <Header />
      <Container>
        <Search />
        <Grid container 
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
        >
          {Cards}
          {/* <OneCard />
          <OneCard />
          <OneCard />
          <OneCard />
          <OneCard />
          <OneCard />
          <OneCard /> */}
        </Grid>


      </Container>
    </>
  );
}

export default App;
