import './ProjectCard.css';
import { Data } from '../../Data';

const ProjectCard = () => {
  const { tasks } = Data;

  return (
    <div className="thread-card">
      <div className="c-title">{tasks[0].assets[0].asset_title}<span className="info"> i</span></div>
      <div className="c-description">
      <span>Description:</span> {tasks[0].assets[0].asset_description}
      </div>
      <div className="video">
  {tasks[0]?.assets[0]?.asset_content ? (
    <iframe
      width="600"
      height="400"
      src={tasks[0].assets[0].asset_content}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  ) : (
    <p>Video not available</p>
  )}
</div>

    </div>
  );
};

export default ProjectCard;
