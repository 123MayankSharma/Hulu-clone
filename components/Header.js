import Image from 'next/image'
import HeaderIcons from "./HeaderIcons.js"
import { BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon} from '@heroicons/react/outline'



const Header = () => {
    return (<>
        <header className="text-left">
       <div className="flex flex-col items-stretch sm:place-items-stretch">
        <HeaderIcons title='Home' Icon={HomeIcon}/>
        
        <Image 
        className="object-contain"
        src="https://img.icons8.com/ios/2x/hulu.png" 
        width={200} height={100}/>
        </div>
        </header>


    </>)



}

export default Header
