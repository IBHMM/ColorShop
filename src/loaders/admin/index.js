export async function GetAllData() {
    try{
        const response = await fetch('https://colorshopapi.onrender.com/api/products');

        if (response.status == 200) {
            const data = await response.json();
            return data;
        }else {
            throw new Error('Failed to fetch data');
        }
    }catch(error){
        return [];
    }
}

export const CheckAdmin = () => {
    const admin = localStorage.getItem('admin');
    if (admin) {
        return true;
    }else {
        return false;
    }
}