import { useEffect } from "react";
import {useParams, Link} from "react-router-dom";
import Shuffle from "../components/Shuffle";
import Search from "../components/Search";
import FoodBtn from "../components/FoodBtn";

function CategoryFood(){
    const {id} = useParams();
    const getFoods = async() => {

    }
    useEffect(()=>{
        getFoods();
    }, []);

    const getTitle = (num) => {
        switch(Number(num)) {
            case 1:
                return(<h1 className="text-2xl font-bold text-center">밥류</h1>);
            case 2:
                return(<h2 className="text-2xl font-bold text-center">면 및 만두류</h2>);
            default:
                return null
        }
    }
    
    return(
        <div className="">
            <div>
                <div className="flex justify-center my-10">
                    <Link to="/"><p className="font-bold text-2xl mr-5">오늘 뭐 먹지?</p></Link>
                    <Search />
                    <Shuffle />
                </div>
                {getTitle(id)}
            </div>
            <div className="flex justify-center my-10 h-full">
                <div className="grid place-content-start grid-cols-5 gap-3 w-9/12 h-full bg-rose-300 p-5">
                    <FoodBtn name="돌솥비빔밥"/>
                    <FoodBtn name="간장계란밥"/>
                    <FoodBtn name="돌솥비빔밥"/>
                    <FoodBtn name="간장계란밥"/>                    <FoodBtn name="돌솥비빔밥"/>
                    <FoodBtn name="간장계란밥"/>
                </div>
            </div>
        </div>
    );
}

export default CategoryFood;