import React, {Component} from 'react';
import GlobalContainer from './GlobalContainer';
import {Link} from 'react-router-dom';

import ReactModal from 'react-modal';


class Navigation extends Component{
	state = {
		currentWidth: window.innerWidth,
		showModal: false
	}
	winWidth = window.innerWidth; 


	handleOpenModal = () => {
		this.setState({ showModal: true });
	  }
	  
	  handleCloseModal = () => {
		this.setState({ showModal: false });
	  }

	render(){
	 return(
	 		<GlobalContainer>
	 			<nav className="top-navigation">
		            <div className="visible-wrap">
		            	<div className="logo-contact-wrap">
			                <div className="nav-logo">
			                    <img className="img-responsive" src="images/Logo/transparent_logo_grey.png" alt="Logo" />
			                </div>
			                <div className="nav-contacts">
								<span>+48 533 88 06 05</span>
								<span>+48 533 88 06 05</span>
								<span>uslugi@greenpolis.pl</span>
			                </div>
			                <div className="nav-button ">Zamów uslugę</div>
		                </div>
		                <div className="nav-items">
		                    <ul>
		                        <li><Link to={ '/'}>Główna</Link></li>
		                        <li><Link to={ '/services'}>Usługi</Link></li>
		                        <li><Link to={ '/gallery'}>Galeria</Link></li>
		                        <li><Link to={ '/calculator'}>Kalkulator ogrodniczy</Link></li>
		                        <li><Link to={ '/contact'}>Kontakt</Link></li>
		                    </ul>
		                </div>
		                <div className="hamburger ">
		                    <span></span>
		                    <span></span>
		                    <span></span>
		                </div> 
		            </div> 
		            <div className="hidden-wrap">
		            	<div className="logo-contact-wrap">
			                <div className="nav-logo">
			                    <img className="img-responsive" src="images/Logo/transparent_logo_grey.png" alt="Logo" />
			                </div>
			                <div className="nav-contacts">
								<span>+48 731 924 406</span>
								<span>+48 733 836 453</span>
								<span>uslugi@greenpolis.pl</span>
			                </div>
			                <div style={{
								'animation-duration': '3s',
								'animation-delay': '2s',
								'animation-iteration-count': 'infinite'
							}} className="nav-button asdasd animated infinite bounce" onClick={this.handleOpenModal}><span className="order-span">Zamów uslugę</span><i className="glyphicon glyphicon-envelope"></i></div>
		                </div>
		                <div className="hamburger">
		                    <span></span>
		                    <span></span>
		                    <span></span>
		                </div> 
		            </div>
		        </nav>


		        <div className="hidden-nav">
		            <ul>
		                <li><Link to={ '/'}>Główna</Link></li>
		                <li><Link to={ '/services'}>Usługi</Link></li>
		                <li><Link to={ '/gallery'}>Galeria</Link></li>
		                <li><Link to={ '/calculator'}>Kalkulator ogrodniczy</Link></li>
		                <li><Link to={ '/contact'}>Kontakt</Link></li>
		            </ul>
		        </div> 
				<ReactModal 
					isOpen={this.state.showModal}
           			contentLabel="Minimal Modal Example"
					className = 'modal-itself'
					style={{
						overlay: {
							backgroundColor: 'rgba(43, 46, 56, 0.9)'
						  }
					}}>
					<button onClick={this.handleCloseModal} className="remodal-close-btn"><i className="fa fa-times"></i></button>
					
							<div className="col-md-10 col-md-offset-1  contact-form">
								<div className="col-xs-12 col-sm-10 col-sm-offset-1" id="panel">
									<div className="form-area ">  
									<form id="form2"  action=""  method="post">
											<br style={{clear:'both'}}/>
													<h3 style={{marginBottom:'25px', textAlign:'center'}}>   Skontaktuj się z nami !
													</h3>
													<div className="form-group">
														<input type="text" className="form-control" id="name" name="name" placeholder="Imię" required/>
													</div>
													<div className="form-group">
														<input type="text" className="form-control" id="email" name="email" placeholder="Email" required/>
													</div>
													<div className="form-group">
														<input type="text" className="form-control" id="address" name="address" placeholder="Adres" required/>
													</div>
													<div className="form-group">
														<input type="text" className="form-control" id="phone" name="phone" placeholder="Numer tel." required/>
													</div>
													<div className="form-group">
														<input type="hidden" className="form-price form-control" id="price" name="price" placeholder="Cena"  defaultValue="" />
													</div>
													<input type="submit" id="btn" name="submit" className="btn btn-primary pull-right" defaultValue="Wyślij"/>
										</form> 
										<div className="clearfix"></div> 
										<div className="form-message"></div>  
									
							</div> 
						</div>
					</div>
					
        		</ReactModal>
	 		</GlobalContainer>
	 	)	
	}
}


export default Navigation;