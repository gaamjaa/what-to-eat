import {useNavigate} from 'react-router-dom';

function Category({name, id, img}) {
    const navigate = useNavigate();

    const onClick = () => {
        navigate(`/menu/${id}`);
    }
    return(
        <div className='flex flex-col mb-4'>
            <button className="w-28 h-24 bg-rose-200 rounded-md m-1 shadow-md" onClick={onClick}>
                {
                    img=='' ?
                    null:
                    <img src={img} className='w-28 h-24'/>
                }
            </button>
            <p className='text-center'>{name}</p>
        </div>
    );
}

export default Category;