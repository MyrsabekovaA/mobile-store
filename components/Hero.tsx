"use client"
import Image from "next/image";
import CustomButton from "@/components/CustomButton";
const Hero =() => {
    const handleScroll = () => {
        const nextSection = document.getElementById("discover");

        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">
                    Find you best choice quickly and easily!
                </h1>

                <p className="hero__subtitle">
                    Looking for the best option? Save your money with us!
                </p>

                <CustomButton
                title="Explore Phones"
                containerStyles="bg-primary-blue text-white rounded-full mt-10"
                handleClick={handleScroll}
                />
            </div>

            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src="/iphone.png" alt={"phone"}
                    width={300} height={300}/>
                </div>
                <div>
                    <div className="hero__image-overlay"/>
                </div>
            </div>
        </div>
    )
}

export default Hero