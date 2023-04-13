import Avatar from "@/components/Avatar";
import Footer from "@/components/Footer";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { MdMic, MdSearch } from "react-icons/md";

const Home = () => {
  const router = useRouter()
    const searchInputRef = useRef(null);
    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;

        if(!term) return;
        router.push(`/search?term=${term}`)
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Head>
                <title>Google</title>
            </Head>

            {/* Header */}
            <header className="w-full p-5 flex justify-between text-sm">
                {/* Left */}
                <div className="flex gap-4">
                    <p className="link">About</p>
                    <p className="link">Store</p>
                </div>

                {/* Right */}
                <div className="flex gap-4 items-center">
                    <p className="link">Gmail</p>
                    <p className="link">Images</p>

                    {/* Icon */}
                    <CgMenuGridO className="h-10 w-10 p-2 hover:bg-gray-100 rounded-full cursor-pointer" />

                    {/* Avatar */}
                    <Avatar url={"https://lh3.googleusercontent.com/a/AGNmyxbnW4tee3y49Bo0MYALIxEmSCnW56gfm2RhIL98=s192-c-rg-br100"} />
                </div>
            </header>

            {/* Body */}
            <form className="flex flex-col items-center mt-20 flex-grow w-4/5">
                <Image
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                    width={300}
                    height={100}
                    alt="Brand"
                />

                <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
                    <MdSearch className="h-5 w-5 mr-3 text-gray-500" />
                    <input
                        ref={searchInputRef}
                        type="text"
                        className="focus:outline-none flex-1"
                    />
                    <MdMic className="h-5 w-5" />
                </div>
                <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
                    <button onClick={search} className="btn">
                        Google Search
                    </button>
                    <button className="btn">I'm Feeling Lucky</button>
                </div>
            </form>

            {/* Footer */}
            <Footer />
        </div>
    );
};
export default Home;
