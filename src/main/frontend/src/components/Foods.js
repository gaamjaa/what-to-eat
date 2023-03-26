import '../css/Food.css'
import Preview from './Preview'
import { useState, useEffect } from 'react';
import axios from 'axios';

function Foods({name, category, keyword, foodImg, description}){
    const [openGraph, setOpenGraph] = useState();
    const callApi = async () => {
        // axios({
        //     method: "get",
        //     url: "/nodePost",
        //     params: {url: description},
        // }).then((res) => {
        //     console.log("시밤바", res)
        // }).catch((error) => {
        //     console.log("바밤바", error)
        // })

        // fetch('nodePost', {
        //     method: "POST",
        //     headers: {"Content-Type": "application/json"},
        //     body: JSON.stringify({url:description})
        // })
        // .then(response => response.json())
        // .then(data => {
        //     console.log("성공", data.result);
        //     setOpenGraph(data.result)
        // }).catch(error => {
        //     console.log(error);
        // });
        try{
            const response = await axios.post('nodePost', { url: description }, { headers: { 'Content-Type': 'application/json' } })
            console.log('성공', response.data.result)
            setOpenGraph(response.data.result)
        } catch(error) {
            console.log(error)
        }


        // axios.get("/node").then((res) => {
        //     // console.log(res.data.result)
        //     const data = res.data.result
        //     setOpenGraph(data);
        // });
    }
    useEffect(()=>{
        callApi();
    }, [])
    // useEffect(() => {
    // }, [openGraph])

    const keywords = keyword.split('#')
    console.log(keyword, keywords)
    let categoryImg = ""
    if (category == "전류"){
        categoryImg = "/img/jeon.png"
    }
    else if (category == "볶음류"){
        categoryImg = "/img/bokum.png"
    }


    return(
        <div >
            <div className='flex justify-center mt-10'>
                <img src={foodImg} className='w-1/4'/>
            </div>
            <h2 className='text-center font-bold text-2xl mt-10'>{name}</h2>
            {/* <div className='grid place-items-center sticky bg-white'>
                <p className='font-bold text-4xl bg-white mt-10'>{name}</p>
                <button className=' border rounded-xl bg-rose-200 w-1/4 h-10 hover:bg-blue-500 mt-3 mb-10'>근처 "{name}"집 찾아보기</button>
            </div> */}

            <div className="mx-20">
                <div className='font-bold flex justify-center items-center ml-1'>
                    {category}
                    <img className='w-20 h-20' src={categoryImg}/>
                </div>
                <div className='flex justify-center'>
                {
                    keywords.map((kw) => (
                        kw=="" ?
                        null
                        :
                        <span className='p-1 mx-1 bg-rose-200 rounded-xl'>#{kw}</span>
                    ))
                }
                </div>
                <br/>

                <div className='mt-10'>
                {
                    openGraph == null ?
                    <button className="w-full flex flex-col items-center">
                    <p><span className="font-bold">{name}</span> 더 알아보기</p>
                    <div className="flex justify-around items-center w-2/3 h-20 shadow-lg"/>
                    </button>
                    :
                    openGraph.ogImage == null ?
                    null
                    :
                    <Preview name={name} ogTitle={openGraph.ogTitle} ogUrl={openGraph.ogUrl} ogImage={openGraph.ogImage.url}/>
                }
                    {/*간단버전 */}
                    <Preview name={name} ogTitle={`${name} 검색결과`} ogUrl={description} ogImage={foodImg}/>
                </div>  
            </div>
        </div>
    );
}

export default Foods;