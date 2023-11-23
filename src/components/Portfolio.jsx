import React from "react";
import PortfolioItem from "./PortfolioItem";
import grabImg from "../assets/grab.png";
import reelImg from "../assets/reel.png";
import textImg from "../assets/text.png";
import passwordgenImg from "../assets/passwordgen.png";



const Portfolio = () => {
    return (
        <div id="portfolio" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Portfolio</h1>
            <p className="text-center py-8">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime nisi incidunt pariatur eveniet animi atque facere! Dolores asperiores ratione nam fugit recusandae fuga soluta, deleniti ab praesentium quisquam qui quas!
            </p>
            <div className="grid sm:grid-cols-2 gap-12">
                <PortfolioItem img={grabImg} title="Grab My Password App" urls={["https://grab-my-password-23e7faf05060.herokuapp.com/"]} />
                <PortfolioItem img={reelImg} title="Reel Tracks App" urls={["https://ricky-sama.github.io/Reel-Tracks/"]} />
                <PortfolioItem img={textImg} title="PWA Text Editor App" urls={["https://pwa-text-editor901-332321d741be.herokuapp.com/"]} />
                <PortfolioItem img={passwordgenImg} title="Pass Genie" urls={["https://dirtyrice901.github.io/Password-Generator/"]} />
            </div>
        </div>
    );
    
}

export default Portfolio;