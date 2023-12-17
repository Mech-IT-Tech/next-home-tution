
import Link from 'next/link';
import { FaSignInAlt, FaUserPlus, FaBell, FaComments } from 'react-icons/fa';


const NavBar = () => {
    return (
        <nav className="bg-white p-4 border-2 ">
            <div className='w-11/12 m-auto flex justify-between items-center'>
                <div>
                    <div className="container mx-auto ">
                        <div className="text-gray-600 font-bold text-xl m-2">
                            <Link className='flex items-center' href="/">Re<span className='live-box flex'><span className='animated-icon'></span></span>learner <sub className='text-sm mt-2'>Home Tution</sub></Link>
                        </div>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        <div className="hidden md:flex space-x-4">
                            <Link href="/">Home</Link>
                            <Link href="#services">Services</Link>
                            <Link href="#about">About</Link>
                            <Link href="#contact">Contact</Link>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='font-bold'>
                    <Link href={'/'} className="text-gray-600 px-2">
                            Student
                        </Link>
                    <Link href={'/'} className="text-gray-600 px-2">
                            Teacher
                        </Link>
                    <Link href={'/'} className="text-gray-600 px-2">
                            Test
                        </Link>
                    <Link href={'/'} className="text-gray-600 px-2">
                            Posts
                        </Link>
                    <Link href={'/'} className="text-gray-600 px-2">
                        </Link>
                    </div>
                    <div>
                    <Link href={'/'} className="text-gray-600 px-2">
                            Vedios
                        </Link>
                    <Link href={'/'} className="text-gray-600 px-2">
                            Galaries
                        </Link>
                    <Link href={'/'} className="text-gray-600 px-2">
                            blogs
                        </Link>
                    <Link href={'/'} className="text-gray-600 px-2">
                            Career
                        </Link>
                    <Link href={'/'} className="text-gray-600 px-2">
                        Guid
                        </Link>
                    </div>
                </div>
                <div>
                    <div className="flex space-x-4 text-xs">
                        <Link href={'/'} className="text-gray-600 px-2">
                            <FaComments size={20} />
                            {/* <span>Chat</span> */}
                        </Link>
                        <Link href={'/'} className="text-gray-600">
                            <FaBell size={20} />
                            {/* <span>Notification</span> */}
                        </Link>
                        <Link href={'/'} className="text-gray-600 flex flex-col justify-center items-center px-2 py-1 order">
                            <FaUserPlus size={16} />
                            <span className='underline'>Sign in</span>
                        </Link>
                    </div>

                </div>


                <div className="md:hidden bg-gray-700 p-2">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/contact">Contact</Link>
                </div>

            </div>
        </nav>
    );
};

export default NavBar;
