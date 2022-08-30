import '../css/Food.css'

function Foods({name, foodImg, contents, recipe}){
    return(
        <div >
            <div className='flex justify-center'>
                <img src={foodImg} className='w-1/4'/>
            </div>
            <div className='grid place-items-center sticky bg-white'>
                <p className='font-bold text-4xl bg-white mt-10'>{name}</p>
                <button className=' border rounded-xl bg-rose-200 w-1/4 h-10 hover:bg-blue-500 mt-3 mb-10'>근처 "{name}"집 찾아보기</button>
            </div>

            <div className="mx-20">
                <p>{contents}</p>
                <br/>
                <h1 className='font-bold text-2xl text-center'>{name} 레시피</h1>
                <p>{recipe}</p>
            </div>
        </div>
    );
}

export default Foods;