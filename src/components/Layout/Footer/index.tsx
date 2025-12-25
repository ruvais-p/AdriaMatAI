"use client";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useData } from "@/hooks/useData";
import Logo from "../Header/Logo";

const Footer = () => {
    const { footerLinks } = useData();
    return (
        <footer className="pt-10 relative bg-white">
            <div className="container mx-auto px-4 max-w-screen-xl">
                {/* ===== Top Contact Section ===== */}
                <div className="flex flex-col lg:flex-row justify-between lg:items-center border-b pb-10 mb-10 gap-6">
                    {/* Contact Info */}
                    <div className="flex flex-wrap md:flex-nowrap gap-6">
                        <div className="flex items-start text-foottext text-[15px]">
                            <Icon icon="weui:location-outlined" className="w-6 h-6 mr-3 mt-1" />
                            <div className="flex flex-col">
                                <span>FD-3. Procube Complex</span>
                                <span>Vadodara, Gujarat</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-foottext">
                            <Icon icon="majesticons:phone-retro-line" className="w-6 h-6" />
                            <Link href="#" className="text-[15px] hover:text-prim">
                                +1 (123) 123 1234
                            </Link>
                        </div>

                        <div className="flex items-center gap-2 text-foottext">
                            <Icon icon="clarity:email-line" className="w-6 h-6" />
                            <Link href="#" className="text-[15px] hover:text-prim">
                                exampleweb@gmail.com
                            </Link>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4">
                        <Link
                            href="https://www.facebook.com/"
                            className="text-muted hover:text-prim transition-colors"
                        >
                            <Icon icon="fe:facebook" width="28" height="28" />
                        </Link>
                        <Link
                            href="https://x.com/"
                            className="text-muted hover:text-prim transition-colors"
                        >
                            <Icon icon="fa6-brands:square-twitter" width="28" height="28" />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/"
                            className="text-muted hover:text-prim transition-colors"
                        >
                            <Icon icon="fa6-brands:linkedin" width="28" height="28" />
                        </Link>
                        <Link
                            href="https://www.youtube.com/"
                            className="text-muted hover:text-prim transition-colors"
                        >
                            <Icon icon="cbi:youtube-alt" width="30" height="30" />
                        </Link>
                    </div>
                </div>

                {/* ===== Footer Grid ===== */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
                    {/* Left Column - Logo + Awards */}
                    <div className="lg:col-span-3">
                        <div className="text-black pb-5">
                            <Logo />
                        </div>
                        <p className="text-[14px] leading-6 text-foottext">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                            repudiandae animi iusto nisi similique quas saepe nam soluta,
                            natus sit?
                        </p>
                        <div className="flex flex-wrap gap-3 items-center pt-5">
                            <Image
                                src="/images/footer/award-logo-1.webp"
                                alt="award-logo-1"
                                width={70}
                                height={70}
                                className="p-2 cursor-pointer bg-black"
                            />
                            <Image
                                src="/images/footer/award-logo-2.webp"
                                alt="award-logo-2"
                                width={70}
                                height={70}
                                className="bg-black p-2 cursor-pointer"
                            />
                        </div>
                    </div>

                    {/* Middle Columns */}
                    <div className="lg:col-span-2">
                        <h4 className="text-[18px] text-black mb-3 font-chakrapetch font-bold">
                            Services
                        </h4>
                        <ul>
                            {footerLinks.slice(0, 6).map((item, index) => (
                                <li key={index} className="pb-2">
                                    <Link
                                        href="#"
                                        className="text-foottext text-[15px] hover:text-prim transition-colors"
                                    >
                                        {item.link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-[18px] text-black mb-3 font-chakrapetch font-bold">
                            Resources
                        </h4>
                        <ul>
                            {footerLinks.slice(6, 12).map((item, index) => (
                                <li key={index} className="pb-2">
                                    <Link
                                        href="#"
                                        className="text-foottext text-[15px] hover:text-prim transition-colors"
                                    >
                                        {item.link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column - Newsletter */}
                    <div className="lg:col-span-5">
                        <p className="text-[18px] text-black font-bold font-chakrapetch">
                            Sign up for updates
                        </p>
                        <form className="mt-5">
                            <div className="relative">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email address"
                                    className="w-full bg-white placeholder:text-foottext text-black py-3 pl-5 pr-10 border border-border rounded-md"
                                />
                                <Icon
                                    icon="solar:plain-2-linear"
                                    className="text-[20px] text-foottext absolute right-4 top-3.5"
                                />
                            </div>
                        </form>

                        <p className="text-[18px] text-black font-bold font-chakrapetch pt-10 pb-4">
                            Get App
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="#">
                                <Image
                                    src="/images/footer/google.webp"
                                    alt="Google Play"
                                    width={140}
                                    height={45}
                                    className="w-auto h-auto"
                                />
                            </a>
                            <a href="#">
                                <Image
                                    src="/images/footer/app.webp"
                                    alt="App Store"
                                    width={140}
                                    height={45}
                                    className="w-auto h-auto"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                {/* ===== Bottom Section ===== */}
                <div className="flex flex-col sm:flex-row justify-between items-center border-t mt-10 pt-6 text-center sm:text-left">
                    <p className="text-[15px] text-foottext mb-3 sm:mb-0">
                        © 2025. All rights reserved by{" "}
                        <Link
                            href="https://uicode.in/"
                            target="_blank"
                            className="hover:text-prim"
                        >
                            UIcode
                        </Link>
                    </p>
                    <div className="flex gap-4">
                        {footerLinks.slice(12, 15).map((item, index) => (
                            <Link
                                key={index}
                                href="#"
                                className="text-foottext hover:text-prim text-[15px]"
                            >
                                {item.link}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
