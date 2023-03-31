import {useEffect, useState} from 'react';
import Foods from './Foods';
import axios from 'axios';

const Modal = ({modalClose, foodInfo}) => {
    const [ClickedKw, setClickedKw] = useState(false)
    useEffect(()=>{
        if(ClickedKw){
            modalClose()
        }
    }, [ClickedKw])

    const onCloseModal = (e) => {
        //console.log('e.target: ', e.target);
        //console.log('e.tarcurrentTargetget: ', e.currentTarget)
        if(e.target === e.currentTarget){
            modalClose()
        }
    }
    return (
        <div className='modal_container' onClick={onCloseModal}>
            <div className='modal w-11/12 h-5/6'>
                <button className='modal_button' onClick={modalClose}>
                    <img src='/img/close.png' className='w-3 h-3 m-1'/>
                </button>
                <div className=''>
                    <h1 className='text-center font-bold text-4xl mt-10'>오늘의 메뉴는?</h1>
                    <Foods 
                        name = {foodInfo.name}
                        category = {foodInfo.category}
                        keyword = {foodInfo.keyword}
                        foodImg= {foodInfo.image}
                        description = {foodInfo.description}
                        modalClose={setClickedKw}
                    />
                </div>
            </div>
        </div>
    );
}
function Shuffle() {
    const [modalOpen, setModalOpen] = useState(false);
    const [foodData, setFoodData] = useState({});

    const randomMenu = {
        name: '화양적',
        category: '전류',
        keyword: '#육류전 #소고기 #오이',
        image: '/img/hwawang.png',
        description: 'https://terms.naver.com/search.naver?query=화양적'
    };
    const randomMenu2 = {
        name: "고비볶음",
        category: "볶음류",
        keyword: "#채소 및 해조류볶음 #고비 #콩기름",
        image: "https://mblogthumb-phinf.pstatic.net/20121206_210/tangkwon_1354774383327AWVDt_JPEG/002.jpg?type=w2",
        description: "https://terms.naver.com/search.naver?query=고비볶음"
    };

    const modalClose = () => {
        setModalOpen((modalOpen) => !modalOpen);
    }
    const onClickRandom = () => {
        axios.get("/api/menu/random")
        .then(response => {
            setFoodData(JSON.stringify(response.data))
            console.log(JSON.stringify(response.data))
            }
        )
        .catch(error => console.log(error))
        setFoodData(randomMenu2) //api 연결 후 삭제!!!!
        modalClose()
    }

    return (
        <div>
            <button onClick={onClickRandom} className="h-full mr-2 border rounded-md border-slate-300 hover:bg-blue-400">
                <img src="/img/shuffle.png" className="w-3 mx-2"/>
            </button>
            {modalOpen && <Modal modalClose={modalClose} foodInfo={foodData}/>}
        </div>
    );
}

export default Shuffle;