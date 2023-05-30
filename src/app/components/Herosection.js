import Image from "next/image";
import React from "react";

const Herosection = () => {
    return (
        <>
            <section>
                <div className="">
                    <Image
                        src="/Hero.png"
                        alt="banner"
                        width={300}
                        height={300}
                        className="w-full image-height"
                    />
                </div>
            </section>
        </>
    );
};

export default Herosection;
