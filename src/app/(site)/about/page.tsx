"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroSub from "@/components/SharedComponents/HeroSub";
import { Icon } from "@iconify/react";
import Companies from "@/components/Home/Companies";
import Testimonials from "@/components/Home/Testimonials";
import Team from "@/components/Home/Team";
import { useData } from "@/hooks/useData";

const Page = () => {
    const { aboutData } = useData();

    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/about", text: aboutData.header.title },
    ];

    return (
        <>
            <HeroSub title={aboutData.header.title} description="" breadcrumbLinks={breadcrumbLinks} />

            <div className="bg-light overflow-hidden py-14 lg:py-18 xl:py-22">
                <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 space-y-14">
                    <div className="about-content flex justify-between items-start lg:items-end gap-2 flex-col lg:flex-row">
                        <div>
                            <span className='sub-title text-14 bg-prim text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3'>
                                {aboutData.header.subtitle}
                            </span>
                            <h2 className='w-full lg:w-3/4 mt-4 font-chakrapetch lg:text-35 font-semibold'>
                                {aboutData.header.description}
                            </h2>
                        </div>
                        <Link
                            href="/contact"
                            className='text-white bg-dark h-[50px] text-sm lg:text-16 w-fit rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center tracking-wider group mt-5 lg:mt-0'
                        >
                            {aboutData.header.buttonText}
                            <Icon icon="tabler:arrow-right" width="24" height="24" className='bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 transition duration-300' />
                        </Link>
                    </div>
                    <div className="about-wrapper grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                        {aboutData.aboutItems.map((item, index) => (
                            <div key={index} className="about-item w-full bg-white shadow-xl p-5 space-y-6 rounded-xl border group hover:bg-prim transition duration-500 flex flex-col justify-between">
                                <div className="about-icon border border-dark w-[70px] h-[70px] rounded-full flex justify-center items-center prim-grident transition-transform duration-500 group-hover:rotate-y-360 mb-12">
                                    <Icon
                                        icon={item.icon}
                                        width="40"
                                        height="40"
                                        className="group-hover:text-white transition-colors duration-500"
                                    />
                                </div>

                                <h4 className="group-hover:text-white transition-colors duration-500 font-medium font-unbounded text-18">
                                    {item.title}
                                </h4>

                                <p className="text-pera-dark font-normal group-hover:text-white transition-colors duration-500">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-light overflow-hidden py-14 lg:py-18 xl:py-22 bg-prim-light">
                <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 flex lg:flex-row flex-col items-start gap-5">
                    <div className="content w-full lg:w-[55%]">
                        <span className='sub-title text-14 bg-prim text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3'>
                            {aboutData.getToKnowUs.subtitle}
                        </span>
                        <h2 className='w-full mt-4 font-chakrapetch lg:text-35 font-semibold mb-8'>
                            {aboutData.getToKnowUs.title}
                        </h2>
                        <div className="flex lg:flex-nowrap flex-wrap gap-4">
                            <div className="bg-white p-5 rounded-xl">
                                <h4 className="font-unbounded text-xl pb-3">{aboutData.getToKnowUs.mission.title}</h4>
                                <p className="capitalize pb-5">
                                    {aboutData.getToKnowUs.mission.description}
                                </p>
                                <ul className="space-y-2.5">
                                    {aboutData.getToKnowUs.mission.points.map((point, i) => (
                                        <li key={i} className="flex gap-1">
                                            <Icon icon="weui:arrow-outlined" width="12" height="24" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white p-5 rounded-xl">
                                <h4 className="font-unbounded text-xl pb-3">{aboutData.getToKnowUs.vision.title}</h4>
                                <p className="capitalize pb-5">
                                    {aboutData.getToKnowUs.vision.description}
                                </p>
                                <ul className="space-y-2.5">
                                    {aboutData.getToKnowUs.vision.points.map((point, i) => (
                                        <li key={i} className="flex gap-1">
                                            <Icon icon="weui:arrow-outlined" width="12" height="24" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <Link
                            href="/services"
                            className='text-white bg-dark h-[50px] text-sm lg:text-16 w-full rounded-lg font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center tracking-wider group mt-5'
                        >
                            {aboutData.getToKnowUs.buttonText}
                            <Icon icon="tabler:arrow-right" width="24" height="24" className='bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 transition duration-300' />
                        </Link>
                    </div>
                    <div className="image lg:w-[45%] w-full rounded-lg overflow-hidden">
                        <Image src="/images/about/about-01.jpg" alt="about-image" width={300} height={300} className="w-full h-full" />
                    </div>
                </div>
            </div>

            <Companies />
            <Testimonials />
            <Team limit={4} />
        </>
    );
};

export default Page;
