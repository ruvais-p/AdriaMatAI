"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useData } from "@/hooks/useData";

interface TeamProps {
    limit?: number;
}

const AdriaTeam: React.FC<TeamProps> = ({ limit }) => {
    const { adriaTeam } = useData();
    const displayedTeam = limit ? adriaTeam.slice(0, limit) : adriaTeam;

    return (
        <section className="bg-light overflow-hidden py-14 lg:py-18 xl:py-22 bg-prim-light">
            <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 space-y-14">

                {/* Heading */}
                <div className="team-content gap-2 text-center">
                    <span className="sub-title text-14 bg-prim text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3">
                        Meet Our Team
                    </span>
                    <h2 className="w-full lg:w-3/4 mx-auto mt-4 font-chakrapetch lg:text-35 font-semibold">
                        Meet Our Team Success Stories Fuel our Innovation.
                    </h2>
                </div>

                {/* Team Grid */}
                <div className="team-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {displayedTeam.map((member) => (
                        <div key={member.id} className="team-item group">

                            {/* Image Card */}
                            <div className="team-image relative aspect-[3/4] bg-white rounded-xl overflow-hidden">

                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 1024px) 100vw, 25vw"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                    <Link href="https://www.facebook.com/" target="_blank">
                                        <Icon
                                            icon="gg:facebook"
                                            width="30"
                                            height="30"
                                            className="bg-white text-black p-1 rounded-sm hover:bg-prim hover:text-white transition-colors duration-300"
                                        />
                                    </Link>

                                    <Link href="https://www.twitter.com/" target="_blank">
                                        <Icon
                                            icon="mdi:twitter"
                                            width="30"
                                            height="30"
                                            className="bg-white text-black p-1 rounded-sm hover:bg-prim hover:text-white transition-colors duration-300"
                                        />
                                    </Link>

                                    <Link href="https://www.instagram.com/" target="_blank">
                                        <Icon
                                            icon="ri:instagram-line"
                                            width="30"
                                            height="30"
                                            className="bg-white text-black p-1 rounded-sm hover:bg-prim hover:text-white transition-colors duration-300"
                                        />
                                    </Link>

                                    <Link href="https://www.linkedin.com/" target="_blank">
                                        <Icon
                                            icon="ri:linkedin-fill"
                                            width="30"
                                            height="30"
                                            className="bg-white text-black p-1 rounded-sm hover:bg-prim hover:text-white transition-colors duration-300"
                                        />
                                    </Link>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="team-content flex justify-between items-start gap-2 pt-3">
                                <div>
                                    <h4 className="font-unbounded text-xl leading-tight">
                                        {member.name}
                                    </h4>
                                    <span className="text-sm text-gray-600">
                                        {member.post}
                                    </span>
                                </div>

                                <Icon
                                    icon="humbleicons:at-symbol"
                                    width="28"
                                    height="28"
                                    className="bg-white p-1 rounded-full shadow-sm"
                                />
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AdriaTeam;
