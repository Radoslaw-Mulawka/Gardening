import React, {Component} from 'react';
import GlobalContainer from './GlobalContainer';
import MyMapComponent from './MyGoogleMapComponent';

class Contact extends Component{

	render(){
		return(
			<GlobalContainer>
					<div className="contacts">
			            <h3>Kontakty
			                <div></div>
			            </h3>
			            <div className="contact-line">
			                <div className="tel">
			                    <i className="fa fa-mobile" aria-hidden="true"></i>
			                    <div>
			                        <span>
			                            +48 733 836 453 - Michał
			                        </span>
			                        <span>
			                            +48 731 924 406 - Konstanty
			                        </span>
			                    </div>
			                </div> 
			                <div className="locate">
			                    <i className="fa fa-location-arrow" aria-hidden="true"></i>
			                    <div>
			                        <span>
			                            ul.Kopernika 221b
			                        </span>
			                        <span>
			                            Wroclaw, Polska 666-66
			                        </span>
			                    </div>
			                </div> 
			                <div className="email">
			                    <i className="fa fa-envelope" aria-hidden="true"></i>
			                    <span>
			                        uslugi@greenpolis.pl
			                    </span>
			                </div> 
			            </div> 
			        </div> 
			        
			        <div id="map">
			            <MyMapComponent  isMarkerShown 
							containerElement={
								<div style={{height:'100%'}}/>
							}
							mapElement={
								<div style={{height:'100%'}}/>
							}
			            />
			        </div> 

			</GlobalContainer>
		)	
	}
}


export default Contact;