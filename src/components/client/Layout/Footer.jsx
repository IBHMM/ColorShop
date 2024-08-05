import { FaFacebookF, FaInstagram, FaTwitter, FaSkype, FaPinterestP } from 'react-icons/fa';

export function Footer() {
    return (
        <div className="w-full flex items-center justify-center py-4 mt-[100px]">
            <div className="w-[65%] flex items-center justify-between flex-wrap max-[600px]:items-center max-[600px]:justify-center ">
                <div className='flex flex-col gap-[100px] max-[600px]:items-center max-[600px]:justify-center'>
                    <div className='flex items-center justify-start gap-[30px] text-gray-600 max-[600px]:flex-col max-[600px]:gap-0'>
                        <p>Blog</p>
                        <p>FAQ's</p>
                        <p>Contact us</p>
                    </div>
                    <div className='max-[600px]:text-center max-[600px]:mt-[-50px] max-[600px]:mb-[50px]'>
                        ©2018 All Rights Reserverd. This template is made with <span className='text-red-500'>by Colorlib</span>
                    </div>
                </div>
                <div className="flex space-x-6 items-start justify-start h-[150px]">
                    <a href="https://facebook.com" className="text-gray-500 hover:text-red-500 transition-colors duration-300">
                        <FaFacebookF size={15} />
                    </a>
                    <a href="https://instagram.com" className="text-gray-500 hover:text-red-500 transition-colors duration-300">
                        <FaInstagram size={15} />
                    </a>
                    <a href="https://twitter.com" className="text-gray-500 hover:text-red-500 transition-colors duration-300">
                        <FaTwitter size={15} />
                    </a>
                    <a href="https://skype.com" className="text-gray-500 hover:text-red-500 transition-colors duration-300">
                        <FaSkype size={15} />
                    </a>
                    <a href="https://pinterest.com" className="text-gray-500 hover:text-red-500 transition-colors duration-300">
                        <FaPinterestP size={15} />
                    </a>
                </div>
            </div>
        </div>
    );
}
