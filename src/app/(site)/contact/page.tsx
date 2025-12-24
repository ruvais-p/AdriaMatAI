"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroSub from "@/components/SharedComponents/HeroSub";
import { Icon } from "@iconify/react";

const Page = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/contact", text: "Contact" },
    ];

    return (
        <>
            <HeroSub title="Contact" description="" breadcrumbLinks={breadcrumbLinks} />
            <div className="bg-light overflow-hidden py-14 lg:py-18 xl:py-22 bg-prim-light">
                <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 space-y-14">
                    <div className="contact-wrapper grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5">
                        <div className="contact-item w-full bg-white shadow-xl space-y-6 p-5 rounded-xl border group hover:bg-prim transition duration-500 h-[230px] flex flex-col justify-between text-center">
                            <div className="solution-icon border border-dark w-[70px] h-[70px] rounded-full mx-auto flex justify-center items-center prim-grident transition-transform duration-500 group-hover:rotate-y-360">
                                <Icon
                                    icon="tdesign:location"
                                    width="30"
                                    height="30"
                                    className="group-hover:text-white transition-colors duration-500"
                                />
                            </div>
                            <div className="contact-info">
                                <h4 className="group-hover:text-white transition-colors duration-500 font-medium font-unbounded text-18 pb-3">
                                    Our Location
                                </h4>
                                <p className="text-pera-dark font-normal group-hover:text-white transition-colors duration-500">
                                    993 Renner Burg, West Rond, MT 94251-030
                                </p>
                            </div>
                        </div>

                        <div className="contact-item w-full bg-white shadow-xl space-y-6 p-5 rounded-xl border group hover:bg-prim transition duration-500 h-[230px] flex flex-col justify-between text-center">
                            <div className="solution-icon border border-dark w-[70px] h-[70px] rounded-full mx-auto flex justify-center items-center prim-grident transition-transform duration-500 group-hover:rotate-y-360">
                                <Icon
                                    icon="ic:outline-email"
                                    width="30"
                                    height="30"
                                    className="group-hover:text-white transition-colors duration-500"
                                />
                            </div>
                            <div className="contact-info">
                                <h4 className="group-hover:text-white transition-colors duration-500 font-medium font-unbounded text-18 pb-3">
                                    Email us
                                </h4>
                                <p className="text-pera-dark font-normal group-hover:text-white transition-colors duration-500">
                                    webexample@gmail.com <br />
                                    webexample@gmail.com
                                </p>
                            </div>
                        </div>

                        <div className="contact-item w-full bg-white shadow-xl space-y-6 p-5 rounded-xl border group hover:bg-prim transition duration-500 h-[230px] flex flex-col justify-between text-center">
                            <div className="solution-icon border border-dark w-[70px] h-[70px] rounded-full mx-auto flex justify-center items-center prim-grident transition-transform duration-500 group-hover:rotate-y-360">
                                <Icon
                                    icon="mi:call"
                                    width="30"
                                    height="30"
                                    className="group-hover:text-white transition-colors duration-500"
                                />
                            </div>
                            <div className="contact-info">
                                <h4 className="group-hover:text-white transition-colors duration-500 font-medium font-unbounded text-18 pb-3">
                                    Call us
                                </h4>
                                <p className="text-pera-dark font-normal group-hover:text-white transition-colors duration-500">
                                    +1 (009) 544-7818 <br />
                                    +1 (009) 880-1810
                                </p>
                            </div>
                        </div>

                        <div className="contact-item w-full bg-white shadow-xl space-y-6 p-5 rounded-xl border group hover:bg-prim transition duration-500 h-[230px] flex flex-col justify-between text-center">
                            <div className="solution-icon border border-dark w-[70px] h-[70px] rounded-full mx-auto flex justify-center items-center prim-grident transition-transform duration-500 group-hover:rotate-y-360">
                                <Icon
                                    icon="hugeicons:chat"
                                    width="30"
                                    height="30"
                                    className="group-hover:text-white transition-colors duration-500"
                                />
                            </div>
                            <div className="contact-info">
                                <h4 className="group-hover:text-white transition-colors duration-500 font-medium font-unbounded text-18 pb-3">
                                    Live chat
                                </h4>
                                <p className="text-pera-dark font-normal group-hover:text-white transition-colors duration-500">
                                    livechat@demo.com <br />
                                    <Link href="contact">
                                        Need Help?
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-light overflow-hidden py-14 lg:py-18 xl:py-22 bg-prim-light">
                <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 space-y-14">
                    <div className="w-full flex flex-col lg:flex-row gap-5">
                        <div className="w-full lg:w-[50%] bg-white rounded-2xl shadow-sm p-8">
                            <h2 className="text-3xl font-semibold text-gray-800 mb-8 font-unbounded">
                                Feel Free to Get in Touch or Visit our Location.
                            </h2>

                            <form className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-600 font-medium mb-2">Full Name *</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full border-b border-gray-300 focus:border-teal-500 focus:outline-none py-2"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-600 font-medium mb-2">Email Address *</label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full border-b border-gray-300 focus:border-teal-500 focus:outline-none py-2"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-600 font-medium mb-2">Phone number *</label>
                                    <input
                                        type="tel"
                                        placeholder="Enter your phone"
                                        className="w-full border-b border-gray-300 focus:border-teal-500 focus:outline-none py-2"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-600 font-medium mb-2">Choose an option</label>
                                    <select
                                        className="w-full border-b border-gray-300 focus:border-teal-500 focus:outline-none py-2 bg-transparent" required
                                    >
                                        <option>Choose an option</option>
                                        <option>Business Strategy</option>
                                        <option>Customer Experience</option>
                                        <option>Sustainability and ESG</option>
                                        <option>Training and Development</option>
                                        <option>IT Support & Maintenance</option>
                                        <option>Marketing Strategy</option>
                                    </select>
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-gray-600 font-medium mb-2">Type message *</label>
                                    <textarea
                                        rows={4}
                                        placeholder="Write your message..."
                                        className="w-full border-b border-gray-300 focus:border-teal-500 focus:outline-none py-2 resize-none" required
                                    ></textarea>
                                </div>
                                <button type="submit"
                                    className='text-white bg-dark h-[50px] text-sm lg:text-16 w-fit rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center tracking-wider group mt-5 lg:mt-0 cursor-pointer'
                                >
                                    Send a Message
                                    <Icon icon="tabler:arrow-right" width="24" height="24" className='bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 transition duration-300' />
                                </button>
                            </form>
                        </div>
                        <div className="w-full lg:w-[50%] h-[350px] lg:h-[500px] rounded-2xl overflow-hidden">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118106.58331659442!2d73.09068433240077!3d22.322240636870198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1760247531911!5m2!1sen!2sin" width="100%" height="100%" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
