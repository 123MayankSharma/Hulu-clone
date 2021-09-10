import Image from 'next/image'
import HeaderIcons from "./HeaderIcons.js"
import { BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon } from '@heroicons/react/outline'



const Header = () => {
    return (<>
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center ">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderIcons title='Home' Icon={HomeIcon} />
                <HeaderIcons title='Trending' Icon={LightningBoltIcon} />
                <HeaderIcons title='Verified' Icon={BadgeCheckIcon} />
                <HeaderIcons title='Collections' Icon={CollectionIcon} />
                <HeaderIcons title='Search' Icon={SearchIcon} />
                <HeaderIcons title='Account' Icon={UserIcon} />
               </div>



              <div  >
                <Image
                    src="https://img.icons8.com/color/2x/hulu.png"
                    width={100} height={100} />
            </div>
        </header>


    </>)



}

export default Header
