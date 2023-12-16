import Slides from "./Slides";
import {QuotesSliderData}  from "@/config/Data";

export default function QuotesSlider(){
    
    return(<>
    <div className="w-11/12 h-48 m-auto flex">

        {QuotesSliderData?.map(({image, title, auther, date})=> <Slides image={image} title={title} publisher={auther} date={date} />)}
    </div>
        </>
    )
}