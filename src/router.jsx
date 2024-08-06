import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/client/Home";
import { Client } from "./pages/client";
import { CheckAuth } from "./loaders/client";
import { Signin } from "./pages/client/Signin";
import { SingInAction, SignUpAction } from "./actions/client/Authentication";
import { SignUp } from "./pages/client/Signup";
import { Card, Products } from "./loaders/client/products";
import { Cart } from "./pages/client/Cart";
import { Admin } from "./pages/admin";
import { ProductsAdmin } from "./components/admin/Layout/Product.jsx";
import { CheckAdmin, GetAllData } from "./loaders/admin/index.js";
import { AddProductForm } from "./components/admin/AddProduct.jsx";
import { SignIn } from "./components/admin/Singin.jsx";
import { Liked } from "./pages/client/Liked.jsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Client />,
        loader: CheckAuth,
        children: [
            {
                path: 'home',
                element: <Home />,
            },
            {
                path: 'cart',
                loader: Products,
                element: <Cart />
            },
            {
                path: 'liked',
                loader: Products,
                element: <Liked />
            }
        ]
    },
    {
        path: "/admin",
        element: <Admin />,
        loader: CheckAdmin,
        children: [
            {
                path: 'addproduct',
                element: <AddProductForm />,
            },
            {
                path: 'products',
                loader: GetAllData,
                element: <ProductsAdmin />
            },
            {
                path: 'login',
                loader: CheckAdmin,
                element: <SignIn />
            }
        ]
    },
    {
        path: 'signin',
        loader: CheckAuth,
        action: SingInAction,
        element: <Signin />
    },
    {
        path: 'signup',
        action: SignUpAction,
        element: <SignUp />
    }
])