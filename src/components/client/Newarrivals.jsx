import { useEffect, useState } from "react";
import { Product } from "./Layout/Product";
import './style.css'; 

export function NewArrivals({wishlist, card}) {
    const [newProducts, setNewProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        fetch("https://colorshopapi.onrender.com/api/products/newarrivals")
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch new arrivals');
                }
                return res.json();
            })
            .then(data => {
                setNewProducts(data);
                setFilteredProducts(data);
            })
            .catch(err => {
                console.error(err);
                setFilteredProducts([]);
                setNewProducts([]);
            });
    }, []);

    useEffect(() => {
        if (filter === "all") {
            setFilteredProducts(newProducts);
        } else {
            setFilteredProducts(newProducts.filter(product => product.category === filter));
        }
    }, [filter, newProducts]);

    return (
        <div className="flex w-full items-center justify-center flex-col gap-[40px] mt-[40px]">
            <div className="flex w-full items-center justify-center flex-col">
                <h1 className="text-[60px]">New Arrivals</h1>
                <div className="w-[100px] h-[3px] bg-red-500"></div>
            </div>

            <div className="flex w-[70%] items-center justify-center transition-all duration-300">
                {["all", "women", "accessories", "men"].map(category => (
                    <button
                        key={category}
                        className={`w-[150px] p-2 h-[40px] font-semibold ${filter === category ? 'bg-red-500 text-white' : 'text-black bg-white border'} hover:opacity-90 transition-all duration-200`}
                        onClick={() => setFilter(category)}
                    >
                        {category.toUpperCase()}
                    </button>
                ))}
            </div>

            <div className="flex items-center justify-center w-[70%] max-w-[calc(222px * 5)] min-[700px]:flex-wrap max-[700px]:grid max-[700px]:grid-cols-2 max-[700px]:w-full max-[700px]:place-items-center transition-all duration-300">
                {filteredProducts.map((product, index) => (
                    <div className={`fade-in-up`} key={product.id}>
                        <Product
                            wishlist={wishlist}
                            cardData={card}
                            product={product}
                            left={(filteredProducts.indexOf(product) + 1) % 5 !== 0}
                            key={product.id} 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
