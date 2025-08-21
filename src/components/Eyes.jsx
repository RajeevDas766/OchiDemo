import React, { useEffect, useState } from "react";
const Eyes = () => {
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="eyes w-full h-screen flex items-center justify-center bg-white overflow-hidden">
            <div data-scroll data-scroll-speed="-.7" 
            className="relative w-[220vw] h-[40vw] bg-cover bg-center bg-transparent"
                style={{ backgroundImage: `url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")` }}>

                <div className="absolute top-1/2 left-1/2 flex gap-10 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-white">
                        <div className="relative w-2/3 h-2/3 rounded-full bg-black">
                            <div style={{ transform: `translate(-15%, -100%) rotate(${rotate}deg)` }} className="line absolute top-2/3 left-2/3 -translate-x-[50%] -translate-y-[50%] w-full h3">
                                <div className="w-6 h-6 rounded-full bg-white"></div>
                            </div>
                        </div>
                    </div>

                    <div className="relative w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-white">
                        <div className="relative w-2/3 h-2/3 flex items-center justify-center rounded-full bg-black">
                            <div style={{ transform: `translate(-15%, -120%) rotate(${rotate}deg)` }} className="line absolute top-2/3 left-2/3 -translate-x-[50%] -translate-y-[50%] w-full h3">
                                <div className="w-6 h-6 rounded-full bg-white"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Eyes;
