// pages/index.tsx
'use client'
import React, { useState } from "react";
import PhoneCard from "@/components/PhoneCard";
import SearchBar from "@/components/SearchBar";
import CustomFilter from "@/components/CustomFilter";
import {phoneData} from "@/constants";

const HomePage = ({}) => {

    return (
        <div className='mt-12 padding-x padding-y max-width' id='discover'>
            <div className='home__text-container'>
                <h1 className='text-4xl font-extrabold'>Phone Catalogue</h1>
                <p>Explore the phones you like</p>
            </div>

            <div className='home__filters'>
                <SearchBar
                />
                <div className='home__filter-container'>
                    <CustomFilter/>
                    <CustomFilter/>
                </div>
            </div>
            <section>
                <div className='home__cars-wrapper'>
                    {Object.entries(phoneData).flatMap(([manufacturer, models]) =>
                        models.map((phone, index) => <PhoneCard key={index} phone={phone} />)
                    )}
                </div>
            </section>
        </div>
    );
};

export default HomePage;
