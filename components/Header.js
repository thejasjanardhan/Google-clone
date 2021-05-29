import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOption from "./HeaderOption";

function Header() {
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
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={40}
          width={120}
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />
        <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none"
            type="text"
            defaultValue={router.query.term}
          />
          <XIcon
            className="h-7 sm:mr3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => {
              searchInputRef.current.value = "";
            }}
          />

          <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon
            onClick={search}
            className=" h-6 hidden sm:inline-flex text-blue-500"
          />
          <button hidden type="submit" onClick={search}>
            search
          </button>
        </form>
        <Avatar
          className="ml-auto"
          url="https://scontent.fblr1-4.fna.fbcdn.net/v/t1.6435-9/105043345_2763358647226799_6039661813691211378_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=e3f864&_nc_ohc=fam2i8uvwg8AX_tYAb6&_nc_ht=scontent.fblr1-4.fna&oh=fbf76c4d55076cb15f351bcd7532f7f6&oe=60D606EA"
        />
      </div>
      {/* HeaderOption */}
      <HeaderOption />
    </header>
  );
}

export default Header;
