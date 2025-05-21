// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Logo from "../../assets/react.svg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

const Slider = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><Slide imges={Logo} title="Sporting events in Dhaka" semeTitle="Tournaments, tickets and marathons in Dhaka" detile="Sports is about bettering ourselves. It's more about self-improvement, beating one's own record every day every moment. It helps us to gain the sportsmanship attitude not just towards game but towards life. While every sport follows different rules, participating in sports activities will help your brain take decisions faster. Participate in the sports events in Dhaka like a football tournament, cricket, basketball, rugby/soccer, etc to helps to build your stamina."></Slide></SwiperSlide>
                <SwiperSlide><Slide imges={Logo} semeTitle="Sporting events in Dhaka" title="Bangladesh International Marathon 2025" detile="International marathon run event at Bangladesh, organised by 'LIMELIGHT SPORTS'. Run for a good health & enjoy the beauty of Bangladesh by joining this mega event. Any male & female person from around the world can participate in this mega event.."></Slide></SwiperSlide>
                <SwiperSlide><Slide imges={Logo} title="Dhaka Summer Half Marathon 2025" semeTitle="Sporting events in Dhaka" detile="Sports is about bettering ourselves. It's more about self-improvement, beating one's own record every day every moment. It helps us to gain the sportsmanship attitude not just towards game but towards life. While every sport follows different rules, participating in sports activities will help your brain take decisions faster. Participate in the sports events in Dhaka like a football tournament, cricket, basketball, rugby/soccer, etc to helps to build your stamina."></Slide></SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider;