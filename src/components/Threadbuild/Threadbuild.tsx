import "./Threadbuild.css";
import Bulb from "../../assets/bulb.png";
import Chat from "../../assets/chat.png";
import Help from "../../assets/help.png";
import Flower from "../../assets/flower.png";
import { Data } from "../../Data";
import { useState } from "react";

const Threadbuild = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const { tasks } = Data;
  return (
    <div className="thread-card">
      <div className="t-title">
      {tasks[0].assets[1].asset_title} <span className="info"> i</span>
      </div>
      <div className="t-description">
        <span>Description :</span>{tasks[0].assets[1].asset_description}
      </div>
      <div className="thread-a"><i
              onClick={toggleExpand}
              className={`fa-solid ${
                isExpanded ? "fa-angle-up" : "fa-angle-down"
              }`}
            ></i>
        Thread A
      </div>

      <div className="thread-body">
       {
        isExpanded && 
         <div className="sub-thread">
          <div className="sub-t1">
            <div className="sub-title">Sub thread 1</div>
            <div className="sub-input">
              <input type="text" placeholder="Enter Text here" />
            </div>
          </div>
          <div className="sub-t1">
            <div className="sub-title">Sub Interpretation 1</div>
            <div className="sub-input">
              <input type="text" placeholder="Enter Text here" />
            </div>
          </div>
        </div>
       }
        <div className="thread-options">
          <div className="t-options">
            <div className="t-icons">
              <img src={Bulb} alt="bulb" />
              <img src={Chat} alt="chat" />
              <img src={Help} alt="help" />
              <img src={Flower} alt="flower" />
            </div>
            <div className="t-selection">
              <div className="selection">
                Select Categ <i className="fa-solid fa-angle-down"></i>
              </div>
              <div className="selection">
                Select Proces <i className="fa-solid fa-angle-down"></i>
              </div>
            </div>
          </div>
          <div className="t-add">
            <i className="fa-solid fa-plus"></i> Sub-thread
          </div>
        </div>
        <div className="sub-t1">
            <div className="sub-title">Summary for Thread A</div>
            <div className="sub-input">
              <input type="text" placeholder="Enter Text here" />
            </div>
          </div>
      </div>
    </div>
  );
};

export default Threadbuild;
