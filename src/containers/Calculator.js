import React from 'react';
import GlobalContainer from './GlobalContainer';
import $ from 'jquery';
import 'rangeslider.js';
import 'rangeslider.js/dist/rangeslider.css';



class Calculator extends React.Component {

componentDidMount(){
	$('input[type="range"]').rangeslider({
        polyfill : false,
        onInit : function() {
            this.output = $('<div class="range-output" />' ).insertAfter( this.$range ).html( this.$element.val() );
        },
        onSlide : function( position, value ) {
            this.output.html( value );
        }
	});
	
	
	$('.separate-service-set-wrap').hide();
	$(".separate-service-set").on('click',function(){
	   $(this).find('.separate-service-set-wrap').slideToggle(500);
	});
}	

 render(){
 return(
 		<GlobalContainer>
			<div className='calc-wrap-for-title'>
			 	<h3>Kalkulator ogrodniczy
	               	<div></div>
	        	</h3>
 			<div className="calculator-wrap">
					 
	            <div className="services-calc-wrap col-md-6  text-center ">
				
	                <div className="separate-service-set col-xs-12">
	                    <div className="service-set-name">
	                        <h2>Realizacja ogrodów</h2>
	                    </div> 
	                    <div className="separate-service-set-wrap">
	                        <div className="col-xs-8 col-xs-offset-2 service-1">
	                            <h4>Glebogryzowanie <br/> <small>Wielkość terenu, m<sup>2</sup></small></h4>
	                            <div className="input-wrap">
	                                    <input type="range" 
	                                                   min="0" 
	                                                   max="5000" 
	                                                   step="10" 
	                                                   defaultValue="100" 
	                                                   data-rangeslider
	                                                   style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: '0'}}
	                                                   />
	                            </div> 
	                        </div>  

