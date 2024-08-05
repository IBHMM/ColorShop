import SwiperDemo from "./Layout/Slider";

export function BestSellers({bestsellers, card, wishlist}) {

    return (
        <div className="felx flex-col w-full items-center justify-center mt-[50px]">

            <div className="flex w-full items-center justify-center flex-col">
                <h1 className="text-[60px]">Best Sellers</h1>
                <div className="w-[100px] h-[3px] bg-red-500"></div>
            </div>

            <div className="w-full flex items-center justify-center">
                <SwiperDemo bestsellers={bestsellers} wishlist={wishlist} card={card}/>
            </div>
        </div>
    )
}