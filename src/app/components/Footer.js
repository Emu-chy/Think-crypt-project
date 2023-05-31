import React from "react";
import { MdEmail, MdCall } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div class="mx-36 flex flex-col xl:flex-row  ">
                    <div>
                        <h2 class=" mt-24 mb-12 text-xl font-bold text-black leading-7 tracking-widest">
                            VINCENT’S SPHERE
                        </h2>

                        <div class="mt-6">
                            <div class="text-md tracking-widest">
                                <p>Flat A5, 4/11 Humayun Road, Mohammadpur, Dhaka 1207</p>
                                <div className=" mt-4 flex">
                                    <MdCall size={28} />
                                    <p className="mx-2">0182-8398225</p>
                                </div>
                                <div className=" mt-4 flex">
                                    <MdEmail size={28} />
                                    <p className="mx-2">info@thinkcrypt.io</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mx-72 flex justify-between">
                        <div>
                            <p class=" mt-24 mb-12 mb-12 text-xl font-bold text-black leading-7 tracking-widest">
                                Navigation
                            </p>

                            <div class="mt-6 tracking-widest space-y-4 text-sm">
                                <p>Home</p>
                                <p>About</p>
                                <p>About</p>
                            </div>
                        </div>
                        <div className="mx-32">
                            <p class=" mt-24 mb-12 text-xl font-bold text-black leading-7 tracking-widest">
                                Legal
                            </p>

                            <div class="space-y-4 text-sm mt-6 tracking-widest">
                                <p>Privacy Policy</p>
                                <p>Terms of Service</p>
                                <p>Return Policy</p>
                            </div>
                        </div>

                        <div className="mx-16">
                            <p class=" mt-24 mb-12 text-xl font-bold text-black leading-7 tracking-widest">
                                Social
                            </p>

                            <div class="mt-6 flex tracking-widest">
                                <BsFacebook size={28} />
                                <div className="mx-4">
                                    <AiFillInstagram size={28} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-black h-14 mt-12">
                    <p className="text-center text-md text-white mt-4 py-4">
                        Copyright © 2021, Vincent’s Sphere | All rights reserved | Powered by &nbsp;
                        <Link href="https://thinkcrypt.io">
                            <span className="text-fuchsia-600">thinkcrypt.io</span>
                        </Link>
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
