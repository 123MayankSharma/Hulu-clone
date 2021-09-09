




const HeaderIcons = ({ title, Icon }) => {

    return (<>
        <div className="ml-1 mr-3 mt-3 group cursor-pointer ">
            <Icon className="h-8 group-hover:animate-bounce" />
            <p className="font-sans transition-opacity opacity-0 group-hover:opacity-95">{title}</p>
        </div>
    </>)

}


export default HeaderIcons
