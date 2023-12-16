import Image from "next/image";
import { PostsDatas } from "@/config/Data";

export default function Posts(){
    return(
        <div className="flex overflow-x-scroll example">
            {PostsDatas.map(({url}) => <img className="py-2 px-4 border" src={'/postimage.jpg'} alt="" width={300} height={200} />)}
        </div>
    )
}