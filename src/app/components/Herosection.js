import React from "react";

const Herosection = () => {
    return (
        <>
            <section className="hero-section">
                <div className="hero-container">
                    <div className="hero-left">
                        <div className="bg-pink-500 p-2 border-y-4 border-black ">
                            <h1 className="font-roboto-condensed  font-bold text-4xl leading-normal tracking-wider text-black">
                                VINCENT’S SPHERE
                            </h1>
                        </div>
                        <p className="bg-pink-500 w-80 tracking-wider mt-4">
                            HANDICAFTED HAPPINESS FOR ALL
                        </p>
                        <button className="bg-black bg-dark mt-4 p-2 text-white">Learn More</button>
                    </div>
                    <div className="hero-right"></div>
                </div>
            </section>
        </>
    );
};

export default Herosection;
