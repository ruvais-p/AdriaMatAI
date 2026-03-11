"use client";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import React from 'react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { useData } from "@/hooks/useData";

const Companies: React.FC = () => {
    const { companies, companiesHeader } = useData();
    return (
        <>
            <section className="bg-light overflow-hidden py-14 lg:py-18 xl:py-22 bg-prim-light">
                <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 space-y-14">
                    <div className="companies-content text-center">
                        <span className='sub-title text-14 bg-prim text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3'>
                            {companiesHeader.subtitle}
                        </span>
                        <h2 className='mt-4 font-chakrapetch lg:text-35 font-semibold text-dark'>{companiesHeader.title}</h2>
                        {companiesHeader.description && (
                            <p className="mt-4 text-dark max-w-2xl mx-auto text-18">
                                {companiesHeader.description}
                            </p>
                        )}
                    </div>
                </div>
                <div className="relative mt-12 overflow-hidden flex flex-col gap-1.5">
                    <style dangerouslySetInnerHTML={{
                        __html: `
                        .companies-swiper {
                            width: 100% !important;
                            max-width: 100% !important;
                        }
                        .companies-swiper .swiper-wrapper {
                            transition-timing-function: linear !important;
                        }
                    `}} />

                    {/* FIRST ROW - NORMAL DIRECTION */}
                    <Swiper
                        modules={[Autoplay, FreeMode]}
                        spaceBetween={20}
                        slidesPerView={3}
                        loop={true}
                        freeMode={true}
                        speed={5000}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        allowTouchMove={true}
                        breakpoints={{
                            480: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 3 },
                        }}
                        className="companies-swiper w-full"
                    >
                        {companies.map((company, index) => (
                            <SwiperSlide key={index}>
                                <div className="companies-item h-[80px] w-full bg-white border border-gray-100 shadow-sm px-6 rounded-xl flex items-center justify-center cursor-pointer hover:shadow-md transition-shadow duration-300">
                                    <h3 className="text-16 lg:text-18 font-medium text-dark text-center">
                                        {company.name}
                                    </h3>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* SECOND ROW - OPPOSITE DIRECTION */}
                    <Swiper
                        modules={[Autoplay, FreeMode]}
                        spaceBetween={20}
                        slidesPerView={3}
                        loop={true}
                        freeMode={true}
                        speed={5000}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            reverseDirection: true,
                        }}
                        allowTouchMove={true}
                        breakpoints={{
                            480: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 3 },
                        }}
                        className="companies-swiper w-full"
                    >
                        {/* Reverse the array to show different items at the start if possible, or just repeat */}
                        {[...companies].reverse().map((company, index) => (
                            <SwiperSlide key={`rev-${index}`}>
                                <div className="companies-item h-[80px] w-full bg-white border border-gray-100 shadow-sm px-6 rounded-xl flex items-center justify-center cursor-pointer hover:shadow-md transition-shadow duration-300">
                                    <h3 className="text-16 lg:text-18 font-medium text-dark text-center">
                                        {company.name}
                                    </h3>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    );
};

export default Companies;