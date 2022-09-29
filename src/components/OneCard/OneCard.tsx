import React, { useState, MouseEvent } from 'react';
import { styled } from '@mui/material/styles';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, Typography, Grid } from '@mui/material';

import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import "./OneCard.css";




interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

type OneCardProps = {
  img: string
}

// const OneCard: React.FC<{img: string}> = ({img}) => {
const OneCard = ({img}: OneCardProps ) => {

  const [expanded, setExpanded] = useState(false);
  const [favorite, setFavorite] = useState<boolean>(false);


  const onClickToFavorite = (event: MouseEvent<SVGSVGElement, globalThis.MouseEvent>) => {
    console.log('Favorite');
    let currentFavorite = favorite;

    console.log("currentFavorite, ", currentFavorite);
    setFavorite(!currentFavorite);
  }


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid item xs={11} sm={6} md={4}>    
      <Card sx={{ maxWidth: 345, mt: "0.5rem"}} className = "parent">
        <CardHeader
          sx={{background: "linear-gradient(to top, #00000000, #000000a8)"}}
          action={
            <IconButton aria-label="add to favorites">
              <FavoriteIcon 
                className={`favorite-icon favorite-focus ${favorite ? "selected" : ""}`} 
                onClick={onClickToFavorite}
              />
            </IconButton>
          }
          className = "child header"
        />

        <CardMedia
          component="img"
          // height="194"
          height="330"
          image={img}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {/* This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. */}
            This impressive paella
            {/* Price: 12 */}
          </Typography>
        </CardContent>
        {/* <CardActions disableSpacing> */}
          {/* <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore> */}
        {/* </CardActions> */}
      </Card>
    </Grid>
  );
}

export default OneCard;
