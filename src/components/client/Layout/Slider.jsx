import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Product } from './Product'; 
import '../style.css';  

const SwiperDemo = ({ bestsellers, card, wishlist }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="swiper-container relative"
      style={{ height: '150%', width: '70%', padding: '20px' }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Swiper
        slidesPerView={3}
        direction='horizontal'
        pagination={{ clickable: true }}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        breakpoints={{
          '@0.00': { slidesPerView: 2, spaceBetween: 0 },
          '@0.75': { slidesPerView: 3, spaceBetween: 0 },
          '@1.00': { slidesPerView: 4, spaceBetween: 0 },
          '@1.50': { slidesPerView: 5, spaceBetween: 0 },
          '@2.00': { slidesPerView: 6, spaceBetween: 0 },
          '@2.50': { slidesPerView: 7, spaceBetween: 0 },
          '@3.00': { slidesPerView: 8, spaceBetween: 0 },
          '@3.50': { slidesPerView: 9, spaceBetween: 0 },
          '@4.00': { slidesPerView: 10, spaceBetween: 0 },
          '@4.50': { slidesPerView: 11, spaceBetween: 0 },
          '@5.00': { slidesPerView: 12, spaceBetween: 0 },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {bestsellers.map((prd, idx) => (
          <SwiperSlide key={idx} className="flex justify-center items-center h-[450px]">
            <Product cardData={card} wishlist={wishlist} product={prd} />
          </SwiperSlide>
        ))}
      </Swiper>
      {hover && (
        <>  
          {
            window.innerWidth > 768 && (
              <>
                <div className="swiper-button-next" style={{ display: 'block', backgroundColor: '', color: 'gray' }}></div>
                <div className="swiper-button-prev" style={{ display: 'block', backgroundColor: '', color: 'gray' }}></div>
              </>
            )
          }
        </>
      )}
    </div>
  );
};

export default SwiperDemo;
