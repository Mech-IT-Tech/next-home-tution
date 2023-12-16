// pages/index.tsx

import ClassesCourses from "@/components/ClassesCourses";
import Contact from "@/components/Contact";
import Posts from "@/components/Posts";
import StudentsReviews from "@/components/Reviews/StudentsReviews";
import QuotesSlider from "@/components/SliderShow/QuotesSlider";
import Testimonial from "@/components/SliderShow/Testimonials";
import Image from 'next/image';
import { LiaExchangeAltSolid } from "react-icons/lia";

const Home = () => {
  return (
    <div>
      <div className="container w-4/5 flex flex-col justify-center gap-y-4 mx-auto mt-8">
        <QuotesSlider />
        <div className="w-full">
          <div className=" rounded-sm w-80 m-auto text-3xl font-bold flex justify-center bg-gray-200 text-center py-2 mt-4 text-gray-600">
            <Image
              src='/image.gif'
              alt="Example GIF"
              width={50}
              height={20}
              className="mx-2"
            />
            <h2 className="w-auto">Classes&Courses</h2>
          </div>
          <div className="flex justify-evenly items-center border mt-4 p-1">
            <ClassesCourses type="Classes" />
            <div><LiaExchangeAltSolid size={40} />
            </div>
            <ClassesCourses type="Courses" />

          </div>
        </div>
        <div className="w-full">
          <div className=" rounded-sm w-80 m-auto text-3xl font-bold flex justify-center bg-gray-200 text-center py-2 mt-4 text-gray-600">
            <Image
              src='/image.gif'
              alt="Example GIF"
              width={50}
              height={20}
              className="mx-2"
            />
            <h2 className="w-auto">Posts</h2>
          </div>
          <div className="mt-4">

          <Posts />
          </div>
        </div>

        <div className="w-full">
          <div className=" rounded-sm w-80 m-auto text-3xl font-bold flex justify-center bg-gray-200 text-center py-2 mt-4 text-gray-600">
            <Image
              src='/image.gif'
              alt="Example GIF"
              width={50}
              height={20}
              className="mx-2"
            />
            <h2 className="w-auto">Testimonial</h2>
          </div>
          <Testimonial />
        </div>

        <div className="w-full">
          <div className="w-80 rounded-sm m-auto text-3xl font-bold flex justify-center bg-gray-200 text-center py-2 mt-4 text-gray-600">
            <Image
              src='/image.gif'
              alt="Example GIF"
              width={50}
              height={20}
              className="mx-2"
            />
            <h2 className="">Reviews</h2>
          </div>
          <div className="flex gap-x-10 w-5/6 m-auto mt-4">
            <StudentsReviews type='Students' />
            <StudentsReviews type='Teachers' />
          </div>
        </div>
        <div className="w-full mb-4">
          <div className="w-80 rounded-sm m-auto text-3xl font-bold flex justify-center bg-gray-200 text-center py-2 mt-4 text-gray-600">
            <Image
              src='/image.gif'
              alt="Example GIF"
              width={50}
              height={20}
              className="mx-2"
            />
            <h2 className="">Contact Us</h2>
          </div>
          <div className="flex gap-x-10 w-5/6 m-auto mt-4">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
