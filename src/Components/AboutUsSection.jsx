import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { assets } from '../assets/assets';

const AboutUsSection = () => {
  return (
    <div className="aboutUsSectionContainer">
      <div className="aboutUsSectionContent">
        <div className="aboutUsSectionCard">
          <h1>ABOUT US</h1>
          <p>
            QuantumQuest Wealth was incorporated in Mauritius on the 8th day of May 2025.
            It is registered as a Private Company Limited by shares.
          </p>
          <NavLink to="/about">
            <button className="exploreButton">
              EXPLORE ALL <FaArrowRightLong />
              <img src={assets.btnBg} alt="" className="btnBgImage" />
            </button>
          </NavLink>
        </div>

        <img className="worldGlobe" src={assets.world_globe} alt="World Globe" />
      </div>
    </div>
  );
};

export default AboutUsSection;
