function Preview({name, ogTitle, ogUrl, ogImage}) {
    // console.log("우히히", ogTitle, typeof(ogTitle), ogUrl, ogImage)
    const onClick = () => {
        window.open(ogUrl)
    }
    return(
        <button onClick={onClick} className="w-full flex flex-col items-center">
            <p><span className="font-bold">{name}</span> 더 알아보기</p>
            <div className="flex justify-around items-center w-2/3 h-20 shadow-xl hover:shadow-rose-200">
                {ogTitle}
                <img src={ogImage} className="w-20"/>
            </div>
        </button>
    )
}

export default Preview;