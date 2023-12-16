// pages/index.tsx

import StudentsReviews from "@/components/Reviews/StudentsReviews";
import QuotesSlider from "@/components/SliderShow/QuotesSlider";
import Testimonial from "@/components/SliderShow/Testimonials";


const Home = () => {
  return (
    <div>
      <div className="container mx-auto mt-8">
        <QuotesSlider />
        <h2 className="text-3xl font-bold bg-green-300 text-center py-2 mt-4">Testimonial</h2>
        <Testimonial />
        <h2 className="text-3xl font-bold bg-green-300 text-center py-2 mt-4">Review</h2>
        <div className="flex gap-x-10 w-5/6 m-auto mt-4 mb-40">
        <StudentsReviews  type='Students' />
        <StudentsReviews type='Teachers' />
        </div>
      </div>
    </div>
  );
};

export default Home;
