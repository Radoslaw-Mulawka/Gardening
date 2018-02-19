import React from 'react';
import GlobalContainer from './GlobalContainer';


const Footer = (props)=>{
 return(
 		<GlobalContainer>
 			<footer>
	            <div className="adress">
	                <strong>Usługi:</strong>
	                <div>
	                  <div>Pięlegnacja zieleni</div>
	                  <div>zakładanie ogrodów</div>
	                  <div>usługi ogrodnicze Wrocław i okolice</div>
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
	                      <a href="http://www.facebook.com"><i className="fab fa-facebook-f" aria-hidden="true"></i></a> 
	                      <a href="http://www.instagram.com"><i className="fab fa-instagram"></i></a>
	                  </div>            
	                </div>           
	            </div>
	        </footer>
 		</GlobalContainer>
 	)
}


export default Footer;