export function AdminNavbar() {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-semibold">Admin Panel</div>
                <div className="flex space-x-4">
                    <a
                        href="/admin/products"
                        className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                    >
                        Products
                    </a>
                    <a
                        href="/admin/addproduct"
                        className="text-red-500 hover:bg-red-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                        Add Product
                    </a>
                </div>
            </div>
        </nav>
    );
}
