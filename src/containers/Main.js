import React from 'react';
import GlobalContainer from './GlobalContainer';


const Main = (props) => {
	return (
		<GlobalContainer>
			<div className="video-wrap">
				<video poster="images/video-image.jpg" playsInline autoPlay muted loop>
					<source src="/video/videoplayback.mp4" type="video/mp4" />
				</video>
				<img src="images/video-image.jpg" alt="Leaves" className="img-responsive" />
				<span id="motto">
					Kreowanie <span id="green">zielonej</span> estetyki
	            </span>
			</div>


			<main>
				<section className="mission">
					<h3>Projektowanie krajobrazu <br /> przez Greenpolis
	               		<div></div>
					</h3>
					<div className="mission-content-wrap">
						<div className="mission__desc">
							<p>Tylko dzięki Państwa zaufaniu mamy możliwość realizować nasz najwyższy cel - kreowanie zielonej estetyki. Dziękując za Wasz wybór i zaufanie, perfekcyjnie wykonujemy powierzone nam zadanie. Misją firmy jest wprowadzenie najlepszych rozwiązań i tworzenie trendów w ogrodnictwie. Skupiamy się na innowacyjności, kreatywności. Kształcenie i nieustanne doskonalenie się jest naszym atutem. Wizja firmy - stworzenie maksymalnej dostępności w każdej części kraju do kompleksowych usług najwyższej jakości z zastosowaniem nowych technologii, w tym, przyjaznych dla środowiska środków.</p>
						</div>
						<div className="mission__logo-button">
							<img className="img-responsive" src="images/Logo/green-logo-transparent2.png" alt="Logo" />
							<a href="calculator.html" className="order">Zamów usługę !</a>
						</div>
					</div>
					<div className="gradient-line"></div>
				</section>



				<section className="testimonials">
					<div className="quote-wrap">
						<span>
							Istnieje kilka sposobów na stworzenie  pięknego <br /> krajobrazu: "Najlepszy z nich to powierzyć tę sprawę specjalistą"
						</span>
					</div>

					<div className="our-pros">
						<div>
							<i className="fa fa-calculator"></i><br/>
							<span> Bezpłatna
								<br />
								<span>wycena pracy</span>
							</span>
						</div>


						<div>
							<i className="fa fa-cogs"></i><br/>
							<span> Bezpłatna
										<br />
								<span>wycena pracy</span>
							</span>
						</div>

						<div>
							<i className="fa fa-star"></i><br/>
							<span> Bezpłatna
											<br />
								<span>wycena pracy</span>
							</span>
						</div>

						<div>
							<i className="fa fa-rocket"></i><br/>
							<span> Bezpłatna
												<br />
								<span>wycena pracy</span>
							</span>
						</div>

						<div>
							<i className="far fa-money-bill-alt"></i><br/>
							<span> Bezpłatna
													<br />
								<span>wycena pracy</span>
							</span>
						</div>

						<div>
							<i className="fas fa-thumbs-up"></i><br/>
							<span> Bezpłatna
														<br />
								<span>wycena pracy</span>
							</span>
						</div>
					</div>

					<h3>
						Opinie
										<div></div>
					</h3>
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-12">
								<div id="testimonial-slider" className="owl-carousel">
									<div className="testimonial">
									    <i className="fas fa-quote-left" style={
										   {
												position: 'absolute',
												top: '-5px',
												left:'48.5%',
												fontSize: '40px',
												color:'rgb(20, 20, 20)'
										   }
										}></i>
										<div className="content">
											<p className="description">
												Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, repudiandae voluptas. Aliquam, amet aperiam assumenda aut dicta et excepturi exercitationem, maxime minima molestiae necessitatibus nulla odit possimus sunt voluptate voluptatibus!
																				</p>
											<h3 className="testimonial-title">
												williamson
																						<small>Web Developer</small>
											</h3>
										</div>
									</div>
									<div className="testimonial">
											<i className="fas fa-quote-left" style={
											{
													position: 'absolute',
													top: '-5px',
													left:'48.5%',
													fontSize: '40px',
													color:'rgb(20, 20, 20)'
											}
											}></i>
										<div className="content">
											<p className="description">
												Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, repudiandae voluptas. Aliquam, amet aperiam assumenda aut dicta et excepturi exercitationem, maxime minima molestiae necessitatibus nulla odit possimus sunt voluptate voluptatibus!
																				</p>
											<h3 className="testimonial-title">
												kristiana
																						<small>Web Desginer</small>
											</h3>
										</div>
									</div>
									<div className="testimonial">
										<i className="fas fa-quote-left" style={
										   {
												position: 'absolute',
												top: '-5px',
												left:'48.5%',
												fontSize: '40px',
												color:'rgb(20, 20, 20)'
										   }
										}></i>
										<div className="content">
											<p className="description">
												Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, repudiandae voluptas. Aliquam, amet aperiam assumenda aut dicta et excepturi exercitationem, maxime minima molestiae necessitatibus nulla odit possimus sunt voluptate voluptatibus!
																				</p>
											<h3 className="testimonial-title">
												steve thomas
																						<small>Web Desginer</small>
											</h3>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</GlobalContainer>
	)
}


export default Main;