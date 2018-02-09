import React from 'react';
import GlobalContainer from './GlobalContainer';


const Footer = (props)=>{
 return(
 		<GlobalContainer>
 			<footer>
	            <div className="adress">
	                <strong>Adres:</strong>
	                <div>
	                  <div>Polska</div>
	                  <div>Dolnyśląsk</div>
	                  <div>Legnica 59-220 ul.Paderewskiego 1/14</div>
	                </div>
	            </div>
	            <div className="partners">
	                <strong>Partnerzy:</strong>
	                <div className="partners-wrap">
	                    <div className="partner-logo">Logo</div>
	                    <div className="partner-logo">Logo</div>
	                    <div className="partner-logo">Logo</div>
	                    <div className="partner-logo">Logo</div>
	                </div> 
	            </div>
	            <div className="footer-contacts">
	                <strong>Contacts:</strong> 
	                <div>
	                  <div>tel: +48 533 88 06 05</div>
	                  <div className="footer-email">email: radoslaw.mulawka@gmail.com </div>
	                  <div className="social-media">
	                      <a href="www.facebook.com"><i className="fa fa-facebook" aria-hidden="true"></i></a> 
	                      <a href="www.instagram.com"><i className="fa fa-instagram"></i></a>
	                  </div>            
	                </div>           
	            </div>
	        </footer>
 		</GlobalContainer>
 	)
}


export default Footer;