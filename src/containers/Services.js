import React, { Component } from 'react';
import GlobalContainer from './GlobalContainer';
import { Route, Link } from 'react-router-dom';
import ReactModal from 'react-modal';
import $ from 'jquery';
class Services extends Component {


	componentDidMount(){
		$('.ReactModal__Overlay').on('click',(e)=>{
			console.log(e.target);
			this.setState({
				showModal:false
			})
		})
	}

	state = {
		currentId: null,
		showModal: false
	}


	onClickHandler = (id) => {
		this.setState({
			currentId: id,
			showModal: true
		})
	}

	handleCloseModal = () => {
		this.setState({ showModal: false });
	}




	render() {
		let newModal = null;
		if (this.state.showModal == true && this.state.currentId == 1) {
			newModal = (
				<ReactModal
					isOpen={this.state.showModal}
					contentLabel="Minimal Modal Example"
					className='modal-itself'
					style={{
						overlay: {
							backgroundColor: 'rgba(43, 46, 56, 0.9)'
						}
					}}>
					<button onClick={this.handleCloseModal} className="remodal-close-btn"><i className="fa fa-times"></i></button>
					<div >
						<p className="modal-header">Projektowanie ogrodu i aranżacja</p>
							Wszystkie projekty wykonywane przez dyplomowanego fachowca. 
							Szczegółowy plan realizacji zlecenia : 
							<ul>
								<li>darmowe spotkanie z projektantem.</li>
								<li>koncepcja ogrodu.</li>
								<li>projekt ogrodu.</li>
								<li>kosztorys.</li>
								<li>wykonanie zamówienia.</li>
							</ul>
						<br />
						<form>
							<Link to="/calculator" data-remodal-action="confirm" className="remodal-confirm">Zamów <span>usługę </span> !</Link>
						</form>
					</div>
				</ReactModal>
			)
		}
		else if (this.state.showModal == true && this.state.currentId == 2) {
			newModal = (
				<ReactModal
					isOpen={this.state.showModal}
					contentLabel="Minimal Modal Example"
					className='modal-itself'
					style={{
						overlay: {
							backgroundColor: 'rgba(43, 46, 56, 0.9)'
						}
					}}>
					<button onClick={this.handleCloseModal} className="remodal-close-btn"><i className="fa fa-times"></i></button>
					<div >
						<p className="modal-header">Zakładanie trawnika</p >
							Zakładanie trawnika się składa z kilku etapów: 
							<ol>
							   <li>
								   Trawnik z siewu:
								   <ul>
									 <li>Wybór mieszanki nasion </li>
									 <li>Przygotowanie podłoża (usuwanie istniejącej roślinności, wyrównywanie terenu oraz zastosowanie substancji użyźniających</li>
									 <li>Przekopanie ziemi</li>
									 <li>Niewelacja powierzchni</li>
									 <li>Bronowanie </li>
									 <li>Ostateczne wyrównywanie terenu </li>
									 <li>Wałowanie i wysianie trawy </li>
								   </ul>
								</li>
								<li>Trawnik z rolki:
									<ul>
										<li>Przygotowanie glęby pod trawnik</li>
										<li>Zakup darni</li>
										<li>Zakładanie darni</li>
										<li>Prace końcowe - wałowanie, podlewanie</li>
								   </ul>
								</li>
							</ol>
						<br />
						<form>
							<button style={{
								'animationDuration': '3s',
								'animationDelay': '2s',
								'animationIterationCount': 'infinite'
							}} data-remodal-action="confirm" className="remodal-confirm  " >Zamów <span>usługę </span> !</button>
						</form>
					</div>
				</ReactModal>
			)
		}
		else if (this.state.showModal == true && this.state.currentId == 3) {
			newModal = (
				<ReactModal
					isOpen={this.state.showModal}
					contentLabel="Minimal Modal Example"
					className='modal-itself water-systems'
					style={{
						overlay: {
							backgroundColor: 'rgba(43, 46, 56, 0.9)'
						}
					}}>
					<button onClick={this.handleCloseModal} className="remodal-close-btn"><i className="fa fa-times"></i></button>
					<div >
						<p className="modal-header">Systemy nawadniające </p >
							Oferta automatycznego systemu nawadniania zawiera:
							<ul>
								<li>projekt</li>
								<li>montaż</li>
								<li>serwis</li>
							</ul>
						<br />
						<form>
							<Link to="/calculator" data-remodal-action="confirm" className="remodal-confirm">Zamów <span>usługę </span> !</Link>
						</form>
					</div>
				</ReactModal>
			)
		}
		else if (this.state.showModal == true && this.state.currentId == 4) {
			newModal = (
				<ReactModal
					isOpen={this.state.showModal}
					contentLabel="Minimal Modal Example"
					className='modal-itself'
					style={{
						overlay: {
							backgroundColor: 'rgba(43, 46, 56, 0.9)'
						}
					}}>
					<button onClick={this.handleCloseModal} className="remodal-close-btn"><i className="fa fa-times"></i></button>
					<div >
						<p className="modal-header">Architektura ogrodowa </p >
							<ul>
								<li>altany, domki, pergole, grille ogrodowe</li>
								<li>systemy oświetlenia ogrodowego</li>
								<li>zagospodarowanie balkonów i tarasów</li>
								<li>kojce i budy dla psów</li>
								<li>obrzeża trawnikowe i murki oporowe</li>
								<li>ogrody skalne</li>
								<li>brukarstwo ogrodowe / budowa alejek i ścieżek ogrodowych</li>
								<li>place zabaw dla dzieci</li>
								<li>piaskownice</li>
								<li>gabiony</li>
								<li>obrzeża</li>
								<li>palisady</li>
								<li>kamyczkowanie</li>
								<li>agrowłóknina</li>
								<li>korowanie</li>
							</ul>
						<br />
						<form>
							<Link to="/calculator" data-remodal-action="confirm" className="remodal-confirm">Zamów <span>usługę </span> !</Link>
						</form>
					</div>
				</ReactModal>
			)
		}
		else if (this.state.showModal == true && this.state.currentId == 5) {
			newModal = (
				<ReactModal
					isOpen={this.state.showModal}
					contentLabel="Minimal Modal Example"
					className='modal-itself'
					style={{
						overlay: {
							backgroundColor: 'rgba(43, 46, 56, 0.9)'
						}
					}}>
					<button onClick={this.handleCloseModal} className="remodal-close-btn"><i className="fa fa-times"></i></button>
					<div >
						<p className="modal-header">Sezonowa opieka nad ogrodem: </p >
							<ul>
								<li>przycinanie i formowanie krzewów, drzew i żywopłotów </li>
								<li>koszenie trawników </li>
								<li>regeneracja trawników: odchwaszczanie, nawożenie, wertykulacja, aeracja </li>
								<li>nasadzenia</li>
								<li>usługa glebogryzarką</li>
								<li>oprysk</li>
								<li>utrzymanie w czystości: zbieranie liści, wywóz odpadów</li>
							</ul>
						<br />
						<form>
							<Link to="/calculator" data-remodal-action="confirm" className="remodal-confirm">Zamów <span>usługę </span> !</Link>
						</form>
					</div>
				</ReactModal>
			)
		}
		else if (this.state.showModal == true && this.state.currentId == 6) {
			newModal = (
				<ReactModal
					isOpen={this.state.showModal}
					contentLabel="Minimal Modal Example"
					className='modal-itself'
					style={{
						overlay: {
							backgroundColor: 'rgba(43, 46, 56, 0.9)'
						}
					}}>
					<button onClick={this.handleCloseModal} className="remodal-close-btn"><i className="fa fa-times"></i></button>
					<div >
						<p className="modal-header">Jednorazowe usługi ogrodnicze </p >
							<ul>
								<li>Zakładanie trawnika z siewu </li>
								<li>Zakładanie trawnika z rolki </li>
								<li>Koszenie trawy </li>
								<li>Wertykulacja i aeracja </li>
								<li>Sadzenie i przesadzanie roślin </li>
								<li>Przycinka drzew i krzewów </li>
								<li>Przygotowanie terenu pod budowę </li>
								<li>Wycinanie, podcinanie darni </li>
								<li>Glebogryzowanie </li>
								<li>Oprysk </li>
								<li>Systemy nawadniające </li>
								<li>Piaskownice</li>
								<li>Odchwaszczanie (ręczne i chemiczne) </li>
								<li>Nawożenie roślin</li>
							</ul>
						<br />
						<form>
							<Link to="/calculator" data-remodal-action="confirm" className="remodal-confirm">Zamów <span>usługę </span> !</Link>
						</form>
					</div>
				</ReactModal>
			)
		}



		return (
			<GlobalContainer>
				<div className="services remodal-bg">
					{newModal}
					<h3 id="servicesAnchor">Usługi
	               		<div></div>
					</h3>


					<div className="pair-wrap">
						<div className="first-two">
							<div className="service-item">
								<div className="hover-wrap">
									<div>
										<img src="images/icons/pc-computer-with-monitor.png" alt="watering" />
									</div>
									<span>
										Projektowanie ogrodu i aranżacja
                                </span>
								</div>
								<div className="buttons-wrap">
									<button onClick={() => { this.onClickHandler(1) }}> Opis usługi</button>
									<Link to={'/gallery'} className="toGallery">Zobacz w galerii</Link>
								</div>
							</div>



							<div className="service-item">
								<div className="hover-wrap">
									<div>
										<img src="images/icons/grass-leaves-silhouette.png" alt="watering" />
									</div>
									<span>
										Zakładanie trawników
                                </span>
								</div>
								<div className="buttons-wrap">
									<button onClick={() => { this.onClickHandler(2) }}> Opis usługi</button>
									<Link to={'/gallery'} className="toGallery">Zobacz w galerii</Link>
								</div>
							</div>

						</div>


						<div className="second-two">
							<div className="service-item">
								<div className="hover-wrap">
									<div>
										<img src="images/icons/pipe-losing-water.png" alt="watering" />
									</div>
									<span>
										Systemy nawadniające
                                </span>
								</div>
								<div className="buttons-wrap">
									<button onClick={() => { this.onClickHandler(3) }}> Opis usługi</button>
									<Link to={'/gallery'} className="toGallery">Zobacz w galerii</Link>
								</div>
							</div>



							<div className="service-item">
								<div className="hover-wrap">
									<div>
										<img src="images/icons/pair-of-compasses.png" alt="watering" />
									</div>
									<span>
										Architektura ogrodowa
                                </span>
								</div>
								<div className="buttons-wrap">
									<button onClick={() => { this.onClickHandler(4) }}> Opis usługi</button>
									<Link to={'/gallery'} className="toGallery">Zobacz w galerii</Link>
								</div>
							</div>

						</div>
					</div>

					<div className="pair-wrap2">
						<div className="third-two">

							<div className="service-item">
								<div className="hover-wrap">
									<div>
										<img src="images/icons/watering-a-plant.png" alt="watering" />
									</div>
									<span>
										Sezonowa opieka nad ogrodem
                                </span>
								</div>
								<div className="buttons-wrap">
									<button onClick={() => { this.onClickHandler(5) }}> Opis usługi</button>
									<Link to={'/gallery'} className="toGallery">Zobacz w galerii</Link>
								</div>
							</div>



							<div className="service-item">
								<div className="hover-wrap">
									<div>
										<img src="images/icons/shovel-agriculture-equipment-tool-in-vertical-position.png" alt="watering" />
									</div>
									<span>
										Jednorazowe usługi ogrodnicze
                                </span>
								</div>
								<div className="buttons-wrap">
									<button onClick={() => { this.onClickHandler(6) }}> Opis usługi</button>
									<Link to={'/gallery'} className="toGallery">Zobacz w galerii</Link>
								</div>
							</div>

						</div>

					</div>


					<div className="gradient-line"></div>
				</div>



















			</GlobalContainer>
		)
	}
}


export default Services;