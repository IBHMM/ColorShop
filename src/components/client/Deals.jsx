import { useEffect, useState } from 'react';
import './style.css'; 

export function Deals() {
    const [time, setTime] = useState({
        day: 2,
        hour: 12,
        minute: 40,
        sec: 50
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prevTime => {
                let { day, hour, minute, sec } = prevTime;
                sec--;
                if (sec < 0) {
                    sec = 59;
                    minute--;
                }
                if (minute < 0) {
                    minute = 59;
                    hour--;
                }
                if (hour < 0) {
                    hour = 23;
                    day--;
                }
                return { day, hour, minute, sec };
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='bg-gray-100 flex items-center justify-center w-full mt-[50px] h-[600px]'>
            <div className="deals w-[90%] max-w-[1200px] min-h-full flex flex-col items-end justify-center">

                <div className='flex flex-col items-center justify-center gap-[30px] h-full max-[1158px]:w-full'>

                    <div className='flex flex-col items-center justify-center mb-[30px]'>
                        <h1 className="text-[30px] md:text-[50px] lg:text-[60px] text-center">Deal Of The Week</h1>
                        <div className="w-[80px] md:w-[100px] h-[3px] bg-red-500"></div>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-[15px] text-center">
                        {Object.entries(time).map(([unit, value]) => (
                            <div
                                key={unit}
                                className='relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] rounded-[50%] bg-white flex items-center justify-center flex-col'
                            >
                                <div className='text-red-500 text-[25px] sm:text-[30px] md:text-[35px] font-bold'>
                                    {value}
                                </div>
                                <div className='text-[12px] sm:text-[14px] md:text-[16px] font-semibold text-black'>
                                    {unit.toUpperCase()}
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className='w-[120px] h-[40px] bg-black text-white hover:opacity-60 transition-all duration-300 rounded-md text-[12px] sm:text-[14px] md:text-[16px]'>
                        SHOP NOW
                    </button>
                </div>
                
            </div>
        </div>
    );
}
