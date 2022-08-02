import search from "../../../assets/icons/Icon-1.png";

const ScoreBox = (props) => {
    return (
        <div className="main-box">
            <div className="score-box">
                <span className="nav-icon">
                    <img src={search} alt="seach" className="me-1" />
                </span>
                <span className="hourly">Hourly</span>
                <div className="sub-hourly">$15-$30</div>
            </div>
            <div className="inner-score-box text-center">
                <span className="number-title">9.0</span>
                <div className="custom-border-bottom text-center score">
                    <span>score</span></div>
                <div className="text-center py-1">
                    <span className="nav-icon">
                        <img src={props.source} alt="seach" />
                    </span>
                    <span className="individual">{props.person}</span>
                </div>
            </div>
        </div>
    );
}

export default ScoreBox