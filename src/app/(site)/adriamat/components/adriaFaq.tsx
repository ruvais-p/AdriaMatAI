"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HeroSub from "@/components/SharedComponents/HeroSub";
import { Icon } from "@iconify/react";
import { useData } from "@/hooks/useData";

const Page = () => {
    const { faqPageData } = useData();

    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/faq", text: faqPageData.header.breadcrumbLinkText },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <div className="bg-light overflow-hidden py-14 lg:py-18 xl:py-22">
                <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 gap-5">
                    <div className="w-full text-center mb-10">
                        <span className='sub-title text-14 bg-prim text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3'>
                            {faqPageData.commonQuestionsSection.subtitle}
                        </span>
                        <h2 className='mt-4 font-chakrapetch lg:text-35 font-semibold'>{faqPageData.commonQuestionsSection.title}</h2>
                    </div>
                    <div className="space-y-4 lg:w-[70%] lg:mx-auto w-full">
                        {faqPageData.faqSection.items.map((item, index) => (
                            <div
                                key={index}
                                className={`border rounded-lg overflow-hidden transition-all duration-300 ${openIndex === index ? "bg-prim text-white" : "bg-white text-black"}`}
                            >
                                <button
                                    className="w-full flex justify-between items-center px-6 py-6 text-left focus:outline-none cursor-pointer"
                                    onClick={() => toggle(index)}
                                >
                                    <span className="font-medium">{item.question}</span>
                                    <Icon icon={openIndex === index ? "akar-icons:minus" : "akar-icons:plus"} className="text-xl" />
                                </button>
                                {openIndex === index && (
                                    <div className="px-6 py-4 border-t border-teal-500 bg-teal-600/10 text-white/90">
                                        {item.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
