import { useEffect, useState } from "react";
import {useParams, Link} from "react-router-dom";
import Shuffle from "../components/Shuffle";
import Search from "../components/Search";
import FoodBtn from "../components/FoodBtn";
import Posts from "../components/Posts";
import Pagination from "../components/Pagination";

function CategoryFood(){
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(15);

    const {id} = useParams();
    // 이 부분이 아래 fetchData 부분에 들어가면 될 거 같음
    // const getFoods = async() => {

    // }
    // useEffect(()=>{
    //     getFoods();
    // }, []);



    const foods = ["돌솥비빔밥", "간장계란밥", "곤드레비빔밥", "산채비빔밥", "밥바라비바라", "바라라비리바라", "돌솥비빔밥", "간장계란밥", "곤드레비빔밥", "산채비빔밥", "밥바라비바라", "바라라비리바라","돌솥비빔밥", "간장계란밥", "곤드레비빔밥", "산채비빔밥", "밥바라비바라", "바라라비리바라", "돌솥비빔밥", "간장계란밥", "곤드레비빔밥", "산채비빔밥", "밥바라비바라", "바라라비리바라"]

    useEffect(() => {
        //   const fetchData = async () => {
        //     setLoading(true);
        //     const response = await axios.get(
        //       "https://jsonplaceholder.typicode.com/posts"
        //     );
        //     setPosts(response.data);
        //     setLoading(false);
        //   };
        //   fetchData();
            setPosts(foods);
    }, []);
    console.log(posts)

    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    const currentPosts = (posts) => {
      let currentPosts = 0;
      currentPosts = posts.slice(indexOfFirst, indexOfLast);
      console.log(currentPosts)
      return currentPosts;
    };
    
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
            <div className="flex flex-col">
                <div className="h-full mx-10 mt-10 bg-red-300 mb-10">
                    {/* {
                        foods.map((food, index) => {
                            return <FoodBtn key={index} name={food} index={'1'}/>
                        })
                    } */}
                    <Posts posts={currentPosts(posts)} loading={loading}></Posts>

                </div>
                <div className="flex justify-center">
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={posts.length}
                    paginate={setCurrentPage}
                ></Pagination>
                </div>
            </div>
            {/*modal===true ? <Modal/> : null*/}
        </div>
    );
}

const getTitle = (num) => {
    let title = "";
    switch(Number(num)) {
        case 1:
            title = "밥류"
            break
        case 2:
            title = "면 및 만두류"
            break
        case 3:
            title = "국(탕)류"
            break
        case 4:
            title = "찌개류"
            break
        case 5:
            title = "찜류"
            break
        case 6:
            title = "조림류"
            break
        case 7:
            title = "구이류"
            break
        case 8:
            title = "전류"
            break
        case 9:
            title = "튀김류"
            break
        case 10:
            title = "볶음류"
            break
        case 11:
            title = "무침류"
            break
        case 12:
            title = "김치류"
            break
        case 13:
            title = "떡류"
            break
        case 14:
            title = "우유 및 유제품류"
            break
        case 15:
            title = "음료류"
            break
        case 16:
            title = "젓갈류"
            break
        case 17:
            title = "죽류"
            break
        case 18:
            title = "회류"
            break
        case 19:
            title = "과자 및 빵류"
            break
        case 20:
            title = "주류"
            break
        case 21:
            title = "원재료"
            break
        case 22:
            title = "장류"
            break
        case 23:
            title = "절임류"
            break
        default:
            break
    }
    return(<h1 className="text-2xl font-bold text-center">{title}</h1>);
}


export default CategoryFood;