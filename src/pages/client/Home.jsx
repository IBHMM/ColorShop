import { useEffect, useState } from "react";
import { Banner } from "../../components/client/Banner";
import { Categories } from "../../components/client/Categories";
import { Deals } from "../../components/client/Deals";
import { NewArrivals } from "../../components/client/Newarrivals";
import {BestSellers} from "../../components/client/BestSellers";
import {Benefits} from "../../components/client/Benefits";
import { Blog } from "../../components/client/Blogs";
import { NewSettler } from "../../components/client/NewSletter";
import { Footer } from "../../components/client/Layout/Footer";

export function Home() {

    const [wishlist, setWishList] = useState([]);
    const [card, setCard] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchWishlist() {
            const user = JSON.parse(localStorage.getItem('user'));

            if (!user || !user.id) {
                console.warn('User ID is missing');
                return [];
            }

            try {
                const response = await fetch(`https://colorshopapi.onrender.com/api/users/wishlist/${user.id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch wishlist');
                }
                const data = await response.json();
                return data;
            } catch (error) {
                console.error(error);
                return [];
            }
        }

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

        async function fetchProducts() {
            try {
                const response = await fetch(`https://colorshopapi.onrender.com/api/products`);
                if (!response) {
                    throw new Error('Failed to fetch card');
                }
                const data = await response.json();
                return data;
            } catch (error) {
                console.error(error);
                return [];
            }
        }

        async function loadWishlist() {
            const wishlistData = await fetchWishlist();
            const cardData = await fetchCard();
            const allProducts = await fetchProducts();
            setWishList(wishlistData.wishlist);
            setCard(cardData.card);
            setProducts(allProducts);
        }

        loadWishlist();
    }, []);


    return (
        <div className="flex items-center justify-between flex-col relative">
            <Banner />
            <Categories />
            <NewArrivals wishlist={wishlist} card={card}/>
            <Deals />
            <BestSellers bestsellers={products} wishlist={wishlist} card={card}/>
            <Benefits />
            <Blog />
            <NewSettler />
        </div>
    )
}