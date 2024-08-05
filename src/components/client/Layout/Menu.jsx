import { useState } from 'react';
import close from '../../../assets/icons/close.png';
import login from '../../../assets/icons/login.png';
import logout from '../../../assets/icons/logout.png';
import arrow_down from '../../../assets/icons/down-arrow.png';
import '../../../App.css'

export function Menu({ setIsopen, isopen, handleSignout}) {

    const [isAccountOpen, setIsAccountOpen] = useState(false);

    const toggleAccount = () => {
        setIsAccountOpen(!isAccountOpen);
    };

    return (
        <div className={`menu fixed h-screen top-0 flex items-start justify-start bg-white right-0 transition-all duration-300 w-[50%] ${isopen ? "menu-open" : "menu-close"}`} style={{zIndex: "1000"}}>
            <div
                onClick={() => setIsopen(false)}
                className="hover:opacity-35 transition-all duration-200 w-[35px] h-[35px] flex items-center justify-center absolute top-[30px] right-5"
            >
                <img src={close} alt="close" className="w-[20px] h-[20px]" />
            </div>

            <ul className="flex flex-col items-end w-full justify-start mt-[100px] font-semibold text-[15px]">
                <li
                className="hover:opacity-50 cursor-pointer transition-all duration-200 border-t w-full flex h-[60px] items-center justify-end pr-5"
                onClick={toggleAccount}
                >
                MY ACCOUNT
                <div
                    className="hover:opacity-35 transition-all duration-200 w-[35px] h-[35px] flex items-center justify-center"
                >
                    <img src={arrow_down} alt="arrow down" className="w-[10px] h-[10px]" />
                </div>
                </li>
                <ul className={`overflow-hidden flex flex-col items-end w-full font-normal text-[15px] transition-all duration-300 ${isAccountOpen ? 'max-h-[100px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <li className="hover:opacity-50 cursor-pointer transition-all duration-200 w-full flex h-[40px] items-center justify-end pr-5">
                    Sign In
                    <div
                    className="hover:opacity-35 transition-all duration-200 w-[35px] h-[35px] flex items-center justify-center"
                    >
                    <img src={login} alt="login" className="w-[15px] h-[15px]" />
                    </div>
                </li>
                <li 
                    onClick={handleSignout}
                    className="hover:opacity-50 cursor-pointer transition-all duration-200 w-full flex h-[40px] items-center justify-end pr-5">
                    Sign Out
                    <div
                    className="hover:opacity-35 transition-all duration-200 w-[35px] h-[35px] flex items-center justify-center"
                    >
                    <img src={logout} alt="logout" className="w-[15px] h-[15px]" />
                    </div>
                </li>
                </ul>
                <li className="hover:opacity-50 cursor-pointer transition-all duration-200 border-t w-full flex h-[60px] items-center justify-end pr-5">
                HOME
                </li>
                <li className="hover:opacity-50 cursor-pointer transition-all duration-200 border-t w-full flex h-[60px] items-center justify-end pr-5">
                SHOP
                </li>
                <li className="hover:opacity-50 cursor-pointer transition-all duration-200 border-t w-full flex h-[60px] items-center justify-end pr-5">
                PROMOTION
                </li>
                <li className="hover:opacity-50 cursor-pointer transition-all duration-200 border-t w-full flex h-[60px] items-center justify-end pr-5">
                BLOG
                </li>
                <li className="hover:opacity-50 cursor-pointer transition-all duration-200 border-t border-b w-full flex h-[60px] items-center justify-end pr-5">
                CONTACT
                </li>
            </ul>
        </div>
    );
}
