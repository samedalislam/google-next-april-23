import HeaderOption from "./HeaderOption"
import { CgMoreVerticalAlt } from 'react-icons/cg'
import { BsFillMapFill } from 'react-icons/bs'
import { ImNewspaper } from 'react-icons/im'
import { HiPhotograph } from 'react-icons/hi'
import { BiPlayCircle } from 'react-icons/bi'
import { MdSearch } from 'react-icons/md'

const HeaderOptions = () => {
  return (
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px] pb-4">
        {/* Left */}
        <div className="flex space-x-6">
            <HeaderOption Icon={MdSearch} title="All" selected />
            <HeaderOption Icon={HiPhotograph} title="Images" />
            <HeaderOption Icon={BiPlayCircle} title="Videos" />
            <HeaderOption Icon={ImNewspaper} title="News" />
            <HeaderOption Icon={BsFillMapFill} title="Maps" />
            <HeaderOption Icon={CgMoreVerticalAlt} title="More" />
        </div>

        {/* Right */}
        <div className="flex space-x-4">
            <p className="link">Setting</p>
            <p className="link">Tools</p>
        </div>
    </div>
  )
}
export default HeaderOptions