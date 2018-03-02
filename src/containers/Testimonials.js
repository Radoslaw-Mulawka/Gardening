import React, {Component} from 'react';
import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

class Testimonials extends Component {

    componentDidMount(){
        $("#testimonial-slider").owlCarousel({
			items:1,
			itemsDesktop:[1000,1],
			itemsDesktopSmall:[979,1],
			itemsTablet:[768,1],
            autoplay:true,
            autoplay:100,
            autoplayTimeout:11000,
            autoplaySpeed:1000,  // скорость прокрутки
            
            rewind: true,
            dots:true
		});
    }

    render(){
        return (
            <div id="testimonial-slider" className="owl-carousel owl-theme">
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
        )
    }
}

export default Testimonials;