import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Product } from '../../components/client/Layout/Product';

export function Cart() {
    const [cart, setCart] = useState([]);
    const [wishlist, setWishList] = useState([]);
    const loaderdata = useLoaderData();

    useEffect(() => {
        if (loaderdata.card) {
            setCart(loaderdata.card.card);
            setWishList(loaderdata.wishlist.wishlist);
        }
    }, [loaderdata]);


    return (
        <div className='w-full flex items-center justify-center mt-[200px] h-full'>
            <div className='w-[70%] flex items-center gap-[20px]'>
                {
                    cart.length === 0 ? (
                        <p className='text-[20px] font-bold'>Your cart is empty</p>
                    ) : (
                        cart.map((item, index) => (
                            <Product key={index} product={item} wishlist={wishlist} cardData={cart} setCart={setCart}/>
                        ))
                    )
                }
            </div>
        </div>
    );
}
