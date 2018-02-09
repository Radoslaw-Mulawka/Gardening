import React from 'react';
import GlobalContainer from './GlobalContainer';
import {Route, Link} from 'react-router-dom';


const Gallery = (props)=>{
 return(
 		<GlobalContainer>
 			<div className="gallery-container col-xs-12 text-center"> 
				<h3>Galeria
					<div></div>
				</h3>       
	            <div id="lightgallery" className="grid">
	                 <iframe src='/inwidget/index.php?inline=2&view=8&toolbar=false&preview=large&adaptive=true' data-inwidget scrolling='no' frameBorder='no' style={{border:'none',overflow:'hidden'}}></iframe> 
	           </div>      
	           <div className="gradient-line"></div>   
	        </div>
 		</GlobalContainer>
 	)
}


export default Gallery;