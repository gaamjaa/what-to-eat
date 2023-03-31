import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search(){
    const [inputData, setInputData] = useState("");
    const navigate = useNavigate()

    const onChangeData = (e) => {
        // console.log(e.target.value)
        setInputData(e.target.value)
    }
    const onClickSearch = () => {
        if(inputData.length>0){
            console.log("적합")
            navigate(`/search/${inputData}`)
        }
        else{
            console.log(inputData)
            console.log("부적합")

        }
        // console.log("foodData: ", foodData)

    }
    const onKeyPress = (e) => {
        if(e.key == 'Enter'){
            onClickSearch()
        }
    }
    return(
        <span>
            <input onChange={onChangeData} onKeyDown={onKeyPress} type="text" name="search" className="bg-white h-full border border-slate-300 rounded-md py-2 pl-9 pr-3 mr-1 shadow-sm placeholder:italic placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="먹고 싶은 음식은?"/>
            <button onClick={onClickSearch} className="h-full mr-1 border rounded-md border-slate-300 hover:border-blue-400">
                <img src="/img/search.png" className="w-3 mx-2"/>
            </button>
        </span>
    );
}

export default Search;