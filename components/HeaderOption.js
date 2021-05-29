import HeaderOpt from "./HeaderOpt";
import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";

function HeaderOption() {
  return (
    <div className="flex w-full to-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b ">
      {/* left sec */}
      <div className="flex space-x-6 ">
        <HeaderOpt Icon={SearchIcon} title="All" selected />
        <HeaderOpt Icon={PhotographIcon} title="Images" />
        <HeaderOpt Icon={PlayIcon} title="Videos" />
        <HeaderOpt Icon={NewspaperIcon} title="News" />
        <HeaderOpt Icon={MapIcon} title="Maps" />
        <HeaderOpt Icon={DotsVerticalIcon} title="More" />
      </div>

      {/* right sec */}

      <div className="flex space-x-4">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
}

export default HeaderOption;
