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
        <div className="testimonials-item w-full flex h-auto lg:h-[550px] gap-5 flex-wrap lg:flex-nowrap">

          {/* LEFT IMAGE */}
          <div className="w-full lg:w-1/2 h-full rounded-2xl overflow-hidden relative">
            <Image
              src="/images/testimonials/testimonial-img.jpg"
              alt="Testimonials"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute right-5 bottom-5 bg-dark text-white h-[150px] w-[200px] p-4 rounded-2xl flex flex-col justify-between">
              <span className="text-5xl font-unbounded">4.9</span>

              <div>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon
                      key={i}
                      icon="material-symbols:star-rounded"
                      width={24}
                      height={24}
                      className="text-yellow-400"
                    />
                  ))}
                </div>
                <p>(50+ Client Reviews)</p>
              </div>
            </div>

            <h4 className="absolute bottom-5 left-5 text-white text-2xl font-semibold">
              Hear from Our Customers
            </h4>
          </div>

          {/* RIGHT SLIDER */}
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            speed={700}
            autoplay={{
              delay: 3000, // ⏸ hold 3 seconds
              disableOnInteraction: false, // keep autoplay after swipe
              pauseOnMouseEnter: false, // keep running even on hover
            }}
            modules={[Autoplay]}
            className="w-full lg:w-1/2 h-full"
          >
            {testimonial.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-white shadow-lg p-8 rounded-2xl h-full flex flex-col justify-center">
                  <Icon
                    icon="iconoir:quote-solid"
                    width={90}
                    height={90}
                    className="text-dark mb-6"
                  />

                  <p className="text-pera-dark text-16 md:text-22 leading-7 md:leading-8 pb-8 border-b-2 border-dashed">
                    {item.text}
                  </p>

                  <div className="flex items-center gap-4 pt-8">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-18 font-semibold">{item.name}</h4>
                      <span className="text-pera-light">{item.position}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
