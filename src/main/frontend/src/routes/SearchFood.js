import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Shuffle from "../components/Shuffle";
import Search from "../components/Search";
import Posts from "../components/Posts";
import Pagination from "../components/Pagination";

function SearchFood() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(15);
    const { query } = useParams();


    const foods = [
        {id:22,name:"눌은밥",category:"밥류",keyword:"#쌀밥 #멥쌀 #물",image:"https://t1.daumcdn.net/thumb/R720x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/4hvY/image/dr-7w7Dw9PRNPoUayZUxdpC66AY.jpg",description:"https://terms.naver.com/search.naver?query=눌은밥"},
        {id:23,name:"쌀밥",category:"밥류",keyword:"#쌀밥 #멥쌀 #물",image:"https://w.namu.la/s/7aeac70c734963139f7e86569f324e2e4e687fca3767dc6e415d6a0a20e032dc932c245ace59036f9a114a609da373b571c8a3c6d003c65712b153abaefcaafa1a890f150eb111394c4dc248b01a04a0bba97472c4e018918e950e70b3c7a140b4925d75c7c6c2ec6bdc614655884a35",description:"https://terms.naver.com/search.naver?query=쌀밥"},
        {id:24,name:"찰밥",category:"밥류",keyword:"#쌀밥 #찹쌀 #물",image:"https://recipe1.ezmember.co.kr/cache/recipe/2022/02/14/065773b64b503ab14f5bbbd248fdc7651.jpg",description:"https://terms.naver.com/search.naver?query=찰밥"},
        {id:25,name:"현미밥",category:"밥류",keyword:"#쌀밥 #멥쌀 #물",image:"http://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2019/10/14/20191014000235_0.jpg",description:"https://terms.naver.com/search.naver?query=현미밥"},
        {id:26,name:"검정콩밥",category:"밥류",keyword:"#잡곡밥 #대두 #멥쌀",image:"https://mblogthumb-phinf.pstatic.net/20160817_231/kkm7749_1471434721564ORT89_JPEG/20160816_192105.jpg?type=w2",description:"https://terms.naver.com/search.naver?query=검정콩밥"},
        {id:27,name:"기장밥",category:"밥류",keyword:"#잡곡밥 #기장 #멥쌀",image:"https://www.sk5.co.kr/neo/ns600/100/10016922.jpg",description:"https://terms.naver.com/search.naver?query=기장밥"},
        {id:28,name:"녹두밥",category:"밥류",keyword:"#잡곡밥 #녹두 #멥쌀",image:"https://mblogthumb-phinf.pstatic.net/MjAxODAxMTZfMjky/MDAxNTE2MDY5Nzc3NDQy.cyN85Y5NzBdP2z6m0pHGw6qZdqm3FHaY459tne_jYRkg.axR2oEeE1U2Md6_lvd5r6o6R9TLng4n5AFtAUgrbnqwg.JPEG.chamcarekr/11.jpg?type=w800",description:"https://terms.naver.com/search.naver?query=녹두밥"},
        {id:29,name:"땅콩밥",category:"밥류",keyword:"#잡곡밥 #땅콩 #멥쌀",image:"https://mblogthumb-phinf.pstatic.net/20141010_143/bongs1021_1412921253552rXRxh_JPEG/s_G109023.JPG?type=w2",description:"https://terms.naver.com/search.naver?query=땅콩밥"},
        {id:30,name:"밤밥",category:"밥류",keyword:"#잡곡밥 #밤 #멥쌀",image:"https://recipe1.ezmember.co.kr/cache/recipe/2015/07/31/c1ba341fe38662568faffc031657aa891.jpg",description:"https://terms.naver.com/search.naver?query=밤밥"},
        {id:31,name:"보리밥",category:"밥류",keyword:"#잡곡밥 #보리 #멥쌀",image:"https://folkency.nfm.go.kr/upload/img/20190304/20190304123303_t_.jpg",description:"https://terms.naver.com/search.naver?query=보리밥"},
        {id:32,name:"보리밥(강낭콩)",category:"밥류",keyword:"#잡곡밥 #보리 #멥쌀",image:"https://t1.daumcdn.net/cfile/blog/140D6F124A50399610",description:"https://terms.naver.com/search.naver?query=보리밥(강낭콩)"},
        {id:33,name:"보리밥(조)",category:"밥류",keyword:"#잡곡밥 #보리 #멥쌀",image:"https://dimg.donga.com/wps/NEWS/IMAGE/2019/06/03/95815548.1.jpg",description:"https://terms.naver.com/search.naver?query=보리밥(조)"},
        {id:34,name:"보리밥(팥)",category:"밥류",keyword:"#잡곡밥 #보리 #멥쌀",image:"https://t1.daumcdn.net/cfile/tistory/2525833758076CDA3C",description:"https://terms.naver.com/search.naver?query=보리밥(팥)"},
        {id:35,name:"수수밥",category:"밥류",keyword:"#잡곡밥 #수수 #멥쌀",image:"https://mblogthumb-phinf.pstatic.net/20141225_71/jjaehhun_1419465591122bJS3O_JPEG/IMG_8537.JPG?type=w2",description:"https://terms.naver.com/search.naver?query=수수밥"},
    ]

    useEffect(() => {
        axios.get(`/api/menu/serach?searchWord=${query}`)
        .then(response => {
            console.log(JSON.stringify(response.data))
            setPosts(JSON.stringify(response.data)) //api 연결 후 여는거!!! ==> 검색 결과 데이터
            }
        )
        .catch(error => console.log(error));    
        setPosts(foods) //api 연결할 때 주석처리
    }, [query])

    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    const currentPosts = (posts) => {
      let currentPosts = 0;
      currentPosts = posts.slice(indexOfFirst, indexOfLast);
    //   console.log(currentPosts)
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
            </div>
            <p className="text-center"><span className="font-bold text-xl">{query}</span><span> 검색결과</span></p>
            <div className="flex flex-col">
                <div className="h-full mx-10 mt-10 mb-10">
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
        </div>
    );
}

export default SearchFood;