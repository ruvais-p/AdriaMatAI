"use client";
import { useData } from "@/hooks/useData";
import { notFound } from "next/navigation";
import Image from "next/image";
import HeroSub from "@/components/SharedComponents/HeroSub";
import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

import blog01 from "@/../public/images/blogdetails/blog-1.webp";
import blog02 from "@/../public/images/blogdetails/blog-2.webp";


import { useLanguage } from "@/contexts/LanguageContext";

type Props = {
    params: Promise<{ slug: string }>;
};
const BlogDetails = ({ params }: Props) => {
    const { blogs } = useData();
    const { language } = useLanguage();
    const { slug } = React.use(params);
    const blog = blogs.find((b) => b.slug === slug);

    if (!blog) return notFound();

    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/blog", text: "Blog Details" },
    ];

    return (
        <>
            <HeroSub title={blog.title} description="" breadcrumbLinks={breadcrumbLinks} />

            <section className="py-15">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white p-5 rounded-2xl">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                width={800}
                                height={400}
                                className="w-full h-[400px] object-cover rounded-2xl"
                            />
                            <h4 className="font-unbounded font-medium uppercase text-3xl py-5">{blog.title}</h4>
                            <p className="pb-4 text-pera-dark text-16 leading-6">
                                {blog.detailsParagraph1 || "In today’s competitive landscape, businesses must continuously adapt and innovate to thrive. Unlocking Business Potential means identifying untapped opportunities and leveraging innovative solutions to drive growth, enhance efficiency, and foster lasting success."}
                            </p>
                            <p className="pb-4 text-pera-dark text-16 leading-6">
                                {blog.detailsParagraph2 || "The curve. Whether you’re looking to streamline operations, enhance customer experiences, or explore new market opportunities, our tailored solutions are designed to empower your business to achieve unparalleled success."}
                            </p>

                            <div className="border border-border rounded-lg p-5 bg-dark/20">
                                <Icon icon="tabler:quote" width="60" height="60" className="mb-3" />
                                <h5 className="text-black font-semibold font-chakrapetch leading-8">
                                    {blog.quote || "The true entrepreneur is a doer, not a dreamer. Innovation is the catalyst that transforms ideas into reality."}
                                </h5>
                                <span className="w-full text-end block font-semibold font-unbounded">
                                    - {blog.quoteAuthor || "Kevin Hooks"}
                                </span>
                            </div>
                            <h4 className="font-unbounded py-5">
                                {blog.lessonTitle || "Key Lessons of Business Potential"}
                            </h4>
                            <p>
                                {blog.lessonDescription || "Unlocking your business potential requires more than just vision and ambition—it involves strategic thinking, adaptability, and an unwavering commitment to growth."}
                            </p>
                            <div className="flex gap-3 flex-wrap md:flex-nowrap py-8">
                                <Image src={blog01} alt="blog-image" width={200} height={200} className="w-full rounded-lg h-full" />
                                <Image src={blog02} alt="blog-image" width={200} height={200} className="w-full  rounded-lg h-full" />
                            </div>
                            <p className="pb-4 text-pera-dark text-16 leading-6">
                                {language === "hr"
                                    ? "Naposljetku, učinkovito vodstvo koje nadahnjuje i motivira zaposlenike, kupce i dionike bitno je u usmjeravanju poslovanja prema ostvarenju njegovog punog potencijala."
                                    : "Lastly, effective leadership that inspires and motivates employees, customers, and stakeholders is essential in steering the business toward achieving its full potential."}
                            </p>
                            <ul className="grid grid-cols-2 gap-5">
                                {(blog.lessonsList || [
                                    "Embrace Innovation",
                                    "Scalable Systems",
                                    "Customer-Centric Approach",
                                    "Resilience",
                                    "Effective Leadership",
                                    "Continuous Learning",
                                    "Operational Efficiency"
                                ]).map((lesson, idx) => (
                                    <li key={idx} className="flex items-center gap-2">
                                        <Icon icon="material-symbols:check-rounded" width="24" height="24" className="bg-prim text-white rounded-full p-0.5" />
                                        <span>{lesson}</span>
                                    </li>
                                ))}
                            </ul>
                            <h4 className="font-unbounded pb-5 pt-8">
                                Leave a Comment
                            </h4>
                            <p className="text-pera-light font-light pb-3">
                                Your email address will not be published. Required fields are marked *
                            </p>

                            <form>
                                <textarea placeholder="Enter Your Comments" rows={8} className="border border-border p-5 mb-5 w-full" required>
                                </textarea>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                    <input type="text" placeholder="Enter Name" className="border border-border px-5 h-[45px]" required />
                                    <input type="text" placeholder="Enter Email" className="border border-border px-5 h-[45px]" required />
                                    <input type="text" placeholder="Enter Website" className="border border-border px-5 h-[45px]" required />
                                </div>
                                <div className="space-x-2 py-5">
                                    <input type="checkbox" />
                                    <span>Save my name, email, and website in this browser for the next time I comment.</span>
                                </div>
                                <button
                                    type="submit"
                                    className='text-white bg-dark h-[50px]  text-16 lg:text-sm w-fit rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center tracking-wider group cursor-pointer'
                                >
                                    Post A Comment
                                    <Icon icon="tabler:arrow-right" width="24" height="24" className='bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 transition duration-300' />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogDetails;
