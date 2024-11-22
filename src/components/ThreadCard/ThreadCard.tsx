import { CornerUpLeft, CornerUpRight, Ellipsis } from "lucide-react";
import Arrow from "../../assets/arrow.svg";
import "./ThreadCard.css";
import { Data } from "../../Data";
const ThreadCard = () => {
  const { tasks } = Data;
  return (
    <div className="thread-card">
      <div className="t-title">
      {tasks[0].assets[2].asset_title} <span className="information"> i</span>
      </div>
      <div className="threadcard-description">
        <span> Description</span> : {tasks[0].assets[2].asset_description}
      </div>
      <div className="body">
        <div className="body-title">
          <span>Title</span>
          <div className="title-input">
            <input type="text" />
          </div>
        </div>
        <div className="content-t">
          <span className="content-title">Content</span>
          <div className="body-content">
          <div className="content-options">
            <div className="file-options">
              {[
                "File",
                "Edit",
                "View",
                "Insert",
                "Format",
                "Tools",
                "Table",
                "Help",
              ].map((item) => (
                <span key={item} className="content-option">
                  {item}
                </span>
              ))}
            </div>
            <div className="content-actions">
              <CornerUpLeft size={20} />
              <CornerUpRight size={20} />
              <img src={Arrow} alt="icon" />
              <span className="paragraph">Paragraph</span>
              <Ellipsis size={20} />
            </div>
          </div>

          <div className="content-input">
            <input type="text" />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreadCard;
