import Category from '../components/Category';
import ModalContainer from '../components/ModalContainer';
import Search from '../components/Search';
import Shuffle from "../components/Shuffle";
import {Link} from "react-router-dom";

function Home(){
    const menuList = [
        {id: 1, name: '밥류'},
        {id: 2, name: '면 및 만두류'},
        {id: 1, name: '국(탕)류'},
        {id: 1, name: '찌개류'},
        {id: 1, name: '찜류'},
        {id: 1, name: '조림류'},
        {id: 1, name: '구이류'},
        {id: 1, name: '전류'},
        {id: 1, name: '튀김류'},
        {id: 1, name: '볶음류'},
        {id: 1, name: '무침류'},
        {id: 1, name: '김치류'},
        {id: 1, name: '떡류'},
        {id: 1, name: '우유 및 유제품류'},
        {id: 1, name: '음료류'},
        {id: 1, name: '젓갈류'},
        {id: 1, name: '죽류'},
        {id: 1, name: '회류'},
        {id: 1, name: '과자 및 빵류'},
        {id: 1, name: '주류'},
        {id: 1, name: '원재료'},
        {id: 1, name: '장류'},
        {id: 1, name: '절임류'}
    ]

    return (
        <div>
            <div className="flex justify-center">
                <img src="/img/main-logo.png" className="w-1/6 m-5"/>
            </div>
            <div className='flex justify-center'>
                <Search />
                <Shuffle/>
                {/*<ModalContainer/>*/}
            </div>
            <div className='flex justify-center'>
                <div className='flex flex-wrap justify-center w-4/6 h-full mt-10'>
                    {
                        menuList.map((menu, index) => {
                            return <Category key={index} name={menu.name} index={menu.id} />
                        })
                    }
                </div>
            </div>

        </div>
    );
}

export default Home;