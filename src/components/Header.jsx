import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaSlack, FaGithub, } from "react-icons/fa";

const Header = () => {
    return (
        <div id="header">
        <img className="w-full h-screen object-cover" src="Image/gas_mask_copy.jpg" 
        alt="/" 
        />
        <div className="w-full h-screen absolute top-0 left-0 bg-blue-600/30" >
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center  items-center ">
            <h1 className="sm:text-5xl text-4xl font-bold text-gray-200 text-center">I'm Kevin Rice</h1>
            <h2 className="flex sm:text-3xl text-gray-200">
            <TypeAnimation
                style={{
                    height: '200px',
                    width: '600px',
                    
                    fontSize: '1em',
                    paddingLeft: '5px',
                }}
                sequence={[
                // Same substring at the start will only be typed out once, initially
                    'I am an aspiring Full Stack Developer, inspired to learn and grow',
                    2000, // wait 2s before replacing "Mice" with "Hamsters"
                    'Coder',
                    2000,
                    'Tech Enthusiast',
                    2000,
                    'React Developer',
                    2000
                ]}
                wrapper="span"
                cursor={true}
                speed={50}
                repeat={Infinity}
                deletionSpeed={90}
            />    
            </h2>
            <div className="flex justify-between items-center pt-6 max-w-[80px] w-full text-gray-200">
                <FaSlack className="cursor-pointer" size={20}/> 
                <FaGithub className="cursor-pointer" size={20}/> 
            </div>

        </div>
        </div>
    </div>
    );
};

export default Header;