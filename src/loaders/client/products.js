export async function Card() {
    const user = JSON.parse(localStorage.getItem('user'));

    try {
        const response = await fetch(`https://colorshopapi.onrender.com/api/users/card/${user.id}`);
        
        if (response) {
            const data = await response.json();
            return data
        }
    }catch(error) {
       return [];
    }
}

export async function Wishlist() {
    const user = JSON.parse(localStorage.getItem('user'));

    try {
        const response = await fetch(`https://colorshopapi.onrender.com/api/users/wishlist/${user.id}`);

        if (response) {
            const data = await response.json();
            return data
        }
    }catch(error) {
       return [];
    }
}

export async function Products() {
    
    const card = await Card();
    const wishlist = await Wishlist();

    return {card: card, wishlist: wishlist}
}