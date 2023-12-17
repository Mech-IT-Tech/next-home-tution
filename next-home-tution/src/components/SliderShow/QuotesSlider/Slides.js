
export default function Slides({image, date, publisher, title}) {
    return (
        <div className={`relative w-full h-full hover:scale-125 hover:z-10 transition duration-150 ease-in hover:scale-x-3 opacity-60 hover:opacity-100`}>
            <div className='absolute w-full h-full flex flex-col justify-end gradient'>
                <div className='text-2xl font-semibold text-white mb-4 m-2'>
                    <h2 className=''>
                        {title}
                    </h2>
                </div>
                <div className='m-2 p-0 text-slate-300'>
                    <span>{publisher}</span>
                    <span className='opacity-90 border-s-2 ms-2 ps-2  border-red-400'>{date}</span>
                </div>
            </div>
            <div className='w-full h-full gradient border'>
                <img className='w-full h-full rounded-lg' src={image} alt='image' />
            </div>
        </div>
    )
}