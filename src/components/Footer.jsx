import React from 'react'
import './Footer.css'
function Footer(){
  const date = new Date();
  return(
    <footer>
      <p>Copyright {date.getFullYear()}</p>
    </footer>
  );

}
export default Footer;