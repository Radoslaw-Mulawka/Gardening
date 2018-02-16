import React from 'react';
import GlobalContainer from './GlobalContainer';
import { Link } from 'react-router-dom';

class Main extends React.Component {
	render() {
		let newDate = new Date();
		let currentMonth = typeof (newDate.getMonth() + 1);
		let videoForSeason;
		let videoImage;
		if (currentMonth == 9 || currentMonth == 10 || currentMonth == 11) {
			videoForSeason = '/video/autumn.mp4';
			videoImage = "images/video-image.jpg";
		}
		else {
			videoForSeason = '/video/spring.mp4';
			videoImage = "images/video-image2.jpg";
		}

		return (
			<GlobalContainer>
				<div className="video-wrap">
					<video poster="images/video-image.jpg" playsInline autoPlay muted loop>
						<source src={videoForSeason} type="video/mp4" />
					</video>

					<img src={videoImage} alt="Leaves" className="img-responsive" />
					<span id="motto">
						Kreowanie <span id="green">zielonej</span> estetyki
					</span>
					<div className="weirdShadow"></div>
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

								<Link to={'/calculator'} className="order">Zamów usługę !</Link>
							</div>
						</div>
						<div className="gradient-line"></div>
					</section>



					<section className="testimonials">
						<div className="quote-wrap">
							<span>
								Istnieje kilka sposobów na stworzenie  pięknego <br /> krajobrazu: "Najlepszy z nich to powierzyć tę sprawę specjalistą"
							</span>
							<span className="autor-name"> Karel Čapek </span>
							<div className="weirdShadow"></div>
						</div>

						<div className="our-pros">
							<div>
								<i className="fa fa-calculator"></i><br />
								<span> Darmowa
									<br />
									<span>wycena pracy</span>
								</span>
							</div>


							<div>
								<i className="fa fa-cogs"></i><br />
								<span> Profesjonalny
											<br />
									<span>sprzęt</span>
								</span>
							</div>

							<div>
								<i className="fa fa-star"></i><br />
								<span> Jakakolwiek
												<br />
									<span>złożoność pracy</span>
								</span>
							</div>

							<div>
								<i className="fa fa-rocket"></i><br />
								<span> Szybkość
													<br />
									<span>wykonania zleceń</span>
								</span>
							</div>

							<div>
								<i className="far fa-money-bill-alt"></i><br />
								<span> Wyrozumiałe
														<br />
									<span>ceny</span>
								</span>
							</div>

							<div>
								<i className="fas fa-thumbs-up"></i><br />
								<span> Zniżki
															<br />
									<span>stałym klientom</span>
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
													left: '50%',
													fontSize: '40px',
													color: 'rgb(20, 20, 20)',
													transform: 'translate(-50%,0)'
												}
											}></i>
											<div className="content">
												<p className="description">
													Zleciłem pracę nad renowacją swojego ogrodu przydomowego. Działania przebiegały sprawnie, według wszystkich moich oczekiwań i zaleceń. Liczę na dalszą i owocną współpracę.
																					</p>
												<h3 className="testimonial-title">
													Juliusz Syty
																							{/* <small>Web Developer</small> */}
												</h3>
											</div>
										</div>
										<div className="testimonial">
											<i className="fas fa-quote-left" style={
												{
													position: 'absolute',
													top: '-5px',
													left: '48.5%',
													fontSize: '40px',
													color: 'rgb(20, 20, 20)'
												}
											}></i>
											<div className="content">
												<p className="description">
													Panowie posiadają niezbędną wiedzę i doświadczenie w zakresie swojej działalności. Zadanie wykonali z należytą dokładnością, w umówionym czasie i za rozsądną, wcześniej ustaloną cenę.
											Zamierzam nadal korzystać z usług tej firmy i z czystym sercem mogę ją polecić innym.
																					</p>
												<h3 className="testimonial-title">
													Dagmara Grenik
																							{/* <small>Web Desginer</small> */}
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
}


export default Main;