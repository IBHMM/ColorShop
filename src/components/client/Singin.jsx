import React, { useEffect, useRef, useState } from 'react';
import { Form, Link, useActionData, useNavigate } from 'react-router-dom';

export function SigninForm() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const data = useActionData();
    const navigate = useNavigate();
    const Inputemail = useRef("email");
    const Inputpassword = useRef("email");

    useEffect(() => {
        if (data == undefined) {
            setLoading(false);
            setError(false);
        }
        else if (data.ok) {
            localStorage.setItem("user", JSON.stringify(data.user));
            navigate('/home', {replace: true})
        }
        else {
            Inputemail.current.value = "";
            Inputpassword.current.value = "";
            setLoading(false)
            setError(true)
        }
    }, [data])

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-indigo-300">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md ">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Sign In</h2>
                <Form method='post'>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            ref={Inputemail}
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
                            ref={Inputpassword}
                            placeholder="Enter your password"
                            className={`shadow appearance-none border ${error ? "border-red-500" : "border-gray-300"} rounded h-[45px] w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type='submit'
                            onClick={() => {
                                setLoading(true);
                            }}
                            className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            {loading ? "Loading..." : "Sign In"}
                        </button>
                        <Link
                            className="inline-block align-baseline font-semibold text-sm text-blue-600 hover:text-blue-800"
                            to={"/signup"}
                        >
                            Create account
                        </Link>
                    </div>
                </Form>
            </div>
        </div>
    );
}


