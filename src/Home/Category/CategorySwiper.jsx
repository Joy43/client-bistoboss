import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'
import Sectiontitle from '../../Component/Sectiontitle/Sectiontitle';
const CategorySwiper = () => {
    return (
        <div>
           <section>
            <Sectiontitle
            subHeading={"From 11.0 am to 11 pm "} Heading={" order now "} >

            </Sectiontitle>
           <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={slide1} alt="" />
        <h3 className='text-4xl justify-center  text-center mr-4 -mt-16 text-white uppercase'>salad</h3></SwiperSlide>

        <SwiperSlide><img src={slide2} alt="" /> <h3 className='text-4xl justify-center  text-center mr-4 -mt-16 text-white uppercase'>Priza</h3></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" /><h3 className='text-4xl justify-center  text-center mr-4 -mt-16 text-white uppercase'>Coffie</h3></SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" /><h3 className='text-4xl justify-center  text-center mr-4 -mt-16 text-white uppercase'>cake</h3></SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" /><h3 className='text-4xl justify-center  text-center mr-4 -mt-16 text-white uppercase'>Salad</h3></SwiperSlide>
     
      </Swiper> 
           </section>
        </div>
    );
};

export default CategorySwiper;