/* eslint-disable @next/next/no-img-element */
import React from "react";

const StoryContent = () => {
    return (
        <>
            <main class="mt-32 flex flex-col xl:flex-row">
                <div class="mx-24 h-full">
                    <img
                        class="object-cover w-full frame-img"
                        src="/Frame3.png"
                        alt="Robot Group"
                    />
                </div>

                <div class="w-full xl:w-1/2  h-screen flex  justify-center">
                    <div>
                        <h1 class="heading1 my-5 ">
                            The Story of Vincent’s <br />
                            Sphere
                        </h1>
                        <p class="mt-5 paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum, illo inventore veritatis et quasi architecto
                            beatae vitae dicta sunt explicabo.
                        </p>
                        <p class="mt-4 paragraph">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                            illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                            odit aut fugit, sit amet, consectetur, adipisci velit, sed quia non
                            numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
                            quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                            exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                            commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea
                            voluptate velit esse quam illo inventore veritatis et quasi architecto
                            beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia nihil
                            molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
                            nulla pariatur?
                        </p>

                        <button class=" mt-8 inline-block bg-black px-4 py-2 text-white">
                            Learn More
                        </button>
                    </div>
                </div>
            </main>
            <h3 className="text-4xl text-center font-bold under-line text-gray-600">FEATURED</h3>
        </>
    );
};

export default StoryContent;
