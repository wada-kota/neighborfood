// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/mousewheel';

import img1 from './img/restaurant1.jpg';
import img2 from './img/restaurant2.jpg';
import img3 from './img/restaurant3.jpg';
import img4 from './img/restaurant4.jpg';
import img5 from './img/restaurant5.jpg';

const Visual = () => {
  return(
    <div className='visualRapper'>
      <Swiper
      modules={[Autoplay]}
      spaceBetween={0}
      slidesPerView={3}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
      autoplay= {{delay: 0}}
      mousewheel= {false}
      speed={8000}
      loop={true}
    >
      <SwiperSlide><div className='mainVisulaBg'><img className='mainVisual' src={img1} alt="" /></div></SwiperSlide>
      <SwiperSlide><div className='mainVisulaBg'><img className='mainVisual' src={img2} alt="" /></div></SwiperSlide>
      <SwiperSlide><div className='mainVisulaBg'><img className='mainVisual' src={img3} alt="" /></div></SwiperSlide>
      <SwiperSlide><div className='mainVisulaBg'><img className='mainVisual' src={img4} alt="" /></div></SwiperSlide>
      <SwiperSlide><div className='mainVisulaBg'><img className='mainVisual' src={img5} alt="" /></div></SwiperSlide>
      </Swiper>
      
    </div>
  )
}

export default Visual;