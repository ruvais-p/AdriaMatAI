"use client";

import { useData } from "@/hooks/useData";
import { Icon } from "@iconify/react";

const AIServices: React.FC = () => {
    const { aiServicesData } = useData();

    if (!aiServicesData) return null;

    return (
        <section id="ai-services" className="bg-light overflow-hidden py-14 lg:py-18 xl:py-22 bg-prim-light">

            <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="sub-title text-14 bg-prim text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3">
                        {aiServicesData.header.subtitle}
                    </span>
                    <h2 className="mt-6 font-chakrapetch text-30 lg:text-45 font-bold text-black leading-tight max-w-3xl mx-auto">
                        {aiServicesData.header.title}
                    </h2>
                    <p className="mt-6 text-gray-600 text-18 max-w-2xl mx-auto">
                        {aiServicesData.header.description}
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {aiServicesData.services.map((service, index) => (
                        <div
                            key={index}
                            className="ai-service-card group bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-prim/30 flex flex-col items-start gap-6 relative overflow-hidden"
                        >

                            {/* Card Glow Effect */}
                            <div className="absolute -inset-2 bg-prim/5 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="icon-box relative z-10 w-16 h-16 rounded-xl bg-prim/5 flex items-center justify-center border border-prim/10 group-hover:bg-prim group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                <Icon
                                    icon={service.icon}
                                    width="36"
                                    height="36"
                                    className="text-prim group-hover:text-white transition-colors duration-500"
                                />
                            </div>

                            <div className="content relative z-10">
                                <h3 className="text-22 lg:text-24 font-chakrapetch font-bold text-black mb-4 group-hover:text-prim transition-colors duration-500">
                                    {service.title}
                                </h3>

                                <p className="text-gray-600 text-16 lg:text-17 leading-relaxed group-hover:text-gray-800 transition-colors duration-500">
                                    {service.description}
                                </p>
                            </div>

                            {/* Decorative Corner Line */}
                            <div className="absolute bottom-0 right-0 w-16 h-16 border-r-4 border-b-4 border-transparent group-hover:border-prim/20 rounded-br-2xl transition-all duration-500"></div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AIServices;
