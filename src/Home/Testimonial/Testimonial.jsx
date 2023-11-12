import Sectiontitle from "../../Component/Sectiontitle/Sectiontitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import { Pagination, Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('reviews.json')
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section>
      <Sectiontitle subHeading="what our client say" Heading={'Testimonials'} />

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="flex flex-col m-24">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div>
                <h3 className="text-2xl text-orange-400">{review.name}</h3>
                <p className="text-3xl">{review.details}</p>
                <Rating style={{ maxWidth: 250 }} value={review.rating} />
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </section>
  );
};

export default Testimonial;
