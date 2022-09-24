import Category from '../components/Category';
import ModalContainer from '../components/ModalContainer';
import Search from '../components/Search';
import Shuffle from "../components/Shuffle";
import {Link} from "react-router-dom";

function Home(){
    const menuList = [
        {id: 1, name: '밥류', img: ''},
        {id: 2, name: '면 및 만두류', img: '/img/noodle.png'},
        {id: 3, name: '국(탕)류', img: '/img/soup.png'},
        {id: 4, name: '찌개류', img: '/img/jjigae.png'},
        {id: 5, name: '찜류', img: ''},
        {id: 6, name: '조림류', img: ''},
        {id: 7, name: '구이류', img: ''},
        {id: 8, name: '전류', img: '/img/jeon.png'},
        {id: 9, name: '튀김류', img: ''},
        {id: 10, name: '볶음류', img: ''},
        {id: 11, name: '무침류', img: ''},
        {id: 12, name: '김치류', img: ''},
        {id: 13, name: '떡류', img: ''},
        {id: 14, name: '우유 및 유제품류', img: ''},
        {id: 15, name: '음료류', img: ''},
        {id: 16, name: '젓갈류', img: ''},
        {id: 17, name: '죽류', img: ''},
        {id: 18, name: '회류', img: ''},
        {id: 19, name: '과자 및 빵류', img: ''},
        {id: 20, name: '주류', img: ''},
        {id: 21, name: '원재료', img: ''},
        {id: 22, name: '장류', img: ''},
        {id: 23, name: '절임류', img: ''}
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
                        menuList.map((menu) => {
                            return <Category key={menu.id} name={menu.name} id={menu.id} img={menu.img}/>
                        })
                    }
                </div>
            </div>

        </div>
    );
}

export default Home;