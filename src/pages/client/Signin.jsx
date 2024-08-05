import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router";
import { SigninForm } from '../../components/client/Singin';
import { User } from '../../context/Client/User'

export function Signin() {

    const laoderdata = useLoaderData();
    const navigate = useNavigate();
    const user = useContext(User)

    useEffect(() => {
        if (laoderdata) {
            user.setUser(...user.user, {...JSON.parse(localStorage.getItem('user'))})
            navigate('/home', {replace: true});
        }
    }, [laoderdata]);

    return (
        <>
            <SigninForm />
        </>
    )
}