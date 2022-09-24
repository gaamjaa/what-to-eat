import { useEffect, useState } from "react";
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
    // useEffect(() => {
    //     const fetchData = async () => {
    //     setLoading(true);
    //     const response = await axios.get(
    //         "https://jsonplaceholder.typicode.com/posts"
    //     );
    //     setPosts(response.data);
    //     setLoading(false);
    //     };
    //     fetchData();
    // }, []);

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

    const foods = ["돌솥비빔밥", "간장계란밥", "곤드레비빔밥", "산채비빔밥", "밥바라비바라", "바라라비리바라", "돌솥비빔밥", "간장계란밥", "곤드레비빔밥", "산채비빔밥", "밥바라비바라", "바라라비리바라","돌솥비빔밥", "간장계란밥", "곤드레비빔밥", "산채비빔밥", "밥바라비바라", "바라라비리바라", "돌솥비빔밥", "간장계란밥", "곤드레비빔밥", "산채비빔밥", "밥바라비바라", "바라라비리바라"]

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
            <div className="flex justify-center">
                <div className="flex flex-wrap justify-center w-5/6 h-full mt-10 bg-red-300">
                    {
                        foods.map((food, index) => {
                            return <FoodBtn key={index} name={food} index={'1'}/>
                        })
                    }
                </div>
            </div>
            {/*modal===true ? <Modal/> : null*/}
        </div>
    );
}

export default CategoryFood;