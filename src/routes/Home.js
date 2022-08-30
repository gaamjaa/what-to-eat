import Category from '../components/Category';
import ModalContainer from '../components/ModalContainer';
import Search from '../components/Search';
import Shuffle from "../components/Shuffle";
import {Link} from "react-router-dom";

function Home(){
    return (
        <div>
            <div className="flex justify-center">
                <img src="/img/main-logo.png" className="w-1/6 m-5"/>
            </div>
            <div className='flex justify-center'>
                <Search />
                <Shuffle/>
                <ModalContainer/>
            </div>
            <div className='flex justify-center mt-10'>
                <div className='grid grid-cols-6 gap-3 place-content-center	place-items-center'>
                    <Link to={`/menu/1`}><Category name="밥류"/></Link>
                    <Link to={`/menu/2`}><Category name="면 및 만두류"/></Link>
                    <Category name="국(탕)류"/>
                    <Category name="찌개류"/>
                    <Category name="찜류"/>
                    <Category name="조림류"/>
                    <Category name="구이류"/>
                    <Category name="전류"/>
                    <Category name="튀김류"/>
                    <Category name="볶음류"/>
                    <Category name="무침류"/>
                    <Category name="김치류"/>
                    <Category name="떡류"/>
                    <Category name="우유 및 유제품류"/>
                    <Category name="음료류"/>
                    <Category name="젓갈류"/>
                    <Category name="죽류"/>
                    <Category name="회류"/>
                    <Category name="과자 및 빵류"/>
                    <Category name="주류"/>
                    <Category name="원재료"/>
                    <Category name="장류"/>
                    <Category name="절임류"/>
                </div>
            </div>

        </div>
    );
}

export default Home;