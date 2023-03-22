function Preview({name, ogTitle, ogUrl, ogImage}) {
    console.log("우히히", ogTitle, typeof(ogTitle), ogUrl, ogImage)
    return(
        <a href={ogUrl}>
            <button className="w-full flex flex-col items-center">
                <p><span className="font-bold">{name}</span> 더 알아보기</p>
                <div className="flex justify-around items-center w-2/3 shadow-lg">
                    {ogTitle}
                    <img src={ogImage.url} className="w-20"/>
                </div>
            </button>
        </a>
    )
}

export default Preview;