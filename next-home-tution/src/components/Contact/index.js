
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import ContactForm from './ContactForm';

export default function Contact() {
    return (
        <div className="w-full flex">

            <div className=" w-1/2 p-4 flex flex-col justify-evenly">
                <div className=''>
                    <p>Contact Us: </p>
                    <p>news@latestnews.com</p>
                    <p>88272 15783</p>
                </div>
                <div className=''>
                    <p>Address: </p>
                    <p>Zone 2
                        Maharana Pratap Nagar
                        Bhopal, Madhya Pradesh 462021
                        India</p>
                </div>

                <div className='mt-4'>
                    <p>Follow us on: </p>
                    <div className="flex space-x-4 mt-2">
                        <SocialIcon link="#" icon={<FaFacebook size={24} />} />
                        <SocialIcon link="#" icon={<FaTwitter size={24} />} />
                        <SocialIcon link="#" icon={<FaInstagram size={24} />} />
                    </div>
                </div>
            </div>
            <div className="w-1/2 bg-gray-300 rounded-md px-4 py-2">
                <ContactForm />
            </div>
        </div>
    )
}

const SocialIcon = ({ link, icon }) => (
    <Link href={link} className="text-gray-500 hover:text-gray-300">
        {icon}
    </Link>
);