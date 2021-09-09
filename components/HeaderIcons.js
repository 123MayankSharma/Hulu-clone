




const HeaderIcons = ({ title, Icon }) => {

    return (<>
        <div className="ml-3 mr-1 mt-3 group cursor-pointer flex flex-col items-center sm:float-left sm:items-start hover:text-white">
            <Icon className="h-8 group-hover:animate-bounce" />
            <p className="font-sans transition-opacity opacity-0 group-hover:opacity-95">{title}</p>
        </div>
    </>)

}


export default HeaderIcons
