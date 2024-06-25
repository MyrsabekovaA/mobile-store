"use client";
import {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {SearchManufacturer} from "@/components/index";


const Searchbar = () => {
    const [manufacturer, setManuFacturer] = useState("");
    const [model, setModel] = useState("");


    const handleSearch = () => {};

    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <div className='searchbar__item'>
                <SearchManufacturer
                    manufacturer={manufacturer}
                    setManuFacturer={setManuFacturer}
                />
            </div>
        </form>
    )
}

export default Searchbar