	                        <div className="col-xs-8 col-xs-offset-2 service-2">
	                            <h4>Odchwaszczenie działki <br/> <small>Wielkość terenu, m<sup>2</sup></small></h4>
	                            <div className="input-wrap">
	                                    <input type="range" 
	                                                   min="0" 
	                                                   max="1000" 
	                                                   step="10" 
	                                                   defaultValue="0" 
	                                                   data-rangeslider
	                                                   style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: '0'}}
	                                                   />
	                            </div> 
	                        </div> 

	                        <div className="col-xs-8 col-xs-offset-2 service-3">
	                            <h4>Zakładanie trawnika z siewu<br/> <small>Wielkość terenu, m<sup>2</sup></small></h4>
	                            <div className="input-wrap">
	                                    <input type="range" 
	                                                   min="0" 
	                                                   max="5000" 
	                                                   step="10" 
	                                                   defaultValue="0" 
	                                                   data-rangeslider
	                                                   style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: '0'}}
	                                                   />
	                            </div> 
	                        </div> 

	                        <div className="col-xs-8 col-xs-offset-2 service-3">
	                            <h4>Zakładanie trawnika z rolki<br/> <small>Wielkość terenu, m<sup>2</sup></small></h4>
	                            <div className="input-wrap">
	                                    <input type="range" 
	                                                   min="0" 
	                                                   max="5000" 
	                                                   step="10" 
	                                                   defaultValue="0" 
	                                                   data-rangeslider
	                                                   style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: '0'}}
	                                                   />
	                            </div> 
	                        </div> 

	                        <div className="col-xs-8 col-xs-offset-2 service-3">
	                            <h4>Zrywanie darni<br/> <small>Wielkość terenu, mb</small></h4>
	                            <div className="input-wrap">
	                                    <input type="range" 
	                                                   min="0" 
	                                                   max="5000" 
	                                                   step="10" 
	                                                   defaultValue="0" 
	                                                   data-rangeslider
	                                                   style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: '0'}}
	                                                   />
	                            </div> 
	                        </div> 

	                        <div className="col-xs-8 col-xs-offset-2 service-3">
	                            <h4>Niwelacja terenu<br/> <small>Wielkość terenu, m<sup>2</sup></small></h4>
	                            <div className="input-wrap">
	                                    <input type="range" 
	                                                   min="0" 
	                                                   max="5000" 
	                                                   step="10" 
	                                                   defaultValue="0" 
	                                                   data-rangeslider
	                                                   style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: '0'}}
	                                                   />
	                            </div> 
	                        </div> 

	                        <div className="col-xs-8 col-xs-offset-2 service-3">
	                            <h4>Rozwiezienie ziemi taczkami<br/> <small>Wielkość terenu, m<sup>3</sup></small></h4>
	                            <div className="input-wrap">
	                                    <input type="range" 
	                                                   min="0" 
	                                                   max="100" 
	                                                   step="5" 
	                                                   defaultValue="0" 
	                                                   data-rangeslider
	                                                   style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: '0'}}
	                                                   />
	                            </div> 
	                        </div> 


	                        <div className="col-xs-8 col-xs-offset-2 service-3">
	                            <h4>Ułożenie obrzeża z kostki granitowej<br/> <small>Wielkość terenu, mb</small></h4>
	                            <div className="input-wrap">
	                                    <input type="range" 
	                                                   min="0" 
	                                                   max="500" 
	                                                   step="10" 
	                                                   defaultValue="0" 
	                                                   data-rangeslider
	                                                   style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: '0'}}
	                                                   />
	                            </div> 
	                        </div> 


	                        <div className="col-xs-8 col-xs-offset-2 service-3">
	                            <h4>Ułożenie obrzeża Ekobord<br/> <small>Wielkość terenu, mb</small></h4>
	                            <div className="input-wrap">
	                                    <input type="range" 
	                                                   min="0" 
	                                                   max="500" 
	                                                   step="10" 
	                                                   defaultValue="0" 
	                                                   data-rangeslider
	                                                   style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: '0'}}
	                                                   />
	                            </div> 
	                        </div> 


	                        <div className="col-xs-8 col-xs-offset-2 service-3">
	                            <h4>Ułożenie obrzeża Rollborder<br/> <small>Wielkość terenu, mb</small></h4>
	                            <div className="input-wrap">
	                                    <input type="range" 
	                                                   min="0" 
	                                                   max="500" 
	                                                   step="10" 
	                                                   defaultValue="0" 
	                                                   data-rangeslider
	                                                   style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: '0'}}
	                                                   />
	                            </div> 
	                        </div>


	                        <div className="col-xs-8 col-xs-offset-2 service-3">
	                            <h4>Ułożenie obrzeża falistego<br/> <small>Wielkość terenu, mb</small></h4>
	                            <div className="input-wrap">
	                                    <input type="range" 
	                                                   min="0" 
	                                                   max="500" 
	                                                   step="10" 
	                                                   defaultValue="0" 
	                                                   data-rangeslider
	                                                   style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: '0'}}
	                                                   />
	                            </div> 
	                        </div>




	                        <div className="col-xs-8 col-xs-offset-2 service-3">
	                            <h4>Ścieżka ze żwiru<br/> <small>Wielkość terenu, m<sup>2</sup></small></h4>
	                            <div className="input-wrap">
	                                    <input type="range" 
	                                                   min="0" 
	                                                   max="1000" 
	                                                   step="10" 
	                                                   defaultValue="0" 
	                                                   data-rangeslider
	                                                   style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: '0'}}
	                                                   />
	                            </div> 
	                        </div>


	                        <div className="col-xs-8 col-xs-offset-2 service-3">
	                            <h4>Ścieżka z luźno ułożonego kamienia<br/> <small>Wielkość terenu, m<sup>2</sup></small></h4>
	                            <div className="input-wrap">
	                                    <input type="range" 
	                                                   min="0" 
	                                                   max="1000" 
	                                                   step="10" 
	                                                   defaultValue="0" 
	                                                   data-rangeslider
	                                                   style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: '0'}}
	                                                   />
	                            </div> 
	                        </div>



	                        <div className="col-xs-8 col-xs-offset-2 service-3">
	                            <h4>Ścieżka z kostki granitowej<br/> <small>Wielkość terenu, m<sup>2</sup></small></h4>
	                            <div className="input-wrap">
	                                    <input type="range" 
	                                                   min="0" 
	                                                   max="1000" 
	                                                   step="10" 
	                                                   defaultValue="0" 
	                                                   data-rangeslider
	                                                   style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: '0'}}
	                                                   />
	                            </div> 
	                        </div>



	                        <div className="col-xs-8 col-xs-offset-2 service-3">
	                            <h4>Ułożenie agrotkaniny<br/> <small>Wielkość terenu, m<sup>2</sup></small></h4>
	                            <div className="input-wrap">
	                                    <input type="range" 
	                                                   min="0" 
	                                                   max="1000" 
	                                                   step="10" 
	                                                   defaultValue="0" 
	                                                   data-rangeslider
	                                                   style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: '0'}}
	                                                   />
	                            </div> 
	                        </div>



	                        <div className="col-xs-8 col-xs-offset-2 service-3">
	                            <h4>Przekopanie ziemi glebogryzarką<br/> <small>Wielkość terenu, m<sup>2</sup></small></h4>
	                            <div className="input-wrap">
	                                    <input type="range" 
	                                                   min="0" 
	                                                   max="5000" 
	                                                   step="100" 
	                                                   defaultValue="0" 
	                                                   data-rangeslider
	                                                   style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: '0'}}
	                                                   />
	                            </div> 
	                        </div>

	                        <div className="col-xs-8 col-xs-offset-2 service-3">
	                            <h4>Rozsypywanie kory (korowanie)<br/> <small>Wielkość terenu, m<sup>2</sup></small></h4>
	                            <div className="input-wrap">
	                                    <input type="range" 
	                                                   min="0" 
	                                                   max="1000" 
	                                                   step="10" 
	                                                   defaultValue="0" 
	                                                   data-rangeslider
	                                                   style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: '0'}}
	                                                   />
	                            </div> 
	                        </div>


	                        <div className="col-xs-8 col-xs-offset-2 service-3">
	                            <h4>Rozsypywanie grysu<br/> <small>Wielkość terenu, m<sup>2</sup></small></h4>
	                            <div className="input-wrap">
	                                    <input type="range" 
	                                                   min="0" 
	                                                   max="1000" 
	                                                   step="10" 
	                                                   defaultValue="0" 
	                                                   data-rangeslider
	                                                   style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: '0'}}
	                                                   />
	                            </div> 
	                        </div>

	                        <div className="col-xs-8 col-xs-offset-2 service-3">
	                            <h4>Usuwanie starych roślin<br/> <small>ilość szt.</small></h4>
	                            <div className="input-wrap">
	                                    <input type="range" 
	                                                   min="0" 
	                                                   max="100" 
	                                                   step="10" 
	                                                   defaultValue="0" 
	                                                   data-rangeslider
	                                                   style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: '0'}}
	                                                   />
	                            </div> 
	                        </div>
	                        
	                        <div className="col-xs-8 col-xs-offset-2 service-3">
	                            <h4>Ułożenie siatki przeciw kretom<br/> <small>Wielkość terenu, m<sup>2</sup></small></h4>
	                            <div className="input-wrap">
	                                    <input type="range" 
	                                                   min="0" 
	                                                   max="1000" 
	                                                   step="10" 
	                                                   defaultValue="0" 
	                                                   data-rangeslider
	                                                   style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: '0'}}
	                                                   />
	                            </div> 
	                        </div>


	                        <div className="col-xs-8 col-xs-offset-2 service-3">
	                            <h4>Sadzenie cebul<br/> <small>Ilość szt.</small></h4>
	                            <div className="input-wrap">
	                                    <input type="range" 
	                                                   min="0" 
	                                                   max="100" 
	                                                   step="10" 
	                                                   defaultValue="0" 
	                                                   data-rangeslider
	                                                   style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: '0'}}
	                                                   />
	                            </div> 
	                        </div>

	                        <div className="col-xs-8 col-xs-offset-2 service-3">
	                            <h4>Sadzenie bylin<br/> <small>Ilość szt.</small></h4>
	                            <div className="input-wrap">
	                                    <input type="range" 
	                                                   min="0" 
	                                                   max="100" 
	                                                   step="10" 
	                                                   defaultValue="0" 
	                                                   data-rangeslider
	                                                   style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: '0'}}
	                                                   />
	                            </div> 
	                        </div>


	                        <div className="col-xs-8 col-xs-offset-2 service-3">
	                            <h4>Sadzenie pnączy<br/> <small>Ilość szt.</small></h4>
	                            <div className="input-wrap">
	                                    <input type="range" 
	                                                   min="0" 
	                                                   max="100" 
	                                                   step="10" 
	                                                   defaultValue="0" 
	                                                   data-rangeslider
	                                                   style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: '0'}}
	                                                   />
	                            </div> 
	                        </div>

	                        <div className="col-xs-8 col-xs-offset-2 service-3">
	                            <h4>Sadzenie krzewów<br/> <small>Ilość szt.</small></h4>
	                            <div className="input-wrap">
	                                    <input type="range" 
	                                                   min="0" 
	                                                   max="100" 
	                                                   step="10" 
	                                                   defaultValue="0" 
	                                                   data-rangeslider
	                                                   style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: '0'}}
	                                                   />
	                            </div> 
	                        </div>

	                        
	                        <div className="col-xs-8 col-xs-offset-2 service-3">
	                            <h4>Sadzenie drzew<br/> <small>Ilość szt.</small></h4>
	                            <div className="input-wrap">
	                                    <input type="range" 
	                                                   min="0" 
	                                                   max="100" 
	                                                   step="10" 
	                                                   defaultValue="0" 
	                                                   data-rangeslider
	                                                   style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: '0'}}
	                                                   />
	                            </div> 
	                        </div>


	                    </div> 
	                </div> 

	                <div className="separate-service-set col-xs-12">
	                    <div className="service-set-name">
	                        <h2>Pielęgnacja trawnika</h2>
	                    </div> 
	                    <div className="separate-service-set-wrap">
	                        <div className="col-xs-8 col-xs-offset-2 service-1">
	                            <h4>Wertykulacja <br/> <small>Wielkość terenu, m<sup>2</sup></small></h4>
	                            <div className="input-wrap">
	                                    <input type="range" 
	                                                   min="0" 
	                                                   max="5000" 
	                                                   step="10" 
	                                                   defaultValue="100" 
	                                                   data-rangeslider
	                                                   style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: '0'}}
	                                                   />
	                            </div> 
	                        </div>  

	                        
	                        <div className="col-xs-8 col-xs-offset-2 service-1">
	                            <h4>Koszenie kosiarką <br/> <small>Wielkość terenu, m<sup>2</sup></small></h4>
	                            <div className="input-wrap">
	                                    <input type="range" 
	                                                   min="0" 
	                                                   max="5000" 
	                                                   step="10" 
	                                                   defaultValue="100" 
	                                                   data-rangeslider
	                                                   style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: '0'}}
	                                                   />
	                            </div> 
	                        </div>  

	                        <div className="col-xs-8 col-xs-offset-2 service-1">
	                            <h4>Koszenie kosą spalinową <br/> <small>Wielkość terenu, m<sup>2</sup></small></h4>
	                            <div className="input-wrap">
	                                    <input type="range" 
	                                                   min="0" 
	                                                   max="5000" 
	                                                   step="10" 
	                                                   defaultValue="100" 
	                                                   data-rangeslider
	                                                   style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: '0'}}
	                                                   />
	                            </div> 
	                        </div>  

	                        <div className="col-xs-8 col-xs-offset-2 service-1">
	                            <h4>Nawożenie trawnika <br/> <small>Wielkość terenu, m<sup>2</sup></small></h4>
	                            <div className="input-wrap">
	                                    <input type="range" 
	                                                   min="0" 
	                                                   max="5000" 
	                                                   step="10" 
	                                                   defaultValue="100" 
	                                                   data-rangeslider
	                                                   style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: '0'}}
	                                                   />
	                            </div> 
	                        </div>  

	                        <div className="col-xs-8 col-xs-offset-2 service-1">
	                            <h4>Renowacja trawnika <br/> <small>Wielkość terenu, m<sup>2</sup></small></h4>
	                            <div className="input-wrap">
	                                    <input type="range" 
	                                                   min="0" 
	                                                   max="5000" 
	                                                   step="10" 
	                                                   defaultValue="100" 
	                                                   data-rangeslider
	                                                   style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: '0'}}
	                                                   />
	                            </div> 
	                        </div>  

	                        <div className="col-xs-8 col-xs-offset-2 service-1">
	                            <h4>Piaskowanie trawnika <br/> <small>Wielkość terenu, m<sup>2</sup></small></h4>
	                            <div className="input-wrap">
	                                    <input type="range" 
	                                                   min="0" 
	                                                   max="5000" 
	                                                   step="10" 
	                                                   defaultValue="100" 
	                                                   data-rangeslider
	                                                   style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: '0'}}
	                                                   />
	                            </div> 
	                        </div>  

	                    </div> 
	                </div> 



	                <div className="separate-service-set col-xs-12">
	                    <div className="service-set-name">
	                        <h2>Pielęgnacja roślin</h2>
	                    </div> 
	                    <div className="separate-service-set-wrap">
	                        <div className="col-xs-8 col-xs-offset-2 service-1">
	                            <h4>Przycinanie drzew i krzewów ozdobnych <br/> <small>Ilość szt.</small></h4>
	                            <div className="input-wrap">
	                                    <input type="range" 
	                                                   min="0" 
	                                                   max="100" 
	                                                   step="10" 
	                                                   defaultValue="100" 
	                                                   data-rangeslider
	                                                   style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: '0'}}
	                                                   />
	                            </div> 
	                        </div>  

	                        <div className="col-xs-8 col-xs-offset-2 service-1">
	                            <h4>Przycinanie drzew i krzewów owocowych <br/> <small>Ilość szt.</small></h4>
	                            <div className="input-wrap">
	                                    <input type="range" 
	                                                   min="0" 
	                                                   max="100" 
	                                                   step="10" 
	                                                   defaultValue="100" 
	                                                   data-rangeslider
	                                                   style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: '0'}}
	                                                   />
	                            </div> 
	                        </div>  


	                        <div className="col-xs-8 col-xs-offset-2 service-1">
	                            <h4>Przycinanie żywopłotów do 2mb <br/> <small>Wielkość terenu, m<sup>2</sup></small></h4>
	                            <div className="input-wrap">
	                                    <input type="range" 
	                                                   min="0" 
	                                                   max="500" 
	                                                   step="10" 
	                                                   defaultValue="100" 
	                                                   data-rangeslider
	                                                   style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: '0'}}
	                                                   />
	                            </div> 
	                        </div>  


	                        <div className="col-xs-8 col-xs-offset-2 service-1">
	                            <h4>Przycinanie żywopłotów powyżej 2m<br/> <small>Wielkość terenu, m<sup>2</sup></small></h4>
	                            <div className="input-wrap">
	                                    <input type="range" 
	                                                   min="0" 
	                                                   max="500" 
	                                                   step="10" 
	                                                   defaultValue="100" 
	                                                   data-rangeslider
	                                                   style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: '0'}}
	                                                   />
	                            </div> 
	                        </div> 

	                        <div className="col-xs-8 col-xs-offset-2 service-1">
	                            <h4>Formowanie żywopłotów <br/> <small>Ilość szt.</small></h4>
	                            <div className="input-wrap">
	                                    <input type="range" 
	                                                   min="0" 
	                                                   max="100" 
	                                                   step="10" 
	                                                   defaultValue="100" 
	                                                   data-rangeslider
	                                                   style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: '0'}}
	                                                   />
	                            </div> 
	                        </div> 
	                         
	                        <div className="col-xs-8 col-xs-offset-2 service-1">
	                            <h4>Formowanie drzew i krzewów <br/> <small>Ilość szt.</small></h4>
	                            <div className="input-wrap">
	                                    <input type="range" 
	                                                   min="0" 
	                                                   max="100" 
	                                                   step="10" 
	                                                   defaultValue="100" 
	                                                   data-rangeslider
	                                                   style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: '0'}}
	                                                   />
	                            </div> 
	                        </div> 

	                        <div className="col-xs-8 col-xs-offset-2 service-1">
	                            <h4>Nawożenie roślin<br/> <small>Ilość szt.</small></h4>
	                            <div className="input-wrap">
	                                    <input type="range" 
	                                                   min="0" 
	                                                   max="100" 
	                                                   step="10" 
	                                                   defaultValue="100" 
	                                                   data-rangeslider
	                                                   style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: '0'}}
	                                                   />
	                            </div> 
	                        </div> 

	                        <div className="col-xs-8 col-xs-offset-2 service-1">
	                            <h4>Pielenie rabat, klombów, grabienie liści <br/> <small>Wielkość terenu, m<sup>2</sup></small></h4>
	                            <div className="input-wrap">
	                                    <input type="range" 
	                                                   min="0" 
	                                                   max="500" 
	                                                   step="10" 
	                                                   defaultValue="100" 
	                                                   data-rangeslider
	                                                   style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: '0'}}
	                                                  / >
	                            </div> 
	                        </div> 

	                        <div className="col-xs-8 col-xs-offset-2 service-1">
	                            <h4>Wywóz odpadów organicznych  <br/> <small>Ilość szt.</small></h4>
	                            <div className="input-wrap">
	                                    <input type="range" 
	                                                   min="0" 
	                                                   max="100" 
	                                                   step="10" 
	                                                   defaultValue="100" 
	                                                   data-rangeslider
	                                                   style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: '0'}}
	                                                   />
	                            </div> 
	                        </div> 


	                        <div className="col-xs-8 col-xs-offset-2 service-1">
	                            <h4>Podlewanie ogrodu wężem <br/> <small>Wielkość terenu, m<sup>2</sup></small></h4>
	                            <div className="input-wrap">
	                                    <input type="range" 
	                                                   min="0" 
	                                                   max="5000" 
	                                                   step="10" 
	                                                   defaultValue="100" 
	                                                   data-rangeslider
	                                                   style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: '0'}}
	                                                   />
	                            </div> 
	                        </div> 



	                    </div> 
	                </div> 

	                    <div className="clearfix"></div> 
	                    <h2>Cena: <span></span></h2>   
	            </div> 
	            
	            
	            <div className="col-md-6  contact-form">
	                <div className="col-xs-10 col-xs-offset-1" id="panel">
	                    <div className="form-area ">  
	                       <form id="form"  action=""  method="post">
	                            <br style={{clear:'both'}}/>
	                                    <h3 style={{marginBottom:'25px', textAlign:'center'}}>   Contact Form
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
	                                    <div className="form-group">
	                                        <textarea className="form-control" type="textarea" id="message" name="message" placeholder="Wiadomość" maxLength="600" rows="7"></textarea>       
	                                    </div>
	                                    <input type="submit" id="btn" name="submit" className="btn btn-primary pull-right" defaultValue="Wyślij"/>
	                        </form> 
	                        <div className="clearfix"></div> 
	                        <div className="form-message"></div>  
	                    </div>
	                </div>
	            </div> 
	            <div className="gradient-line"></div> 
	        </div> 
			</div>

 		</GlobalContainer>
 	)
}
}

export default Calculator;