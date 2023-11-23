import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaSlack, FaGithub, } from "react-icons/fa";

//////////////////// creates the header section with TailWinds CSS ////////////////////////////////////////////////////////////////////////////////////////////
const Header = () => {
    return (
        <div id="header">
        <img className="w-full h-screen object-cover" src="Image/gas_mask_copy.jpg" 
        alt="/" 
        />
        <div className="w-full h-screen absolute top-0 left-0 bg-blue-800/30" >
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center  items-center ">
            <h1 className="sm:text-5xl text-4xl font-bold text-gray-200 text-center">I'm Kevin Rice,</h1>
            <h2 className="flex sm:text-3xl text-gray-200">
            <TypeAnimation ////////////// creates the typing animation ////////////////////////////////////////////////////////////////////////////////////////////
                splitter={(str) => str.split(/(?= )/)} // 'Lorem ipsum dolor' -> ['Lorem', ' ipsum', ' dolor']
                sequence={[
                  'an aspiring Full Stack Developer, inspired to learn and grow. My skills were developed at The University Of Central Florida Coding Bootcamp, where I learned to build full stack applications using React, Node, Express, and MongoDB. The pace of technology fascinates me and I enjoy learning new skills and building unique apps! The course was challenging and taught me the best practices and efficient time management in order to prepare me for working as a Web Development Engineer. I am currently looking for a position as a Full Stack Developer. ',
                  6000,
                  '',
                ]}
                speed={{ type: 'keyStrokeDelayInMs', value: 200 }}
                omitDeletionAnimation={true}
                style={{ fontSize: '1em',  width: '900px', textAlign: 'center', color: 'white', }}
                repeat={Infinity}
                // style={{
                //     height: '200px',
                //     width: '600px',
                    
                //     fontSize: '1em',
                //     paddingLeft: '2px',
                // }}
                // sequence={[
                // // Same substring at the start will only be typed out once, initially
                //     'I am an aspiring Full Stack Developer, inspired to learn and grow',
                //     2000, // wait 2s before replacing "Mice" with "Hamsters"
                //     'Coder',
                //     2000,
                //     'Tech Enthusiast',
                //     2000,
                //     'React Developer',
                //     2000
                // ]}
                // wrapper="span"
                // cursor={true}
                // speed={50}
                // repeat={Infinity}
                // deletionSpeed={90}
            />    
            </h2>
            <div className="flex justify-between items-center pt-6 max-w-[80px] w-full text-gray-200">
                <a href="https://app.slack.com/client/T056YAJ4MPF/D05D0V54751" target="_blank" rel="noopener noreferrer">
                    <FaSlack className="cursor-pointer" size={20}/> 
                </a>
                <a href="https://github.com/DirtyRice901" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="cursor-pointer" size={20}/> 
                </a> 
            </div>

        </div>
        </div>
    </div>
    );
};

export default Header;