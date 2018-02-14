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
										ul.Jagiełły 15
			                        </span>
			                        <span>
										55-100 Trzebnica
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
			        <div>
						<p style={{
							textAlign:'center',
							fontSize:'20px',
							marginBottom:'20px'
						}}> Pracujemy na terenie całego wojewódstwa Dolnośląskiego</p>
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