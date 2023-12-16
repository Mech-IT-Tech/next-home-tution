

export default function ClassesCourses({type}){
    return(<div className="w-96 border">
        <div className="font-bold text-xl text-center mt-4 text-green-600">
            <h4>{type}</h4>
        </div>
        {type === 'Classes' ? <div className="flex flex-col items-center justify-center font-bold text-base mt-4 py-4 border">
            <p>LKG - 1st</p>
            <p>1st - 5st</p>
            <p>6st - 8st</p>
            <p>9st - 10st</p>
            <p>10st - 12st</p>
        </div> :
        <div className="flex flex-col items-center justify-center font-bold text-base mt-4 py-4 border">
            <p>Hindi</p>
            <p>English</p>
            <p>Math</p>
            <p>Science</p>
            <p>Social Science</p>
        </div>}
    </div>)
}