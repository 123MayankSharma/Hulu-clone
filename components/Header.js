import Image from 'next/image'
import HeaderIcons from "./HeaderIcons.js"
import { BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon } from '@heroicons/react/outline'



const Header = () => {
    return (<>
        <header className="text-left flex flex-col">
            <div className="flex">
                <HeaderIcons title='Home' Icon={HomeIcon} />
                <HeaderIcons title='Trending' Icon={LightningBoltIcon} />
                <HeaderIcons title='Verified' Icon={BadgeCheckIcon} />
                <HeaderIcons title='Collections' Icon={CollectionIcon} />
                <HeaderIcons title='Search' Icon={SearchIcon} />
                <HeaderIcons title='Account' Icon={UserIcon} />
               </div>



              <div  className="flex flex-col items-center -mt-6 sm:items-end sm:-mt-20">
                <Image
                    src="https://img.icons8.com/color/2x/hulu.png"
                    width={100} height={100} />
            </div>
        </header>


    </>)



}

export default Header
