import { FaStar } from 'react-icons/fa';

export default function ReviewsPage({name, image, comment, rate}){
    return(<div className="w-full ">
    <div>
        
    </div>
    <div>
        <div>
            <div className='flex'>
                <FaStar color={rate >= 1? 'red': 'gray'} className="ml-1 text-red" />
                <FaStar color={rate >= 2? 'red': 'gray'} className="ml-1 text-red" />
                <FaStar color={rate >= 3? 'red': 'gray'} className="ml-1 text-red" />
                <FaStar color={rate >= 4? 'red': 'gray'} className="ml-1 text-red" />
                <FaStar color={rate >= 5? 'red': 'gray'} className="ml-1 text-red" />
                
            </div>
            <div className=''>
                {comment}
                <p className='text-end font-bold text-xs'>__{name}</p>
            </div>
        </div>
    </div>
</div>)
}