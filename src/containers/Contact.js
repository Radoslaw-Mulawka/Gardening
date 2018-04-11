import React, {Component} from 'react';
import GlobalContainer from './GlobalContainer';
import MyMapComponent from './MyGoogleMapComponent';
import $ from 'jquery';
class Contact extends Component{


componentDidUpdate(){
		$('#form').on('submit', function(e){
			e.preventDefault();
			var fd = new FormData( this );
			$.ajax({
			  url: 'send.php',
			  type: 'POST',
			  contentType: false, 
			  processData: false, 
			  data: fd,
			  success: function(msg){
				if(msg == 'ok') {
					$('.formButton2').val('Wysłano!'); 
				  } else {
					$(".formButton2").val("Bląd");
					setTimeout(function() {$(".button").val("Wyślij");}, 3000);
				  }
			  }
			});
		 });
}



componentDidMount(){
	$('#form').on('submit', function(e){
		e.preventDefault();
		var fd = new FormData( this );
		$.ajax({
		  url: 'send.php',
		  type: 'POST',
		  contentType: false, 
		  processData: false, 
		  data: fd,
		  success: function(msg){
			if(msg == 'ok') {
				$('.formButton2').val('Wysłano!'); 
				$('.formButton2').css('background-color','green'); 
				setTimeout(function() {
					$(".formButton2").val("Wyślij");
					$(".formButton2").removeAttr('style');
				}, 3000);
			  } else {
				$(".formButton2").val("Bląd");
				$('.formButton2').css('background-color','red'); 
				setTimeout(function() {
					$(".formButton2").val("Wyślij");
					$(".formButton2").removeAttr('style');
				}, 3000);
			  }
		  }
		});
	 });
}	





	render(){
		return(
			<GlobalContainer>
				<div className="">
					<div className="contacts col-md-12">
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
			        <div className="col-md-8 col-md-offset-2  contact-form">
							<div className="form-area ">  
							<form id="form"  action=""  method="post">
									<br style={{clear:'both'}}/>
											<h3 style={{marginBottom:'25px', textAlign:'center'}}>   Skontaktuj się z nami!
											</h3>
											<div className="form-group">
												<input type="text" className="form-control" id="name" name="name" placeholder="Imię" required/>
											</div>
											<div className="form-group">
												<input type="email" className="form-control" id="email" name="email" placeholder="Email" required/>
											</div>
											<div className="form-group">
												<input type="text" className="form-control" id="address" name="address" placeholder="Adres" />
											</div>
											<div className="form-group">
												<input type="number" className="form-control" id="phone" name="phone" placeholder="Numer tel. bez znaka +" required/>
											</div>
											<div className="form-group">
												<input type="hidden" className="form-price form-control" id="price" name="price" placeholder="Cena"  defaultValue="" />
											</div>
											<div className="form-group">
												<textarea className="form-control" type="textarea" id="message" name="message" placeholder="Wiadomość" maxLength="600" rows="7"></textarea>       
											</div>
											<input type="submit" id="btn" name="submit" className="btn formButton2 btn-primary pull-right" defaultValue="Wyślij"/>
								</form> 
								<div className="clearfix"></div> 
								<div className="form-message"></div>  
							</div>
					</div> 
					<div className="row">
						<div id="map" className="col-md-12">
							<MyMapComponent  isMarkerShown 
								containerElement={
									<div style={{height:'100%'}}/>
								}
								mapElement={
									<div style={{height:'100%'}}/>
								}
							/>
						</div> 
					</div>
				</div>	

			</GlobalContainer>
		)	
	}
}


export default Contact;