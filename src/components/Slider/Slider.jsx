// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import BannerImg1 from "../../assets/banner/banner1.jpg"
import BannerImg2 from "../../assets/banner/banner2.jpg"
import BannerImg3 from "../../assets/banner/banner3.jpg"

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
                <SwiperSlide><Slide imges={BannerImg1} title="Create Your Favorite Hobbies" detile="I love photography, traveling to new places, reading inspiring books, coding creative projects, and enjoying peaceful music in my free time." button="Create Hobbies" to="/createGroup"></Slide></SwiperSlide>
                
                <SwiperSlide><Slide imges={BannerImg2} title="Create New Group" detile="I love photography, traveling to new places, reading inspiring books, coding creative projects, and enjoying peaceful music in my free time." button="Create Group" to="/createGroup"></Slide></SwiperSlide>

                <SwiperSlide><Slide imges={BannerImg3} title="My Group" detile="My All Group" button="My Group" to="/myGroups"></Slide></SwiperSlide>
                
            </Swiper>
        </>
    );
};

export default Slider;