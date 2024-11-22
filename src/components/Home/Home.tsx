
import { Data } from "../../Data";
import JourneyBoard from "../JourneyBoard/JourneyBoard";
import More from "../More/More";
import NoticeBoard from "../NoticeBoard/NoticeBoard";
import ProjectCard from "../ProjectCard/ProjectCard";
import Threadbuild from "../Threadbuild/Threadbuild";
import ThreadCard from "../ThreadCard/ThreadCard";
import ThreadCard2 from "../ThreadCard2/ThreadCard2";
import "./Home.css";

const Home = () => {
  const { tasks, status } = Data;


  return (
    <div className="home">
      <JourneyBoard/>
      <NoticeBoard/>
      <div className="title">
        <span className="topic">Technical Project Management</span>
        <button className="submit-task">{status}</button>
      </div>
      <div className='content'>
          <div className='heading'>
            <h3>{tasks[0].task_title}</h3>
          </div>
          <div className='description'>
          {tasks[0].task_description}
          </div>
        </div>
        <div className="cards">
          <ProjectCard/>
          <Threadbuild/>
          <ThreadCard/>
          <ThreadCard2/>
        </div>
        <More/>
    </div>
  );
};

export default Home;
