import calender from "../../../assets/icons/Calender.png";
import ExpertSkills from "../../../assets/icons/ExpertSkills.png";
import ScoreBox from "../ScoreBox/ScoreBox";
import PostDescription from "../PostDescription/PostDescription";
import Client from "../Client/Client";
import Actions from "../Actions/Actions";
import Note from "../Notes/Note";

const ProjectRequirement = (props) => {

    return (
        <div className="middle-section">
            <div className="d-flex p-2">
                <div className="length length-1">
                    <img className='length-img' src={calender} alt="Calender" />
                    <div className='project-length-main'>
                        <span className="less-month">Less than a month</span>
                        <p className="project-lenght">Project Length</p>
                    </div>
                </div>
                <div className='length'>
                    <img className='length-img' src={ExpertSkills} alt="ExpertSkills" />
                    <div className='project-length-main'>
                        <span className="less-month">Expert</span>
                        <p className="project-lenght">Skills</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectRequirement