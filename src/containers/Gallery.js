import React, {Component} from 'react';
import GlobalContainer from './GlobalContainer';
import {Route, Link} from 'react-router-dom';
import $ from 'jquery';

class Gallery extends Component{

	componentDidMount(){
		$(function(){
			$('#myIframe').on('load',function(){
				$('.saving').remove();
			})
		})	
	}

	render(){
		return(
			<GlobalContainer>
				<div className="gallery-container col-xs-12 text-center"> 
				   <h3>Galeria
					   <div></div>
				   </h3>       
				   <div id="lightgallery" className="grid">
				   <div class="saving">
						<span>.</span>
						<span>.</span>
						<span>.</span>
					</div>
						<iframe id="myIframe" src='/inwidget/index.php?inline=2&view=8&toolbar=false&preview=large&adaptive=true' data-inwidget scrolling='no' frameBorder='no' style={{border:'none',overflow:'hidden'}}></iframe> 
				  </div>      
				  <div className="gradient-line"></div>   
			   </div>
			</GlobalContainer>
		)
	}
 
}


export default Gallery;