"use client"
import Image from "next/image";
import {CustomButtonProps} from "@/types";
const CustomButton = ({ isDisabled, btnType, containerStyles, textStyles, title, rightIcon, handleClick }: CustomButtonProps) => {
    return (
        <div>
            <button
                    disabled={isDisabled}
                    type={btnType || "button"}
                    className={`custom-btn ${containerStyles}`}
                    onClick={handleClick}>
                <span className={`flex-1`}>
                    {title}
                </span>
            </button>
        </div>
    )
}

export default CustomButton