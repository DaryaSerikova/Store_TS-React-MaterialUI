import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
// import { HeaderItems2 } from '../Header/HeaderInfo';
import { FooterItemsColumn1, FooterItemsColumn2 } from './FooterInfo';
import { Link } from 'react-router-dom';
import "./Footer.css";



const FooterLinks = ({arr}) => {
  const FooterLinks = arr.map( item => 

    <Link to={item.link} style={{textDecoration: "none"}}>
      <div>
        {item.title}
      </div>
    </Link>

  );

  return FooterLinks;
}



export default function Footer() {
  return (
    <div className='footer-wrapper'>

      <div className='footer-links'>
        <div className='column-links'>
          <FooterLinks arr={FooterItemsColumn1} />
        </div>
        <div className='column-links'>
          <FooterLinks arr={FooterItemsColumn2} />
        </div>
      </div>

      <div className='wrapper-icons'>
        <InstagramIcon />
        <TwitterIcon />
        <FacebookIcon />
      </div>

      <div className='footer-low'>Store&copy;2022</div>
    </div>
  )
}
