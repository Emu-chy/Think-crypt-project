import React from "react";

const Giftsection = () => {
    return (
        <>
            <div className="mt-24 text-center ">
                <h1 className="text-4xl font-bold text-black leading-10">
                    Handicrafted Scented Candles
                </h1>
                <p className="text-sm font-normal leading-7 text-slate-400 tracking-wider">
                    With over hundreds of fragrances to choose from
                </p>
            </div>

            <div class="mt-4 mx-24 flex flex-col xl:flex-row mb-4">
                <h2 className="banner1 text-center font-extrabold text-white text-2xl py-32">
                    Women’s Day Special <br /> Gift Box
                </h2>

                <div class="xl:w-1/2 flex  justify-center">
                    <h2 className="banner2 text-center font-extrabold text-white text-2xl py-32">
                        Valentine’s Day Special <br /> Gift Box
                    </h2>
                </div>
            </div>

            <div className="mt-24 text-center ">
                <h1 className="text-4xl font-bold text-black leading-10">
                    Can’t Decide which one to get?
                </h1>
                <p className=" mt-2 text-2xl font-normal leading-7 tracking-wide">
                    Let us help you choose the best products for you <br /> and your loved one.
                </p>
                <button class=" mb-12 text-sm mt-8 inline-block bg-black px-8 py-3 text-white">
                    GET FREE CONSULTATION
                </button>
            </div>
        </>
    );
};

export default Giftsection;
