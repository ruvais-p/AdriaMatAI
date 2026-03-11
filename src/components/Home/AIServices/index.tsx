"use client";

import { useData } from "@/hooks/useData";
import { Icon } from "@iconify/react";
import InteractiveBackground from "@/components/SharedComponents/InteractiveBackground";

const AIServices: React.FC = () => {
    const { aiServicesData } = useData();

    if (!aiServicesData) return null;

    return (
        <section id="ai-services" className="bg-[#2d3137] overflow-hidden py-14 lg:py-18 xl:py-22 relative">
            <InteractiveBackground />

            <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="sub-title text-14 bg-prim text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3">
                        {aiServicesData.header.subtitle}
                    </span>
                    <h2 className="mt-6 font-chakrapetch text-30 lg:text-45 font-bold text-white leading-tight max-w-3xl mx-auto">
                        {aiServicesData.header.title}
                    </h2>
                    <p className="mt-6 text-gray-400 text-18 max-w-2xl mx-auto">
                        {aiServicesData.header.description}
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {aiServicesData.services.map((service, index) => (
                        <div
                            key={index}
                            className="ai-service-card group bg-white border border-gray-200 p-8 rounded-2xl hover:shadow-lg transition-all duration-500 hover:border-prim/50 flex flex-col items-start gap-6 relative overflow-hidden"
                        >

                            {/* Card Glow Effect */}
                            <div className="absolute -inset-2 bg-prim/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="icon-box relative z-10 w-16 h-16 rounded-xl bg-prim/10 flex items-center justify-center border border-prim/20 group-hover:bg-prim group-hover:scale-110 transition-all duration-500">
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

                                <p className="text-gray-600 text-16 lg:text-17 leading-relaxed group-hover:text-gray-700 transition-colors duration-500">
                                    {service.description}
                                </p>
                            </div>

                            {/* Decorative Corner Line */}
                            <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-transparent group-hover:border-prim/40 rounded-br-2xl transition-all duration-500"></div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AIServices;
