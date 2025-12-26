"use client";
"use client";
import { useReducer } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useData } from "@/hooks/useData";

const Pricing = () => {
    const { pricingData } = useData();

    interface State {
        planType: string;
        duration: string;
        basicPrice: string;
        standardPrice: string;
        premiumPrice: string;
    }

    interface Action {
        type: "Monthly" | "Yearly";
        payload: {
            duration: string;
            basicPrice: string;
            standardPrice: string;
            premiumPrice: string;
        };
    }

    const initialTabConfig: State = {
        planType: "Monthly",
        duration: "per month", // This could also be in data if needed, but let's assume implementation detail or data
        basicPrice: pricingData.plans.basic.monthlyPrice,
        standardPrice: pricingData.plans.standard.monthlyPrice,
        premiumPrice: pricingData.plans.premium.monthlyPrice,
    };

    function reducer(state: State, action: Action): State {
        switch (action.type) {
            case "Monthly":
            case "Yearly":
                return { ...state, ...action.payload, planType: action.type };
            default:
                return state;
        }
    }

    const [tabConfig, dispatch] = useReducer(reducer, initialTabConfig);

    return (
        <section className=" overflow-hidden py-14 lg:py-18 xl:py-22 bg-prim-light">
            <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 space-y-14">
                <div className="text-center">
                    <span className='sub-title text-14 bg-prim text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3'>
                        {pricingData.header.subtitle}
                    </span>
                    <h2 className='mt-4 font-chakrapetch lg:text-35 font-semibold mb-5'>
                        {pricingData.header.title}
                    </h2>

                    <div className="text-center pb-6">
                        <div className="inline-flex items-center rounded-xl p-2 shadow-lg">
                            <button
                                className={`py-3 px-7 rounded-xl ${tabConfig.planType === "Monthly"
                                    ? "bg-dark text-white"
                                    : "bg-transparent text-black"
                                    }`}
                                onClick={() =>
                                    dispatch({
                                        type: "Monthly",
                                        payload: {
                                            duration: "per month",
                                            basicPrice: pricingData.plans.basic.monthlyPrice,
                                            standardPrice: pricingData.plans.standard.monthlyPrice,
                                            premiumPrice: pricingData.plans.premium.monthlyPrice,
                                        },
                                    })
                                }
                            >
                                {pricingData.toggleText.monthly}
                            </button>
                            <button
                                className={`py-3 px-7 rounded-xl ${tabConfig.planType === "Yearly"
                                    ? "bg-dark text-white"
                                    : "bg-transparent text-black"
                                    }`}
                                onClick={() =>
                                    dispatch({
                                        type: "Yearly",
                                        payload: {
                                            duration: "per year",
                                            basicPrice: pricingData.plans.basic.yearlyPrice,
                                            standardPrice: pricingData.plans.standard.yearlyPrice,
                                            premiumPrice: pricingData.plans.premium.yearlyPrice,
                                        },
                                    })
                                }
                            >
                                {pricingData.toggleText.yearly}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-12">

                    <div className="bg-white pt-8 px-8 rounded-2xl shadow hover:shadow-lg transition">
                        <h3 className="text-22 font-bold text-start text-black font-chakrapetch">{pricingData.plans.basic.title}</h3>
                        <div className="mt-4 flex items-center justify-center">
                            <p className="text-48 py-5 uppercase font-bold font-mona">${tabConfig.basicPrice}</p>
                            <sub className="text-xs">/{tabConfig.duration}</sub>
                        </div>
                        <p className="text-start mt-4 text-muted text-sm mb-8">
                            {pricingData.plans.basic.description}
                        </p>
                        <span className="font-semibold text-xl">Plan Include:</span>
                        <div className="space-y-3 text-muted pt-3">
                            {pricingData.plans.basic.features.map((feature, i) => (
                                <p key={i} className="text-dark flex gap-1">
                                    <Icon icon="material-symbols:check-rounded" width="24" height="24" />
                                    {feature}
                                </p>
                            ))}
                        </div>
                        <Link
                            href="/contact"
                            className='text-white bg-dark h-[50px] text-sm lg:text-16 w-full rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center tracking-wider group my-8'
                        >
                            {pricingData.plans.basic.buttonText}
                            <Icon icon="tabler:arrow-right" width="24" height="24" className='bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 transition duration-300' />
                        </Link>
                    </div>

                    <div className="bg-dark pt-8 px-8 rounded-2xl shadow hover:shadow-lg transition text-white">
                        <h3 className="text-22 font-bold text-start text-white font-chakrapetch">{pricingData.plans.standard.title}</h3>
                        <div className="mt-4 flex items-center justify-center">
                            <p className="text-48 py-5 uppercase font-bold font-mona text-white">${tabConfig.standardPrice}</p>
                            <sub className="text-xs">/{tabConfig.duration}</sub>
                        </div>
                        <p className="text-start mt-4 text-muted text-sm mb-8">
                            {pricingData.plans.standard.description}
                        </p>
                        <span className="font-semibold text-xl">Plan Include:</span>
                        <div className="space-y-3 text-muted pt-3">
                            {pricingData.plans.standard.features.map((feature, i) => (
                                <p key={i} className="text-white flex gap-1">
                                    <Icon icon="material-symbols:check-rounded" width="24" height="24" />
                                    {feature}
                                </p>
                            ))}
                        </div>
                        <Link
                            href="/contact"
                            className='text-black bg-white h-[50px] text-sm lg:text-16 w-full rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center tracking-wider group my-8'
                        >
                            {pricingData.plans.standard.buttonText}
                            <Icon icon="tabler:arrow-right" width="24" height="24" className='bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 transition duration-300' />
                        </Link>
                    </div>

                    <div className="bg-white pt-8 px-8 rounded-2xl shadow hover:shadow-lg transition">
                        <h3 className="text-22 font-bold text-start text-black font-chakrapetch">{pricingData.plans.premium.title}</h3>
                        <div className="mt-4 flex items-center justify-center">
                            <p className="text-48 py-5 uppercase font-bold font-mona">${tabConfig.premiumPrice}</p>
                            <sub className="text-xs">/{tabConfig.duration}</sub>
                        </div>
                        <p className="text-start mt-4 text-muted text-sm mb-8">
                            {pricingData.plans.premium.description}
                        </p>
                        <span className="font-semibold text-xl">Plan Include:</span>
                        <div className="space-y-3 text-muted pt-3">
                            {pricingData.plans.premium.features.map((feature, i) => (
                                <p key={i} className="text-dark flex gap-1">
                                    <Icon icon="material-symbols:check-rounded" width="24" height="24" />
                                    {feature}
                                </p>
                            ))}
                        </div>
                        <Link
                            href="/contact"
                            className='text-white bg-dark h-[50px] text-sm lg:text-16 w-full rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center tracking-wider group my-8'
                        >
                            {pricingData.plans.premium.buttonText}
                            <Icon icon="tabler:arrow-right" width="24" height="24" className='bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 transition duration-300' />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
