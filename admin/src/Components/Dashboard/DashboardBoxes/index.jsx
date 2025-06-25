import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { TfiGift } from "react-icons/tfi";
import { IoStatsChartSharp } from "react-icons/io5";
import { HiOutlineChartPie } from "react-icons/hi";
import { BsBank } from "react-icons/bs";
import { TbBrandProducthunt } from "react-icons/tb";
import { Pagination } from 'swiper/modules';

const SwiperComponent = () => {
  return (
    <div className="w-full py-3">
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 10 },
          768: { slidesPerView: 3, spaceBetween: 10 },
          1024: { slidesPerView: 4, spaceBetween: 15 },
        }}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {[ 
          {
            icon: <TfiGift className='text-blue-500 text-5xl' />,
            label: 'New Orders',
            value: '1,390',
            chartIcon: <IoStatsChartSharp className='text-blue-500 text-5xl' />,
          },
          {
            icon: <HiOutlineChartPie className='text-green-700 text-5xl' />,
            label: 'Sales',
            value: '57,890',
            chartIcon: <IoStatsChartSharp className='text-green-700 text-5xl' />,
          },
          {
            icon: <BsBank className='text-purple-500 text-5xl' />,
            label: 'Revenue',
            value: '12,390',
            chartIcon: <IoStatsChartSharp className='text-purple-500 text-5xl' />,
          },
          {
            icon: <TbBrandProducthunt className='text-blue-900 text-5xl' />,
            label: 'Total Product',
            value: '1,390',
            chartIcon: <IoStatsChartSharp className='text-blue-900 text-5xl' />,
          },
        ].map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-between items-center gap-4 border rounded-md p-4 bg-white shadow-sm h-full">
              <div className="flex items-center gap-3">
                {item.icon}
                <h2 className="text-sm sm:text-base font-medium">
                  {item.label}
                  <br />
                  <span className="font-bold text-lg">{item.value}</span>
                </h2>
              </div>
              {item.chartIcon}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
