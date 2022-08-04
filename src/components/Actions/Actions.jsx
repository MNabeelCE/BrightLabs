import archive from "../../../assets/icons/archive-icon.png";
import starIcon from "../../../assets/icons/star.png";
import rightTtickIicon from "../../../assets/icons/right-tick.png";
import noteIicon from "../../../assets/icons/note.png";
import unArchive from "../../../assets/icons/ic_round-unarchive.svg";
import deleteIcon from "../../../assets/icons/Vector.svg";
const Actions = () => {
    return (
        <div>
            <div className="btn custom-border mb-2">
                <span className="custom-img">
                    <img src={archive} alt="seach" />
                </span>
                <span>Archive</span>
            </div>
            <div className="btn custom-border mb-2">
                <span className="custom-img">
                    <img src={starIcon} alt="seach" />
                </span>
                <span>Starred</span>
            </div>
            <div className="btn custom-border tick mb-2">
                <span className="custom-img">
                    <img src={rightTtickIicon} alt="seach" />
                </span>
                <span>Applied</span>
            </div>
            <div className="btn custom-border last-btn mb-2">
                <span className="custom-img">
                    <img src={noteIicon} alt="seach" />
                </span>
                <span>Notes</span>
            </div>
            <div className="btn custom-border mb-2">
                <span className="custom-img">
                    <img src={unArchive} alt="unarchive" />
                </span>
                <span>Unarchive</span>
            </div>
            <div className="btn custom-border last-btn mb-2">
                <span className="custom-img">
                    <img src={deleteIcon} alt="delete" />
                </span>
                <span>Delete</span>
            </div>
        </div>
    );
}

export default Actions