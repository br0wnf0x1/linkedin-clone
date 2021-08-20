import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        "Mark Daniel Gutierrez Just Built This Clone",
        "Top News - 5783 readers"
      )}
      {newsArticle(
        "COVID-19 Gets tougher with Delta: PH Updates",
        "Top News - 4277 readers"
      )}
      {newsArticle("Cardano Surges to New High", "Crypto - 942 readers")}
      {newsArticle("Is Redux Way Too Good?", "Programming - 878 readers")}
      {newsArticle(
        "SpaceX Plans Orbital Testing for Starship",
        "Space Exploration - 1003 readers"
      )}
      {newsArticle(
        "Tesla Cybertruck Gets Delayed",
        "Cars & Auto - 622 readers"
      )}
    </div>
  );
}

export default Widgets;
