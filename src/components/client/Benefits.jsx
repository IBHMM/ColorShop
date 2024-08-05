import React from "react";
import { benefits } from "../../constants/Client/Home";

export function Benefits() {

    return (
        <div className="flex justify-center items-center mt-[50px] w-full">
            <div className="flex items-center justify-center w-[70%] gap-[1px] max-[800px]:flex-col max-[800px]:gap-[10px]">
                {benefits.map((benefit, index) => (
                    <div key={index} className="w-[25%] h-[100px] flex items-center justify-center bg-gray-100 p-5 gap-[10px] max-[800px]:w-[100%]">
                        <div className="flex items-center justify-center">
                            <img src={benefit.image} alt="" className="w-[40px] h-[40px]"/>
                        </div>
                        <div className="flex flex-col items-start justify-center">
                            <i className={`fa ${benefit.icon} text-[50px]`}></i>
                            <h1 className="text-[15px] font-bold">{benefit.title}</h1>
                            <p className="text-[10px]">{benefit.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}