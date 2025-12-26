"use client";
"use client";
import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { useData } from '@/hooks/useData';

const Commitment: React.FC = () => {
    const { commitmentData } = useData();
    return (
        <>
            <section className="bg-light overflow-hidden py-14 lg:py-18 xl:py-22 bg-prim-light">
                <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 space-y-8">
                    <div className="commitment-content bg-white p-8 rounded-2xl">
                        <span className='sub-title text-14 bg-prim text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3'>
                            {commitmentData.header.subtitle}
                        </span>
                        <h2 className='mt-4 font-chakrapetch lg:text-35 font-semibold mb-5'>
                            {commitmentData.header.title}
                        </h2>
                        <Link
                            href="/services"
                            className='text-white bg-dark h-[50px] text-sm lg:text-16 w-fit rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center tracking-wider group mt-5 lg:mt-0'
                        >
                            {commitmentData.header.buttonText}
                            <Icon icon="tabler:arrow-right" width="24" height="24" className='bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 transition duration-300' />
                        </Link>
                    </div>

                    <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                        <div className='w-full bg-white p-8 rounded-2xl'>
                            <h2 className='font-chakrapetch lg:text-24 font-semibold mb-5'>
                                {commitmentData.card1.title}
                            </h2>
                            <div className='flex w-full items-center pt-8 pb-10 overflow-hidden'>
                                <Image
                                    src="/images/commitment/user1.jpg"
                                    alt="avatar-image"
                                    width={100}
                                    height={200}
                                    className="object-cover w-[100px] h-[100px] rounded-full scale-105 border-4 border-white shadow-xl translate-x-3"
                                />
                                <Image
                                    src="/images/commitment/user2.jpg"
                                    alt="avatar-image"
                                    width={100}
                                    height={200}
                                    className="object-cover w-[120px] h-[120px] rounded-full scale-110 border-4 border-white shadow-xl z-2"
                                />
                                <Image
                                    src="/images/commitment/user3.jpg"
                                    alt="avatar-image"
                                    width={100}
                                    height={200}
                                    className="object-cover w-[100px] h-[100px] rounded-full border-4 border-white shadow-xl -translate-x-3 z-0"
                                />
                            </div>
                            <div className='flex gap-5'>
                                <span className='text-5xl font-semibold'>{commitmentData.card1.stat}</span>
                                <p className='text-pera-dark'>
                                    {commitmentData.card1.text}
                                </p>
                            </div>
                        </div>

                        <div className='w-full bg-white p-8 rounded-2xl'>
                            <h2 className='font-chakrapetch lg:text-24 font-semibold mb-5'>
                                {commitmentData.card2.title}
                            </h2>
                            <div className='w-full h-[230px]'>
                                <Image src="/images/commitment/strategy-chart.webp" width={350} height={200} alt='strategy-chart-image' className='w-full h-full object-contain mx-auto' />
                            </div>
                        </div>

                        <div className='w-full p-8 rounded-2xl flex justify-between items-start flex-col bg-white'>
                            <div className='mb-8'>
                                <h2 className='font-chakrapetch lg:text-24 font-semibold pb-1'>
                                    {commitmentData.card3.title}
                                </h2>
                                <p className='text-16 text-pera-dark'>
                                    {commitmentData.card3.text}
                                </p>
                            </div>
                            <ul className="flex flex-wrap gap-3 w-full">
                                {commitmentData.card3.tags.map((tag, index) => (
                                    <li key={index} className="border border-white rounded-md overflow-hidden cursor-pointer">
                                        <span className="bg-black/10 backdrop-blur-sm px-3 py-1 inline-block text-sm font-medium">
                                            {tag}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Commitment;