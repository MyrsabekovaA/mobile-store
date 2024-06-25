"use client";
import React from "react";
import Image from "next/image";


const PhoneCard = ({ phone }) => {
    const { model, description } = phone;
    return (
        <div className="phone-card group">
            <div className="phone-card__content">
                <h3 className="text-xl font-semibold">{model}</h3>
                <p>{description}</p>
            </div>

            <div className='relative w-full h-40 my-3 object-contain'>
                <Image src="/iphone.png" alt={model} fill priority className='object-contain'/>
            </div>
        </div>
    );
};

export default PhoneCard;
