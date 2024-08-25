"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../Assets/images/Logo.svg";
import profile from "../../Assets/images/profile.svg";
import search from "../../Assets/images/search-normal.svg";
import shoppingBag from "../../Assets/images/shopping-bag.svg";
import heart from "../../Assets/images/heart.svg";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      {/* first section start */}
      <div className="headerFirstSection">
        <button className="hamburger" onClick={toggleMenu}>
          &#9776;
        </button>
        <div className="logoImage">
          <Image src={logo} alt="Logo" width={100} height={30} /> 
        </div>
        <div>
          <h1 className="LOGO">LOGO</h1>
        </div>

        <div className="icons">
          <Image src={search} alt="Search icon" width={24} height={24} />
          <Image src={heart} alt="Heart icon" width={24} height={24} />
          <Image src={shoppingBag} alt="Shopping bag icon" width={24} height={24} />
          <Image src={profile} alt="Profile icon" width={24} height={24} />
          <select name="language" id="language-select">
            <option value="ENG">ENG</option>
            {/* Add other language options if needed */}
          </select>
        </div>
      </div>
      {/* first section end */}
      
      {/* second section start */}
      <div className={`headerSecondSection ${isMenuOpen ? 'open' : ''}`}>
        <h3 className="secondSectionItems">SHOP</h3>
        <h3 className="secondSectionItems">SKILLS</h3>
        <h3 className="secondSectionItems">STORIES</h3>
        <h3 className="secondSectionItems">ABOUT</h3>
        <h3 className="secondSectionItems">CONTACT US</h3>
      </div>
      {/* second section end */}
      
      {/* third section starts */}
      <div className="headerThirdSection">
        <h1 className="DiscoverProducts">DISCOVER OUR PRODUCTS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>
      {/* third section end */}
    </header>
  );
};

export default Header;
