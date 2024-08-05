import { useEffect, useState } from "react";
import like from '../../../assets/icons/liked.png'
import unlike from '../../../assets/icons/unliked.png'
import '../style.css'
import { Loading } from "./Loading";

export function Product({ product, left, wishlist, cardData, setCart }) {
    const { image, title, price, discount } = product;
    const [liked, setLiked] = useState(false)
    const [card, setCard] = useState(false)
    const discountedPrice = discount ? price - (price * discount / 100) : price;
    const [add, setAdd] = useState(false);
    const [cardL, setCardL] = useState(false);
    const [likeL, setLikeL] = useState(false);
    const isinCart = cardData.some(prd => prd.id == product.id);

    useEffect(() => {
        setLiked(wishlist.some(prd => prd.id == product.id));
        setCard(cardData.some(prd => prd.id == product.id));
    }, [wishlist, cardData])

    const HandleLike = async () => {
        setLikeL(true);
        const method = liked ? "DELETE" : "PATCH";
        try {
            const response = await fetch("https://colorshopapi.onrender.com/api/users/wishlist", {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
                },
                body: JSON.stringify({
                    id: JSON.parse(localStorage.getItem('user')).id,
                    product: product
                })
            });
    
            if (response.ok) {
                const updatedUser = JSON.parse(localStorage.getItem('user'));
                if (liked) {
                    updatedUser.wishlist = updatedUser.wishlist.filter(prd => prd.id !== product.id);
                } else {
                    updatedUser.wishlist.push(product);
                }
                localStorage.setItem('user', JSON.stringify(updatedUser));
                setLiked(!liked);
                setLikeL(false);
            } else {
                setLikeL(false);
            }
        } catch (err) {
            console.error('Error while updating wishlist', err);
            setLikeL(false);
        }
    };

    const HandleAddToCard = async () => {
        setCardL(true);
        const method = isinCart ? "DELETE" : "PATCH";
        try {
            const response = await fetch("https://colorshopapi.onrender.com/api/users/card", {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
                },
                body: JSON.stringify({
                    id: JSON.parse(localStorage.getItem('user')).id,
                    product: product
                })
            });
    
            if (response.ok) {
                const updatedUser = JSON.parse(localStorage.getItem('user'));
                if (liked) {
                    updatedUser.card = updatedUser.card.filter(prd => prd.id !== product.id);
                } else {
                    updatedUser.card.push(product);
                }
                localStorage.setItem('user', JSON.stringify(updatedUser));
                setLiked(!liked);
                setCardL(false);
                if (isinCart) {
                    const c = await response.json();
                    setCart(c.user.card);
                }
            } else {
                console.error('Failed to update card', await response.json());
                setCardL(false);
            }
        } catch (err) {
            console.error('Error while updating card', err);
            setCardL(false);
        }
    }

    return (
        <div
            onMouseEnter={() => setAdd(!add)} 
            onMouseLeave={() => setAdd(!add)}
            className={`${left ? "border-r border-gray-300" : ""} transition-all duration-200 box-border bg-white  text-gray-800 cursor-pointer block font-poppins text-sm font-normal h-[340px] leading-[23px] m-0 p-0 relative text-left w-[222px] select-none hover:shadow-xl hover:border-0 hover:scale-105 hover:z-30 max-[700px]:border-none max-[470px]:w-[100%]`}
        >   
            {
                add && 
                <div className="absolute top-5 right-5" onClick={() => HandleLike()}>
                    {
                        likeL ? <Loading /> : <img src={liked ? like : unlike} alt="like button" className="w-[14px] h-[14px]" />                
                    }
                </div>
            }

            {
                discount > 0 && 
                <div className="absolute top-5 left-5 bg-red-500 text-white rounded-md w-[50px] h-[25px]  flex item-center justify-center text-[13px] font-bold">
                    -${(price*discount)/100}
                </div>
            }

            <img 
                src={image} 
                alt={title} 
                className="w-full h-[60%] object-cover"
            />
            <div className="p-2.5">
                <h2 className="text-base font-semibold mb-2.5 leading-6 h-12 overflow-hidden text-center">{title}</h2>
                <div className="w-full flex items-center justify-center gap-[10px] mt-[20px]">
                    {discount !== 0 && (
                        <p className="text-sm font-bold text-red-500">${discountedPrice.toFixed(2)}</p>
                    )}
                    <p className={`text-sm ${discount ? 'line-through' : ''}`}>${price.toFixed(2)}</p>
                </div>
            </div>
                {
                    add && 
                        <button
                            onClick={() => HandleAddToCard()}    
                            className="block w-[100%] h-[40px]  bg-red-500 text-white border-none cursor-pointer mt-2.5 text-center transition-all duration-100">
                               {cardL ? <Loading /> : isinCart ? "Remove from Cart" : "Add to Cart"}
                        </button>
                }
        </div>
    );
}