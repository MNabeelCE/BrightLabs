import clientTick from "../../../assets/icons/client-tick.png";
import location from "../../../assets/icons/location.png";
import fiveStar from "../../../assets/icons/five-star.png";

const Client = () => {
    return (
        <div className="p-3 pt-1 pb-1 client-info-box bg-white">
            <div className="client">
                                        <span className="nav-icon">
                                            <img src={clientTick} alt="seach" />
                                        </span>
                <span className="about-client">About Client</span>
            </div>
            <div className="client">
                                        <span className="nav-icon">
                                            <img src={location} alt="seach" />
                                        </span>
                <span className="location">United State</span>
            </div>
            <div className="client client-stars">
                                        <span>
                                            <img src={fiveStar} alt="seach" />
                                        </span>
                <span>
                                            <img src={fiveStar} alt="seach" />
                                        </span>
                <span>
                                            <img src={fiveStar} alt="seach" />
                                        </span>
                <span>
                                            <img src={fiveStar} alt="seach" />
                                        </span>
                <span>
                                            <img src={fiveStar} alt="seach" />
                                        </span>
                <span className="total-star">
                                            (4.5)
                                        </span>
            </div>
            <div className="rate-client mb-2">
                <p className="mb-1">Spent: <span className="green-rate">$300K+</span></p>
            </div>
            <div className="rate-client mb-2">
                <p className="mb-1">Avrg hourly: <span className="green-rate">$17.8 </span></p>
            </div>
            <div className="rate-client mb-2">
                <p className="mb-1">Projects posted:<span className="total-project">45</span></p>
            </div>
            <div className="rate-client mb-2">
                <p className="mb-1">Hire Rate: <span className="red-rate"> 15%</span></p>
            </div>
            <div className="rate-client mb-2">
                <p className="mb-0">Proposals: <span className="red-rate">5-10</span></p>
            </div>
            <div className="rate-client mb-2">
                <p className="mb-0">Company size: <span className="total-project">1000+</span></p>
            </div>
        </div>
    );
}

export default Client