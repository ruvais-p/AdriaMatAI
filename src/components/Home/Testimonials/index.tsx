"use client";

import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
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
              <div className="testimonials-item w-full flex h-auto lg:h-[550px] gap-5 flex-wrap lg:flex-nowrap">
                {/* LEFT IMAGE & METADATA */}
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                  <div className="w-full h-[300px] lg:h-full rounded-2xl overflow-hidden relative">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                  </div>
                  <div className="px-2">
                    <h4 className="text-20 lg:text-24 font-semibold text-dark">
                      {item.name}
                    </h4>
                    <span className="text-pera-light text-16">
                      {item.position}
                    </span>
                  </div>
                </div>

                {/* RIGHT SLIDER CONTENT (TESTIMONIAL TEXT ONLY) */}
                <div className="w-full lg:w-1/2 bg-white shadow-lg p-8 rounded-2xl h-full flex flex-col justify-center">
                  <Icon
                    icon="iconoir:quote-solid"
                    width={90}
                    height={90}
                    className="text-dark mb-6"
                  />

                  <p className="text-pera-dark text-16 md:text-22 leading-7 md:leading-8">
                    {item.text}
                  </p>
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
