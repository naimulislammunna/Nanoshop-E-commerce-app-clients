import TestimonialCard from './TestimonialCard';
import Marquee from 'react-fast-marquee';

const Testimonials = () => {
    return (
        <div className="py-32 my-10 bg-sky-900 w-full">
            <p className="text-lg font-bold text-center text-white">Testimonial</p>
            <h1 className="text-4xl text-center font-bold text-white mb-16">What our Clients say</h1>
            <Marquee>
                <TestimonialCard/>
                <TestimonialCard/>
                <TestimonialCard/>
                <TestimonialCard/>
            </Marquee>
        </div>
    );
};

export default Testimonials;