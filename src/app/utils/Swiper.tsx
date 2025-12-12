import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

export default () => {
  return (
    <Swiper
    modules={[Autoplay]}
      slidesPerView={1}
    //   onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={ {
        delay: 3000,
        disableOnInteraction: true
      } }
      loop={true}
      className='h-[92vh] w-full flex justify-center items-center'
    >
      <SwiperSlide>
        <img className='h-full w-full object-center' src="https://images.unsplash.com/photo-1445359179985-460648949e10?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='h-full w-full object-center' src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='h-full w-full object-center' src="https://plus.unsplash.com/premium_photo-1694475183306-4efa6a24f59c?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='h-full w-full object-center' src="https://plus.unsplash.com/premium_photo-1663089331117-b4176fef4c9a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  alt="" />
      </SwiperSlide>
    </Swiper>
  );
};