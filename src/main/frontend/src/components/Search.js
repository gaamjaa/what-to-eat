import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Foods from "./Foods";

const Modal = ({modalClose}) => {
    const onCloseModal = (e) => {
        if(e.target === e.currentTarget){
            modalClose()
        }
    }

    const randomMenu = {
        name: '화양적',
        category: '전류',
        keyword: '#육류전 #소고기 #오이',
        image: '/img/hwawang.png',
        description: 'https://terms.naver.com/search.naver?query=화양적'
    };

    return (
        <div className='modal_container' onClick={onCloseModal}>
            <div className='modal w-11/12 h-5/6'>
                <button className='modal_button' onClick={modalClose}>
                    <img src='/img/close.png' className='w-3 h-3 m-1'/>
                </button>
                <div className=''>
                    <h1 className='text-center font-bold text-4xl mt-10'>오늘의 메뉴는?</h1>
                    <Foods 
                        name = {randomMenu.name}
                        category = {randomMenu.category}
                        keyword = {randomMenu.keyword}
                        foodImg= {randomMenu.image}
                        description = {randomMenu.description}
                    />
                </div>
            </div>
        </div>
    );
}

function Search(){
    const [inputData, setInputData] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const modalClose = () => {
        setModalOpen((modalOpen) => !modalOpen);
    }
    
    const onChangeData = (e) => {
        // console.log(e.target.value)
        setInputData(e.target.value)
    }
    const onClickSearch = () => {
        if(inputData.length>0){
            console.log("적합")
            axios.get(`/api/menu/serach?searchWord=${inputData}`)
            .then(response => {
    //            setContents(JSON.stringify(response.data))
                console.log(JSON.stringify(response.data))
                // modalClose()
                }
            )
            .catch(error => console.log(error));
            modalClose()
        }
        else{
            console.log(inputData)
            console.log("부적합")

        }

    }

    return(
        <span>
            <input onChange={onChangeData} type="text" name="search" className="bg-white h-full border border-slate-300 rounded-md py-2 pl-9 pr-3 mr-1 shadow-sm placeholder:italic placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="먹고 싶은 음식은?"/>
            <button onClick={onClickSearch} className="h-full mr-1 border rounded-md border-slate-300 hover:border-blue-400">
                <img src="/img/search.png" className="w-3 mx-2"/>
            </button>
            {modalOpen && <Modal modalClose={modalClose}/>}
        </span>
    );
}

export default Search;