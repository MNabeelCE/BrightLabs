import Client from "../Client/Client";
import Note from '../Notes/Note'
import Actions from "../Actions/Actions";
import ScoreBox from "../ScoreBox/ScoreBox";
import PostDescription from "../PostDescription/PostDescription";
import ProjectRequirement from "../ProjectRequirement/ProjectRequirement";
import Tags from "../Tags/Tags";


const Post = (props) => {
    return (
        <div className="post-section mb-4">
            <div className="sub-post-section">
                <div className="row">
                    <div className="col-8">
                        <div className="row pb-3">
                            <div className="col-2">
                                <ScoreBox person={props.person} source={props.source}/>
                            </div>
                            <div className="col-10 post-minute">
                                <PostDescription/>
                            </div>
                        </div>
                        <Tags/>
                        <ProjectRequirement/>
                    </div>
                    <div className="col-4">
                        <div className="row">
                            <div className="col-7">
                                <Client/>
                            </div>
                            <div className="col-5">
                                <Actions/>
                            </div>
                        </div>
                    </div>
                </div>
                <Note/>
            </div>
        </div>
    );
}

export default Post
