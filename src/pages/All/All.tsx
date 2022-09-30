import React from 'react';
import Search from '../../components/Search/Search';
import { Grid } from '@mui/material';
import OneCard from '../../components/OneCard/OneCard';
import { imagesArray } from '../../utils/utils';

type Rating = {
  rate: number 
  count: number
}

type Product = {
  category: string
  description: string
  id: 1
  image: string
  price: number
  rating: Rating
  title: string
}


export default function All() {
  const data = fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())


  const Cards = imagesArray.map(item => <OneCard img={item}/>)
  // const Cards = data.map((item : Product) => <OneCard img={item.image} price={item.price}/>)



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
