import './style.css'

export function Banner() {

    return (
        <div className="flex items-center justify-center banner w-full h-[700px] max-[1000px]:h-[500px] mt-[100px]">
            <div className='flex flex-col h-full gap-[30px] items-start justify-center w-[70%]'>
                <p className='font-semibold'>
                    Spring / Summer Collection 2017
                </p>

                <p className='text-[80px] leading-[85px] max-[1000px]:text-[40px] max-[1000px]:leading-[45px]'>
                    Get up to 30% Off <br />  New Arrivals
                </p>

                <button className='w-[130px] rounded-md text-[13px] font-semibold  h-[40px] bg-red-500 text-white hover:opacity-75'>
                    SHOP NOW
                </button>
            </div>
        </div>
    )
} 
