import { useState } from "react";
import { blogs } from "../../constants/Client/Home";
import './style.css'

export function Blog() {
    const [hover, setHover] = useState(Array(blogs.length).fill(false));

    const handleMouseEnter = (idx) => {
        const newHoverState = [...hover];
        newHoverState[idx] = true;
        setHover(newHoverState);
    };

    const handleMouseLeave = (idx) => {
        const newHoverState = [...hover];
        newHoverState[idx] = false;
        setHover(newHoverState);
    };

    return (
        <div className="flex items-center justify-center w-full mt-[100px] mb-10">
            <div className="flex items-center justify-evenly w-[70%] min-w-[1000px] gap-4 max-[1000px]:min-w-[800px] max-[800px]:flex-col max-[800px]:min-w-[80%] transition-all duration-300">
                {blogs.map((ctg, idx) => (
                    <div 
                        key={idx}
                        className="relative flex items-center justify-center"
                        onMouseEnter={() => handleMouseEnter(idx)}
                        onMouseLeave={() => handleMouseLeave(idx)}
                    >
                        <img src={ctg} alt="" />
                        {hover[idx] && (
                            <div className={`w-[80%] h-[70%] bg-[rgba(255,255,255,0.9)] absolute flex items-center justify-center flex-col gap-3 hover_blog ${hover[idx] ? 'active' : ''}`}>
                                <p className="text-center text-[25px] w-[90%] leading-[26px]">
                                    Here are the trends I see coming this fall
                                </p>
                                <p className="text-gray-500 text-[13px]">
                                    {"by admin | dec 01, 2017".toUpperCase()}
                                </p>
                                <a href="" className="text-red-400 underline font-semibold text-[14px]">
                                    READ MORE
                                </a>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
