import { useState } from "react";
import "./JourneyBoard.css";
import { Data } from "../../Data";

const JourneyBoard = () => {

  const { tasks } = Data;
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`journeyboard ${isOpen ? "open" : "closed"}`}>
      <div className={`j-title ${isOpen ? "open" : "closed"}`} >
        { isOpen ? "Journey Board" : " " }
        <i onClick={toggleSidebar}
          className={`fa-solid ${
            isOpen ? "fa-circle-arrow-left" : "fa-circle-arrow-right"
          }`}
        ></i>
      </div>
      {
        isOpen ?
        <div className="j-description">
        <span className="j-destitle">Explore the world of management</span>
        <ul className="j-list">
          { tasks[0].assets.map((asset)=>{
            return <li>{asset.asset_title}</li>
          })}
          
        </ul>
      </div>
      : <div className="j-description">
        <div className="j-1">
          1
        </div>

      </div>
      }
    </div>
  );
};

export default JourneyBoard;
