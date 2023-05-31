import Image from "next/image";
import Link from "next/link";

import { AiFillHeart } from "react-icons/ai";
import { GiShare } from "react-icons/gi";
import { MdNavigateNext } from "react-icons/md";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Featured = ({ title, description }) => {
    return (
        <>
            <div className="text-center mt-16 ">
                <h1 className="text-4xl font-bold text-black leading-10">{title}</h1>
                <p className="text-sm font-normal leading-7 text-slate-400 tracking-wider">
                    {description}
                </p>
            </div>

            <div className="mx-24 flex">
                <button>
                    <FiChevronLeft size={18} />
                </button>
                <Link href="/Product">
                    <div class="mx-5 max-w-sm border border-gray-200 rounded-lg card ">
                        <div>
                            <Image
                                class="rounded-t-lg w-full"
                                src="/Card-image1.png"
                                alt=""
                                width={200}
                                height={200}
                            />
                        </div>

                        <div class="mx-4 mt-4 ">
                            <h2 class="mb-2 text-sm font-bold tracking-wide text-fuchsia-600 ">
                                STAR WARS SPECIAL
                            </h2>
                            <h2 class="font-bold text-black-700 text-xl tracking-wide ">
                                May the Force be with you
                            </h2>
                            <p className="font-bold text-gray-700 dark:text-gray-400">9 o z</p>
                            <div className="flex mb-4 mt-4 justify-between">
                                <div className="flex">
                                    <AiFillHeart size={18} />
                                    <GiShare className="mx-2" size={18} />
                                </div>
                                <MdNavigateNext className="" size={22} />
                            </div>
                        </div>
                    </div>
                </Link>

                <Link href="/Product">
                    <div class="mx-5 max-w-sm border border-gray-200 rounded-lg card ">
                        <div>
                            <Image
                                class="rounded-t-lg w-full"
                                src="/Card-image2.png"
                                alt=""
                                height={200}
                                width={200}
                            />
                        </div>

                        <div class="mx-4 mt-4 ">
                            <h2 class="mb-2 text-sm font-bold tracking-wide text-fuchsia-600 ">
                                STAR WARS SPECIAL
                            </h2>
                            <h2 class="font-bold text-black-700 text-xl tracking-wide ">
                                May the Force be with you
                            </h2>
                            <p className="font-bold text-gray-700 dark:text-gray-400">9 o z</p>
                            <div className="flex mb-4 mt-4 justify-between">
                                <div className="flex">
                                    <AiFillHeart size={18} />
                                    <GiShare className="mx-2" size={18} />
                                </div>
                                <MdNavigateNext className="" size={22} />
                            </div>
                        </div>
                    </div>
                </Link>

                <Link href="/Product">
                    <div class="mx-5 max-w-sm border border-gray-200 rounded-lg card ">
                        <div>
                            <Image
                                class="rounded-t-lg w-full"
                                src="/Card-image3.png"
                                alt=""
                                height={200}
                                width={200}
                            />
                        </div>

                        <div class="mx-4 mt-4 ">
                            <h2 class="mb-2 text-sm font-bold tracking-wide text-fuchsia-600 ">
                                STAR WARS SPECIAL
                            </h2>
                            <h2 class="font-bold text-black-700 text-xl tracking-wide ">
                                May the Force be with you
                            </h2>
                            <p className="font-bold text-gray-700 dark:text-gray-400">9 o z</p>
                            <div className="flex mb-4 mt-4 justify-between">
                                <div className="flex">
                                    <AiFillHeart size={18} />
                                    <GiShare className="mx-2" size={18} />
                                </div>
                                <MdNavigateNext className="" size={22} />
                            </div>
                        </div>
                    </div>
                </Link>

                <Link href="/Product">
                    <div class="mx-5 max-w-sm border border-gray-200 rounded-lg card ">
                        <div>
                            <Image
                                class="rounded-t-lg w-full"
                                src="/Card-image1.png"
                                alt=""
                                height={200}
                                width={200}
                            />
                        </div>

                        <div class="mx-4 mt-4 ">
                            <h2 class="mb-2 text-sm font-bold tracking-wide text-fuchsia-600 ">
                                STAR WARS SPECIAL
                            </h2>
                            <h2 class="font-bold text-black-700 text-xl tracking-wide ">
                                May the Force be with you
                            </h2>
                            <p className="font-bold text-gray-700 dark:text-gray-400">9 o z</p>
                            <div className="flex mb-4 mt-4 justify-between">
                                <div className="flex">
                                    <AiFillHeart size={18} />
                                    <GiShare className="mx-2" size={18} />
                                </div>
                                <MdNavigateNext className="" size={22} />
                            </div>
                        </div>
                    </div>
                </Link>

                <button>
                    <FiChevronRight size={18} />
                </button>
            </div>
        </>
    );
};

export default Featured;
