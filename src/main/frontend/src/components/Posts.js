import React from "react";
import FoodBtn from "./FoodBtn";

const Posts = ({ posts, loading }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {loading && <div> loading... </div>}
      {/* <ul> */}
        {posts.map((post, index) => (
        //   <li key={index/*post.id*/}>{post/*.title*/}</li>
            <FoodBtn key={post.id} name={post.name} foodInfo={post}/>
        ))}
      {/* </ul> */}
    </div>
  );
};
export default Posts;