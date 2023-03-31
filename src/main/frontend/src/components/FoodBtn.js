import {useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Foods from "../components/Foods";

//여기서 리덕스를 써볼까? 지금이 딱 
const Modal = ({modalClose, foodInfo}) => {
    const [ClickedKw, setClickedKw] = useState(false)
    const onCloseModal = (e) => {
        if(e.target === e.currentTarget){
            modalClose();
        }
    }
    // console.log(foodInfo)
    useEffect(()=>{
        if(ClickedKw){
            modalClose()
        }
    }, [ClickedKw])

    return(
        <div className='modal_container' onClick={onCloseModal}>
            <div className='modal w-11/12 h-5/6'>
                <button className='modal_button' onClick={modalClose}>
                    <img src='/img/close.png' className='w-3 h-3 m-1'/>
                </button>
                <div className=''>
                    <Foods 
                        name = {foodInfo.name}
                        category = {foodInfo.category}
                        keyword = {foodInfo.keyword}
                        foodImg = {foodInfo.image}
                        description = {foodInfo.description}
                        modalClose = {setClickedKw}
                    />
                </div>
            </div>
        </div>
    );
}

function FoodBtn ({name, index, foodInfo}) {
    //----모달 관련
    const [modal, setModal] = useState(false);

    const onClick = () => {
        setModal((current) => !current)
        //현재 누른 메뉴 내용 얻는 api 사용 => 이 함수 안에 state에 오브젝트로 넣던가? 아니면 리덕스 써보기
    }
    return(
        <span className='flex flex-col items-center'>
            <button className="relative w-28 h-28 rounded-full bg-white m-3 shadow-lg hover:shadow-rose-200" onClick={onClick}>
                <img src={foodInfo.image} className="absolute w-28 h-28 rounded-full left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]"></img>
            </button>
            <p className='text-center w-28 font-bold'>{name}</p>
            {modal===true ? <Modal modalClose={setModal} foodInfo={foodInfo}/> : null}
        </span>
    );
}

export default FoodBtn;