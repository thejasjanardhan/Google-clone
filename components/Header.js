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
          url="https://scontent.fblr1-6.fna.fbcdn.net/v/t1.6435-9/75419086_2557150267847639_4585200359567261696_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=19026a&_nc_ohc=Pn8iUQTRxgAAX9fyI59&_nc_ht=scontent.fblr1-6.fna&oh=8379744b3a262d75aedfe426febff31c&oe=60D93C9E"
        />
      </div>
      {/* HeaderOption */}
      <HeaderOption />
    </header>
  );
}

export default Header;
