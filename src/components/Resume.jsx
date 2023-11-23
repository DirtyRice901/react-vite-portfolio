import React from "react";
import ResumeItem from "./Resumeitem"; 

//////////////////// creates the resume section and renders resume data ////////////////////////////////////////////////////////////////////////////////////////////
const ResumeData = [
   {
        year: 2023,
        title: "Front-End Developer",
        duration: "06/20 - 12/14",
        description: "Built websites and applications using web languages such as HTML, CSS, and JavaScript that allow users to access and interact with the site or app."
   },
    {
          year: 2023,
          title: "Node.js Developer",
          duration: "06/20 - 12/14",
          description: "Worked with the Node.js runtime environment and its associated libraries and frameworks. It encompasses proficiency in JavaScript programming specifically for server-side and networking applications."
    },
    {
          year: 2023,
          title: "JavaScript Front-end and Backend Developer",
          duration: "06/20 - 12/14",
          description: "Front-end skills using computer programming languages like JavaScript, HyperText Markup Language (HTML), and Cascading Style Sheets (CSS) to design websites. Each language serves a unique purpose. Backend skills to develop databases, write backend logic, and create APIs."
    },
    {
          year: 2023,
          title: "Express.js Developer",
          duration: "06/20 - 12/14",
          description: "Express.js skills building robust single page, multi-page as well as hybrid apps in Node.js. "
    },
    {
          year: 2023,
          title: "MongoDB Developer",
          duration: "06/20 - 12/14",
          description: "MongoDB skills to build and maintain the database that stores the data for the application."
    },
    {
          year: 2023,
          title: "React.js Developer",
          duration: "06/20 - 12/14",
          description: "React.js skills to build and maintain the user interface of the application."
    },
    {
          year: 2023,
          title: "Backend-End Developer",
          duration: "06/20 - 12/14",
          description: "Backend skills to develop databases, write backend logic, and create APIs."
    },
    
]
const Resume = () => {
    return (
        <div id="resume" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 " >
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