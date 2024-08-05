import React, { useEffect, useRef, useState } from 'react';
import { Form, Link, useActionData, useNavigate } from 'react-router-dom';

export function SignUpForm() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const data = useActionData();
    const navigate = useNavigate();

    const inputEmail = useRef(null);
    const inputPassword = useRef(null);
    const inputName = useRef(null);
    const inputSurname = useRef(null);

    useEffect(() => {
        if (data === undefined) {
            setLoading(false);
            setError(false);
        } else if (data.ok) {
            navigate('/signin', { replace: true });
        } else {
            inputEmail.current.value = '';
            inputPassword.current.value = '';
            inputName.current.value = '';
            inputSurname.current.value = '';
            setLoading(false);
            setError(true);
        }
    }, [data]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-indigo-300">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Sign In</h2>
                <Form method="post">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            ref={inputName}
                            placeholder="Enter your name"
                            className={`shadow appearance-none border ${error ? "border-red-500" : "border-gray-300"} rounded h-[45px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="surname">
                            Surname
                        </label>
                        <input
                            type="text"
                            id="surname"
                            name="surname"
                            ref={inputSurname}
                            placeholder="Enter your surname"
                            className={`shadow appearance-none border ${error ? "border-red-500" : "border-gray-300"} rounded h-[45px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            ref={inputEmail}
                            placeholder="Enter your email"
                            className={`shadow appearance-none border ${error ? "border-red-500" : "border-gray-300"} rounded h-[45px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            ref={inputPassword}
                            placeholder="Enter your password"
                            className={`shadow appearance-none border ${error ? "border-red-500" : "border-gray-300"} rounded h-[45px] w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            onClick={() => {
                                setLoading(true);
                            }}
                            className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            {loading ? "Loading..." : "Sign Up"}
                        </button>
                        <Link
                            to="/signin"
                            className="inline-block align-baseline font-semibold text-sm text-blue-600 hover:text-blue-800"
                        >
                            I already have account
                        </Link>
                    </div>
                </Form>
            </div>
        </div>
    );
}

