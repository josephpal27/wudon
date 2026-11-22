import GlareImage from "../ui/GlareImage";
import { wudonHighlightsData } from "@/data/wudonHighlightsData";

const WudonHighlights = () => {
    return (
        <>
            <section className="
                flex justify-between flex-wrap flex-col-reverse lg:flex-row
                mt-[-2rem] lg:mt-[-1rem]
            " id="about">

                {/* left */}
                <div className="w-full lg:w-[47%]">
                    <p className="mt-[2rem] lg:mt-[1.1rem]">
                        Wudon operates one of India's most advanced panel manufacturing facilities, setting new benchmarks in product consistency and structural performance. With a management team rooted in technical expertise and professional excellence, the brand continues to raise the standard for the engineered wood industry.
                    </p>
                    <div className="mt-[1.5rem] lg:mt-[2rem]">
                        <GlareImage
                            src="/images/highlight.avif"
                            alt="Wudon Highlight"
                            className="w-full rounded-md"
                        />
                    </div>
                </div>

                {/* Right */}
                <div className="w-full lg:w-[49%] flex justify-between flex-wrap">
                    {wudonHighlightsData.map((item) => {
                        return (
                            <div key={item.id} className="
                                w-full lg:w-[48%] bg-white shadow-sm rounded-md flex flex-col justify-between relative overflow-hidden
                                mt-[1.3rem] lg:mt-[1.6rem]
                                p-[1rem] sm:p-[1.2rem] lg:p-[1.3rem] xl:p-[1.4rem] 2xl:p-[1.5rem]
                                group
                            ">
                                <div className="
                                    border-b-[1px] border-gray-200 group-hover:border-gray-300 pb-[0.6rem] sm:pb-[0.7rem] lg:pb-[0.8rem] xl:pb-[0.9rem] 2xl:pb-[1rem] relative z-10
                                ">
                                    <span className="
                                        text-[1.1rem] sm:text-[1.2rem] lg:text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem]
                                        font-clash text-[#1d1d1d] group-hover:text-white font-[600] transition duration-300
                                    " dangerouslySetInnerHTML={{ __html: item.title }} />
                                </div>
                                <div className="relative z-10 mt-[0.8rem] lg:mt-0">
                                    <p className="group-hover:text-white transition duration-300">
                                        {item.desc}
                                    </p>
                                </div>
                                <div className="absolute w-full h-full top-0 left-[-100%] group-hover:left-0 transition-left duration-500 bg-[#29396e]"></div>
                            </div>
                        )
                    })}
                </div>

            </section>
        </>
    )
}

export default WudonHighlights
