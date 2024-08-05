import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/client/Home";
import { Client } from "./pages/client";
import { CheckAuth } from "./loaders/client";
import { Signin } from "./pages/client/Signin";
import { SingInAction, SignUpAction } from "./actions/client/Authentication";
import { SignUp } from "./pages/client/Signup";
import { Card, Products } from "./loaders/client/products";
import { Cart } from "./pages/client/Cart";


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