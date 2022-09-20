import {useNavigate} from 'react-router-dom';

function Category({name, index}) {
    const navigate = useNavigate();

    const onClick = () => {
        navigate(`/menu/${index}`);
    }
    return(
        <button className="w-28 h-24 bg-rose-200 rounded-md m-1" onClick={onClick}>
            <img src=""/>
            {name}
        </button>
    );
}

export default Category;