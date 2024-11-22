import { useState } from "react";
import { Data } from "../../Data";
import "./ThreadCard2.css";

const ThreadCard2 = () => {
  const { tasks } = Data;

  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  const toggleExpand1 = () => {
    setIsExpanded1(!isExpanded1);
  };
  const toggleExpand2 = () => {
    setIsExpanded2(!isExpanded2);
  };

  return (
    <div className="thread2-card">
      <div className="t2-title">
        {tasks[0].assets[3].asset_title}{" "}
        <span className="information2"> i</span>
      </div>
      <div className="threadcard2-description">
        <span> Description</span> : {tasks[0].assets[3].asset_description}
      </div>
      <div className="body2">
        <div className="b2-intro">
          <div className="b2-title">
            <i
              onClick={toggleExpand}
              className={`fa-solid ${
                isExpanded ? "fa-angle-up" : "fa-angle-down"
              }`}
            ></i>
            Introduction
          </div>
          {isExpanded && (
            <div className={`b2-content ${isExpanded ? "expanded" : ""}`}>
              The 4SA Method, How to bring a idea into progress?
              <span className="seemore">See more</span>
            </div>
          )}
        </div>
        <div className="b2-thread">
          <div className="b2-threadbody">
            <div className="b2-title">
              <i
                onClick={toggleExpand1}
                className={`fa-solid ${
                  isExpanded1 ? "fa-angle-up" : "fa-angle-down"
                }`}
              ></i>{" "}
              Thread A
            </div>
            {isExpanded1 && (
              <div className="b2-content">
                How are you going to develop your stratergy ? Which method are
                you going to use to develop a stratergy ? What if the project is
                lengthy?
                <span className="seemore">See more</span>
              </div>
            )}
          </div>
          <div className="b2-threadexm">
            <div className="b2-title">
              <i
                onClick={toggleExpand2}
                className={`fa-solid ${
                  isExpanded2 ? "fa-angle-up" : "fa-angle-down"
                }`}
              ></i>{" "}
              Example 1
            </div>
            {isExpanded2 && (
              <div className="b2-content">
                You have a concept , How will you put into progress?
                <span className="seemore">See more</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreadCard2;
