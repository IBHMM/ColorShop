import { useNavigate } from 'react-router-dom';
import { Outlet, useLoaderData } from "react-router";
import { Navbar } from "../../components/client/Layout/Navbar";
import { useEffect, useState } from "react";
import { Footer } from '../../components/client/Layout/Footer';

export function Client () {

    const loaderdata = useLoaderData();
    const Navigate = useNavigate();

    useEffect(() => {
        if (!loaderdata) {
            Navigate('/signin', {replace: true})
        }
    }, [loaderdata]);

    return(
        <>  
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}