import React from "react";
import FoodBtn from "./FoodBtn";

const Posts = ({ posts, loading }) => {
  console.log(posts, posts.length)
  return (
    <div className="flex flex-wrap justify-center">
      {loading && <div> loading... </div>}
      {/* <ul> */}
        {posts.length != 0 ?
            posts.map((post, index) => (
            //   <li key={index/*post.id*/}>{post/*.title*/}</li>
                <FoodBtn key={post.id} name={post.name} foodInfo={post}/>
            ))
            :
            null
        }
      {/* </ul> */}
    </div>
  );
};
export default Posts;