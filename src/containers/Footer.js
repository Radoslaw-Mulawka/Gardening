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
	                  <div>Wrocław</div>
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
	                  <div>tel: +48 731 924 406</div>
	                  <div className="footer-email">email: uslugi@greenpolis.pl </div>
	                  <div className="social-media">
	                      <a href="www.facebook.com"><i className="fab fa-facebook-f" aria-hidden="true"></i></a> 
	                      <a href="www.instagram.com"><i className="fab fa-instagram"></i></a>
	                  </div>            
	                </div>           
	            </div>
	        </footer>
 		</GlobalContainer>
 	)
}


export default Footer;