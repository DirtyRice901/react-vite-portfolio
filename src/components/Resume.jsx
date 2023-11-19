import React from "react";
import ResumeItem from "./Resumeitem";

const ResumeData = [
   {
        year: 2023,
        title: "Front-End Developer",
        duration: "06/20 - 12/14",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
   },
    {
          year: 2023,
          title: "Node.js Developer",
          duration: "06/20 - 12/14",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus in massa tempor nec feugiat nisl."
    },
    {
          year: 2023,
          title: "JavaScript Developer",
          duration: "06/20 - 12/14",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
          year: 2023,
          title: "Express.js Developer",
          duration: "06/20 - 12/14",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
    },
    {
          year: 2023,
          title: "MongoDB Developer",
          duration: "06/20 - 12/14",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
    },
    {
          year: 2023,
          title: "React.js Developer",
          duration: "06/20 - 12/14",
          description: "pretium fusce id velit ut"
    },
    {
          year: 2023,
          title: "Backend-End Developer",
          duration: "06/20 - 12/14",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
    },
    
]
const Resume = () => {
    return (
        <div id="resume" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Resume</h1>
            {ResumeData.map((item, index) => (
                <ResumeItem 
                    key={index} 
                    year={item.year}
                    title={item.title}
                    duration={item.duration}
                    description={item.description}
                />
            ))}
            
        </div>
    );
};

export default Resume;