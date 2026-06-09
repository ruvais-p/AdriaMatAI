"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useData } from "@/hooks/useData";

const Testimonials: React.FC = () => {
  const { testimonial } = useData();

  return (
    <section className="overflow-hidden py-14 lg:py-18 xl:py-22 bg-prim-light">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          speed={700}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          modules={[Autoplay]}
          className="w-full"
        >
          {testimonial.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="testimonials-item w-full flex justify-center">
                {/* TESTIMONIAL CARD */}
                <div className="w-full max-w-3xl bg-white shadow-lg p-8 md:p-12 rounded-2xl flex flex-col justify-center">
                  <Icon
                    icon="iconoir:quote-solid"
                    width={90}
                    height={90}
                    className="text-dark mb-6"
                  />

                  <p className="text-pera-dark text-16 md:text-22 leading-7 md:leading-8 mb-8">
                    {item.text}
                  </p>

                  <div>
                    <h4 className="text-20 lg:text-24 font-semibold text-dark">
                      {item.name}
                    </h4>
                    <span className="text-pera-light text-16">
                      {item.position}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
