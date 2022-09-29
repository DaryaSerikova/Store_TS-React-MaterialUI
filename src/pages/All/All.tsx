import React from 'react';
import Search from '../../components/Search/Search';
import { Grid } from '@mui/material';
import OneCard from '../../components/OneCard/OneCard';
import { imagesArray } from '../../utils/utils';




export default function All() {
  const Cards = imagesArray.map(item => <OneCard img={item}/>)

  return (
    <>
      <Search />
      <Grid container 
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        {Cards}
      </Grid>
    </>
  )
}
