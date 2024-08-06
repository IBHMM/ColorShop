import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Product } from '../../components/client/Layout/Product';

export function Liked() {
    const [cart, setCart] = useState([]);
    const [wishlist, setWishList] = useState([]);
    const [loading, setLoading] = useState(false);
    const loaderdata = useLoaderData();

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://colorshopapi.onrender.com/api/users/card/${JSON.parse(localStorage.getItem('user')).id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setCart(data.card);
            setWishList(data.wishlist);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (loaderdata.card) {
            setCart(loaderdata.card.card);
            setWishList(loaderdata.wishlist.wishlist);
        }
    }, [loaderdata]);

    return (
        <div className='w-full flex flex-col items-center mt-[200px] h-full'>
            <button
                onClick={fetchData}
                className='mb-4 px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
                {loading ? 'Refreshing...' : 'Refresh'}
            </button>
            <div className='w-[70%] flex flex-wrap items-center gap-[20px]'>
                {
                    wishlist.length === 0 ? (
                        <p className='text-[20px] font-bold'>Your liked items are empty</p>
                    ) : (
                        wishlist.map((item, index) => (
                            <Product key={index} product={item} wishlist={wishlist} cardData={cart} setCart={setCart}/>
                        ))
                    )
                }
            </div>
        </div>
    );
}
