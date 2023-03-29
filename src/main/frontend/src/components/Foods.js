import '../css/Food.css'
import Preview from './Preview'
import { useState, useEffect } from 'react';
import axios from 'axios';

function Foods({name, category, keyword, foodImg, description}){
    const keywords = keyword.split('#')
    // console.log(keyword, keywords)
    let categoryImg = getCategoryImg(category)

    const onClickMap = () => {
        window.open(`https://map.naver.com/v5/search/${name}`)
    }
    return(
        <div >
            <div className='flex justify-center mt-10'>
                <img src={foodImg} className='w-1/4'/>
            </div>
            {/* <h2 className='text-center font-bold text-2xl mt-10'>{name}</h2> */}
            <div className='grid place-items-center sticky bg-white'>
                <p className='font-bold text-4xl bg-white mt-10'>{name}</p>
                <button className=' border rounded-xl bg-rose-200 w-1/4 h-10 hover:bg-slate-300 mt-3 mb-10'
                    onClick={onClickMap}
                    >근처 "{name}"집 찾아보기</button>
            </div>

            <div className="mx-20">
                <div className='font-bold flex justify-center items-center ml-1'>
                    {category}
                    <img className='w-20 h-20' src={categoryImg}/>
                </div>
                <div className='flex justify-center mt-3'>
                {
                    keywords.map((kw, index) => (
                        kw=="" ?
                        null
                        :
                        <span key={index} className='p-1 mx-1 bg-rose-200 rounded-xl'>#{kw}</span>
                    ))
                }
                </div>
                <br/>

                <div className='mt-10'>
                    {/*간단버전 */}
                    <Preview name={name} ogTitle={`${name} 검색결과`} ogUrl={description} ogImage={foodImg}/>
                </div>  
            </div>
        </div>
    );
}

export default Foods;

function getCategoryImg(category){
    let categoryImg = ""
    if (category == "주류"){
        categoryImg = "/img/alcohol.jpg"
    }
    else if (category == "볶음류"){
        categoryImg = "/img/bokum.png"
    }
    else if (category == "과자 및 빵류"){
        categoryImg = "/img/bread.jpg"
    }
    else if (category == "원재료"){
        categoryImg = "/img/carrot.jpg"
    }
    else if (category == "튀김류"){
        categoryImg = "/img/fried.png"
    }
    else if (category == "장류"){
        categoryImg = "/img/jang.png"
    }
    else if (category == "절임류"){
        categoryImg = "/img/jeolim.jpg"
    }
    else if (category == "전류"){
        categoryImg = "/img/jeon.png"
    }
    else if (category == "찌개류"){
        categoryImg = "/img/jjigae.png"
    }
    else if (category == "찜류"){
        categoryImg = "/img/JJim.jpg"
    }
    else if (category == "조림류"){
        categoryImg = "/img/jorim.png"
    }
    else if (category == "음료류"){
        categoryImg = "/img/juice.jpg"
    }
    else if (category == "죽류"){
        categoryImg = "/img/juk.jpg"
    }
    else if (category == "젓갈류"){
        categoryImg = "/img/jutgal.jpg"
    }
    else if (category == "김치류"){
        categoryImg = "/img/kimchi.jpg"
    }
    else if (category == "우유 및 유제품류"){
        categoryImg = "/img/milk.jpg"
    }
    else if (category == "무침류"){
        categoryImg = "/img/muchim.jpg"
    }
    else if (category == "면 및 만두류"){
        categoryImg = "/img/noodle.png"
    }
    else if (category == "밥류"){
        categoryImg = "/img/rice.jpg"
    }
    else if (category == "떡류"){
        categoryImg = "/img/ricecake.png"
    }
    else if (category == "구이류"){
        categoryImg = "/img/roast.jpg"
    }
    else if (category == "국(탕)류"){
        categoryImg = "/img/soup.png"
    }
    else if (category == "회류"){
        categoryImg = "/img/sushi.jpg"
    }
    return categoryImg
}