import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { HiX } from "react-icons/hi";
import { MdMic, MdSearch } from "react-icons/md";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

const Header = () => {
    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;

        if (!term) return;

        router.push(`/search?term=${term}`);
    };
    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
                <Image
                    src={
                        "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                    }
                    width={100}
                    height={0}
                    alt="Logo"
                    className="cursor-pointer"
                    onClick={() => router.push("/")}
                />

                {/* Search Box */}
                <form className="flex flex-grow px-6 py-2 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl">
                    <input
                        type="text"
                        ref={searchInputRef}
                        className="flex-grow w-full focus:outline-none"
                        defaultValue={router.query.term}
                    />
                    <HiX
                        className="h-7 w-7 sm:mr-3 text-gray-500 cursor-pointer hover:bg-gray-100 p-[3px] rounded-full transition duration-100 transform"
                        onClick={() => (searchInputRef.current.value = "")}
                    />
                    <MdMic className="h-7 w-9 mr-3 hidden sm:inline-flex cursor-pointer text-blue-500 border-l-2 pl-2.5 border-gray-300 " />
                    <MdSearch className="h-7 w-9 p-1 mr-3 hidden sm:inline-flex cursor-pointer text-blue-500" />

                    <button hidden type="submit" onClick={search}>
                        Search
                    </button>
                </form>

                <Avatar url={"https://lh3.googleusercontent.com/a/AGNmyxbnW4tee3y49Bo0MYALIxEmSCnW56gfm2RhIL98=s192-c-rg-br100"} className="ml-auto" />
            </div>

            {/* Header Options */}
            <HeaderOptions />
        </header>
    );
};
export default Header;
