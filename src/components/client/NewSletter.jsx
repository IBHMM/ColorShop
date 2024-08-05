

export function NewSettler() {

    return (
        <div className="w-full flex items-center justify-center mt-[50px] bg-gray-100 h-[160px]">
            <div className="flex items-center justify-between w-[65%] flex-wrap py-5 text-center gap-[30px] max-[700px]:w-full">

                <div className="felx flex-col items-start justify-start max-[700px]:justify-center max-[700px]:items-center max-[700px]:w-full">
                    <p className="text-[25px] font-semibold">Newsletter</p>
                    <p className="mt-[-5px] text-[14px]">Subscribe to our newsletter and get 20% off your first purchase</p>
                </div>

                <div className="flex items-center justify-center max-[800px]:w-full">
                    <input type="email" name="email" id="email" className="w-[350px] h-[40px] border-none pl-4 focus:border-none" placeholder="Your Email" />
                    <button className="w-[100px] h-[40px] bg-red-500 text-white">
                        SUBSCRIBE
                    </button>
                </div>

            </div>
        </div>
    )
}