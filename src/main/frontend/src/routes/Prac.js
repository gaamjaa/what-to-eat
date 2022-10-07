import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import Posts from "../components/Posts";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import Shuffle from "../components/Shuffle";
import FoodBtn from "../components/FoodBtn";

function Prac() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
  
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

    /* 새로 추가한 부분 */
    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    const currentPosts = (posts) => {
      let currentPosts = 0;
      currentPosts = posts.slice(indexOfFirst, indexOfLast);
      console.log(currentPosts)
      return currentPosts;
    };
    /*                 */

    return(
        <div>
            연습용
            {/* <Posts posts={currentPosts(posts)} loading={loading}></Posts>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={setCurrentPage}
            ></Pagination> */}

        <div className="">
            <div>
                <div className="flex justify-center my-10">
                    <Link to="/"><p className="font-bold text-2xl mr-5">오늘 뭐 먹지?</p></Link>
                    <Search />
                    <Shuffle />
                </div>
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
        </div>
    )
}

export default Prac;