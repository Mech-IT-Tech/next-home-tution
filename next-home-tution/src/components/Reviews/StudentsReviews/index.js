'use client'
import { useState } from 'react';
import ReviewsPage from './ReviewsPage';
import { StudentsReviewsDatas } from '@/config/Data';

export default function StudentsReviews({ type }) {
    const [reviewsHeight, setReviewsheight] = useState(false);

    return (<div className="w-full ">
        <div className='text-center'>
            <h2 className='font-bold text-xl'>{type}</h2>
        </div>
        <div className='relative border pb-8'>
            <div className={`h-${reviewsHeight ? 'auto animationHeightMore' : '80 animationHeightLess'}  overflow-hidden p-4`}>
                {StudentsReviewsDatas.map(({ image, name, comment, rate }) => <ReviewsPage name={name} image={image} comment={comment} rate={rate} />)}
            </div>
            <div className='absolute px-4 shadow-slate-800 font-bold'>
                <button onClick={() => setReviewsheight(!reviewsHeight)}>{reviewsHeight ? 'See less...' : 'See More...'}</button>
            </div>
        </div>
    </div>)
}