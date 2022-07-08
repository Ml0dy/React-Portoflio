import React from "react"
import myPicture from "../assets/images/myImage.jpg"

const Overviewbar = ({ name, surname }) => (
  <div className="infoContainer">
    <div className="basicInfo">
      <img className="myImageLogo" src={myPicture} alt="My profile" />
      <h1>
        {name} {surname}
      </h1>
    </div>
    <div className="menuBookmarks">
      <ul>
        <li>
          <a href="#">Career</a>
        </li>
        <li>
          <a href="#">My CV</a>
        </li>
        <li>
          <a href="#">Studies</a>
        </li>
        <li>
          <a href="#">Skills</a>
        </li>
      </ul>
    </div>
    <div className="myLinks">
      <span>GIT FB LINKEDIN </span>
    </div>
  </div>
)

export default Overviewbar
