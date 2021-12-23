import React, { useState, useEffect } from "react";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";
import "./Mains.css";
import image from "../assets/NicoRobin.png";
import Punklist from "./PunkList";

const Main = ({ selectedPunk, punklistData }) => {
  const [activePunk, setActivePunk] = useState(punklistData[0]);
  console.log(punklistData[selectedPunk], "ooooooo");
  useEffect(() => {
    setActivePunk(punklistData[selectedPunk]);
  }, [punklistData, selectedPunk]);
  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighLight">
          <div className="punkContainer">
            <img
              classname="selectedPunk"
              src={activePunk.image_original_url}
              alt=""
            />
          </div>
        </div>
        <div className="punkDetails" style={{ color: "#fff" }}>
          <div className="title">
            {activePunk.name}
          </div>
          <span className="itemNumber">.#{activePunk.token_id}</span>
        </div>
        <div className="owner">
          <div className="ownerImageContainer">
            <img src={activePunk.owner.profile_img_url} alt="" />
          </div>
          <div className="ownerDetails">
            <div className="ownerNameHandle">
              <div style={{ color: "white" }}>
               {activePunk.owner.address}
              </div>
              <div className="ownerHandle">@RaviChauhan</div>
            </div>

            <div className="ownerLink">
              <img src={instagramLogo} alt="" />
            </div>
            <div className="ownerLink">
              <img src={twitterLogo} alt="" />
            </div>
            <div className="ownerLink">
              <img src={moreIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
