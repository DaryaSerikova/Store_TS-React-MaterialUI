import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import "./Footer.css";


export default function Footer() {
  return (
    <div className='footer-wrapper'>
      Footer
      <div>
        <InstagramIcon />
        <TwitterIcon />
        <FacebookIcon />
      </div>
      <div className='footer-low'>2022</div>
    </div>
  )
}
