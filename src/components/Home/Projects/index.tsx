"use client";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import React from 'react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { useData } from "@/hooks/useData";
import Link from "next/link";
import { Icon } from "@iconify/react";
import InteractiveBackground from "@/components/SharedComponents/InteractiveBackground";

const Projects: React.FC = () => {
    const { projects, projectsHeader } = useData();
    return (
        <section id="projects" className="bg-[#2d3137] overflow-hidden py-14 lg:py-18 xl:py-22 relative">
            <InteractiveBackground />

            <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 space-y-14 relative z-10">
                <div className="projects-content text-center mb-10">
                    <span className='sub-title text-14 bg-prim text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3'>
                        {projectsHeader.subtitle}
                    </span>
                    <h2 className='mt-6 font-chakrapetch text-30 lg:text-45 font-bold text-white leading-tight max-w-3xl mx-auto'>{projectsHeader.title}</h2>
                </div>
                <style dangerouslySetInnerHTML={{
                    __html: `
                    .projects-swiper .swiper-wrapper {
                        transition-timing-function: linear !important;
                    }
                `}} />
            </div>

            <Swiper
                modules={[Autoplay, FreeMode]}
                spaceBetween={50}
                slidesPerView={1.5}
                loop={true}
                centeredSlides={true}
                speed={6000}
                autoplay={{ delay: 0, disableOnInteraction: false }}
                freeMode={true}
                allowTouchMove={true}
                breakpoints={{
                    1400: { slidesPerView: 1.5 },
                    0: { slidesPerView: 1 }
                }}
                className="projects-swiper relative z-10"
            >
                {projects.concat(projects).map((project, index) => (
                    <SwiperSlide key={index}>
                        <div className="project-item flex flex-col sm:flex-row justify-center items-stretch w-full bg-white border border-gray-200 p-8 rounded-2xl gap-8 h-[520px] group hover:shadow-lg transition-all duration-500">

                            {/* Image */}
                            <div className="project-image w-full sm:w-[50%] h-full relative overflow-hidden rounded-xl">
                                <Image
                                    src={project.image}
                                    width={600}
                                    height={600}
                                    alt="project-image"
                                    className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Content */}
                            <div className="project-content w-full sm:w-[50%] flex flex-col justify-between h-full">

                                <div>
                                    <span className="bg-prim/10 border border-prim/20 rounded-lg px-4 py-1 text-prim font-chakrapetch font-medium text-14 mb-4 inline-block">
                                        {project.category}
                                    </span>

                                    <h4 className="font-chakrapetch text-24 lg:text-30 font-bold text-black mb-4 group-hover:text-prim transition-colors duration-500 line-clamp-2">
                                        {project.title}
                                    </h4>

                                    <p className="text-gray-600 font-normal text-16 lg:text-18 leading-relaxed mb-6 group-hover:text-gray-800 transition-colors duration-500 line-clamp-4">
                                        {project.description}
                                    </p>
                                </div>

                                <Link
                                    href={project.link}
                                    className="text-black bg-gray-100 border border-gray-200 h-[50px] text-16 lg:text-sm w-fit rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center tracking-wider group/btn hover:bg-prim hover:text-white transition-all duration-500"
                                >
                                    Learn more
                                    <Icon
                                        icon="tabler:arrow-right"
                                        width="24"
                                        height="24"
                                        className="bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover/btn:-rotate-45 transition duration-300"
                                    />
                                </Link>

                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="container mx-auto px-4 mt-16 lg:mt-24 flex flex-col items-center text-center relative z-10">
                <p className="text-white font-chakrapetch text-18 lg:text-22 mb-10 max-w-2xl">
                    Ready to bring your vision to life? Let&apos;s build something extraordinary together.
                </p>
                <Link
                    href="/contact"
                    className="text-white bg-prim h-[55px] text-18 font-chakrapetch font-semibold flex gap-3 ps-8 pe-3 py-2 justify-center items-center tracking-wider rounded-full hover:bg-white hover:text-prim transition-all duration-500 group"
                >
                    Contact us
                    <Icon
                        icon="tabler:arrow-right"
                        width="28"
                        height="28"
                        className="bg-white text-prim rounded-full h-full w-[42px] p-2 group-hover:-rotate-45 transition duration-300"
                    />
                </Link>
            </div>
        </section >
    );
};

export default Projects;