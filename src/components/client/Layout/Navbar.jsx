import { useContext, useState, useEffect } from 'react';
import search from '../../../assets/icons/search.png';
import cart from '../../../assets/icons/cart.png';
import userIcon from '../../../assets/icons/user.png';
import menuIcon from '../../../assets/icons/menu.png';
import { Menu } from './Menu';
import { User } from '../../../context/Client/User';
import '../style.css';
import { Link } from 'react-router-dom';

export function Navbar() {
    const [menu, setMenu] = useState(window.innerWidth < 1000);
    const [isOpen, setIsOpen] = useState(false);
    const [card, setCard] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const user = useContext(User);

    useEffect(() => {
        const handleResize = () => setMenu(window.innerWidth < 1000);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        async function fetchCard() {
            const user = JSON.parse(localStorage.getItem('user'));

            if (!user || !user.id) {
                console.warn('User ID is missing');
                return [];
            }

            try {
                const response = await fetch(`https://colorshopapi.onrender.com/api/users/card/${user.id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch card');
                }
                const data = await response.json();
                return data;
            } catch (error) {
                console.error(error);
                return [];
            }
        }

        async function loadCard() {
            const cardData = await fetchCard();
            setCard(cardData.card);
        }

        loadCard();
    }, []);

    const handleSignout = () => {
        localStorage.removeItem('user');
        window.location.reload();
    };

    const cartItemCount = card.length;

    return (
        <>
            <nav className="w-full h-[100px] flex items-center justify-center bg-white shadow-xl zindex fixed top-0">
                <div className="flex items-center justify-between w-[70%] bg-white h-full max-[600px]:w-[90%] max-[1100px]:w-[80%]">
                    <Link to={"/home"}>
                        <span className="text-[25px] text-black font-bold">COLO</span>
                        <span className="text-[25px] ml-[0px] text-orange-600 font-bold">SHOP</span>
                    </Link>

                    <div className="flex items-center justify-between gap-[100px]">
                        {!menu && (
                            <ul className="flex items-center justify-between gap-[30px] font-semibold text-[12px]">
                                <li className="hover:opacity-50 cursor-pointer transition-all duration-150">HOME</li>
                                <li className="hover:opacity-50 cursor-pointer transition-all duration-150">SHOP</li>
                                <li className="hover:opacity-50 cursor-pointer transition-all duration-150">PROMOTION</li>
                                <li className="hover:opacity-50 cursor-pointer transition-all duration-150">BLOG</li>
                                <li className="hover:opacity-50 cursor-pointer transition-all duration-150">CONTACT</li>
                            </ul>
                        )}

                        <div className="flex items-center justify-between gap-[20px]">
                            <div className='hover:opacity-35 transition-all duration-200 w-[35px] h-[35px] flex items-center justify-center rounded-[50%]'>
                                <img src={search} alt="Search" className='w-[14px] h-[14px]' />
                            </div>
                            <div 
                                onMouseEnter={() => setDropdownOpen(true)}
                                onMouseLeave={() => setDropdownOpen(false)}
                                className='relative flex items-center justify-center w-[35px] h-[35px] rounded-[50%] hover:opacity-35 transition-all duration-200'>
                                <img src={userIcon} alt="User" className='w-[14px] h-[14px]' />
                                {dropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-10">
                                        <Link 
                                            to="/liked"
                                            className="block px-4 py-2 text-gray-800 hover:scale-105"
                                        >
                                            Liked
                                        </Link>
                                        <button 
                                            onClick={handleSignout} 
                                            className="block w-full px-4 py-2 text-gray-800 hover:scale-105 text-left"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                            <Link to={"/cart"} className='relative hover:opacity-35 transition-all duration-200 w-[35px] h-[35px] flex items-center justify-center rounded-[50%] bg-gray-100'>
                                <img src={cart} alt="Cart" className='w-[14px] h-[14px]' />
                                {cartItemCount > 0 && (
                                    <Link to={"/cart"} className="absolute -top-2 -right-2 w-[20px] h-[20px] bg-red-600 text-white text-xs flex items-center justify-center rounded-full">
                                        {cartItemCount}
                                    </Link>
                                )}
                            </Link>
                            {menu && (
                                <div className='hover:opacity-35 transition-all duration-200 w-[40px] h-[40px] flex items-center justify-center' onClick={() => setIsOpen(!isOpen)}>
                                    <img src={menuIcon} alt="Menu" className='w-[14px] h-[14px]' />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
            {isOpen && <Menu setIsOpen={setIsOpen} isOpen={isOpen} handleSignout={handleSignout} />}
        </>
    );
}
