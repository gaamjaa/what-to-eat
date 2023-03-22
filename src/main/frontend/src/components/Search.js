import { useState } from "react";

function Search(){
    const [inputData, setInputData] = useState("");
    const onChangeData = (e) => {
        console.log(e.target.value)
        setInputData(e.target.value)
    }
    const onClickSearch = () => {
        if(inputData.length>0){
            console.log("적합")
        }
        else{
            console.log(inputData)
            console.log("부적합")
        }
    }

    return(
        <span>
            <input type="text" name="search" className="bg-white h-full border border-slate-300 rounded-md py-2 pl-9 pr-3 mr-1 shadow-sm placeholder:italic placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="먹고 싶은 음식은?"/>
            <button className="h-full mr-1 border rounded-md border-slate-300 hover:border-blue-400">
                <img src="/img/search.png" className="w-3 mx-2"/>
            </button>
        </span>
    );
}

export default Search;