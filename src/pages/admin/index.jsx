import { useEffect } from 'react';
import {AdminNavbar} from '../../components/admin/Layout/Navbar.jsx'
import { Outlet, useLoaderData, useNavigate } from 'react-router'

export function Admin() {

    const loaderd = useLoaderData();
    const navigate = useNavigate();
    
    console.log(loaderd);

    useEffect(() => {
        if (!loaderd) {
            navigate('/admin/login');
        }
    }, [loaderd])

    return (
        <>
            <AdminNavbar />
            <Outlet />
        </>
    )
}