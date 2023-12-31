import React from "react";

////////////// destructures the props from Portfolio.jsx ////////////////////////////////////////////////////////////////////////////////////////////
const PortfolioItem = ({img, title, urls}) => { 
    return (
        <div className="relative flex items-center justify-center h-full w-full shadow-xl shadow-gray=400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
            <img src={img} alt="/" className="rounded-xl group-hover:opacity-10" />
            <div className="hidden group-hover:block absolute top-[50%] translate-x-[50%] translate-y-[-50%]">
                <h3 className="flex items-center justify-center text-1xl font-bold text-white overflow-auto whitespace-normal">
                    {title}
                </h3>
                <p className="pb-4 pt-2 text-white text-center">React Js</p>
                {urls.map((url, index) => ( ////////////// maps the urls to the portfolio items ////////////////////////////////////////////////////////////////////////////////////////////
                    <a href={url} key={index} className="flex items-center justify-center">
                        <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">Details</p>
                    </a>
                ))}    
            </div>
        </div>
    )
}

export default PortfolioItem
    