// pages/index.tsx

import ClassesCourses from "@/components/ClassesCourses";
import Contact from "@/components/Contact";
import HomeHeadings from "@/components/Headings/HomeHeadings";
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
        <div id="services" className="w-full">
          <HomeHeadings heading={'Classes&Courses'} />
          <div className="flex justify-evenly items-center border mt-4 p-1">
            <ClassesCourses type="Classes" />
            <div><LiaExchangeAltSolid size={40} />
            </div>
            <ClassesCourses type="Courses" />

          </div>
        </div>
        <div className="w-full">
        <HomeHeadings heading={'Posts'} />
          <div className="mt-4">

          <Posts />
          </div>
        </div>

        <div id="about" className="w-full">
          <HomeHeadings heading={'Our Team'} />
          <Testimonial />
        </div>

        <div className="w-full">
        <HomeHeadings heading={'Reviews'} />
          <div className="flex gap-x-10 w-5/6 m-auto mt-4">
            <StudentsReviews type='Students' />
            <StudentsReviews type='Teachers' />
          </div>
        </div>
        <div id="contact" className="w-full mb-4">
        <HomeHeadings heading={'Contact Us'} />
          <div className="flex gap-x-10 w-5/6 m-auto mt-4">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
