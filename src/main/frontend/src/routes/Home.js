import Category from '../components/Category';
import ModalContainer from '../components/ModalContainer';
import Search from '../components/Search';
import Shuffle from "../components/Shuffle";

function Home(){    
    const menuList = [
        {id: 1, name: '밥류', img: '/img/rice.jpg'},
        {id: 2, name: '면 및 만두류', img: '/img/noodle.png'},
        {id: 3, name: '국(탕)류', img: '/img/soup.png'},
        {id: 4, name: '찌개류', img: '/img/jjigae.png'},
        {id: 5, name: '찜류', img: '/img/jjim.jpg'},
        {id: 6, name: '조림류', img: '/img/jorim.png'},
        {id: 7, name: '구이류', img: '/img/roast.jpg'},
        {id: 8, name: '전류', img: '/img/jeon.png'},
        {id: 9, name: '튀김류', img: '/img/fried.png'},
        {id: 10, name: '볶음류', img: '/img/bokum.png'},
        {id: 11, name: '무침류', img: '/img/muchim.jpg'},
        {id: 12, name: '김치류', img: '/img/kimchi.jpg'},
        {id: 13, name: '떡류', img: '/img/ricecake.png'},
        {id: 14, name: '우유 및 유제품류', img: '/img/milk.jpg'},
        {id: 15, name: '음료류', img: '/img/juice.jpg'},
        {id: 16, name: '젓갈류', img: '/img/jutgal.jpg'},
        {id: 17, name: '죽류', img: '/img/juk.jpg'},
        {id: 18, name: '회류', img: '/img/sushi.jpg'},
        {id: 19, name: '과자 및 빵류', img: '/img/bread.jpg'},
        {id: 20, name: '주류', img: '/img/alcohol.jpg'},
        {id: 21, name: '원재료', img: '/img/carrot.jpg'},
        {id: 22, name: '장류', img: '/img/jang.png'},
        {id: 23, name: '절임류', img: '/img/jeolim.jpg'}
    ]

    return (
        <div>
            <div className="flex justify-center">
                <img src="/img/main-logo.png" className="w-1/6 m-5"/>
            </div>
            <div className='flex justify-center'>
                <Search />
                <Shuffle/>
                {/* <ModalContainer/> */}
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
            {/* <Link to="/prac"><button>페이지네이션 연습 페이지</button></Link> */}
        </div>
    );
}

export default Home;