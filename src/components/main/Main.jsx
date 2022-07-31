import "./Main.css";
import search from '../../../assets/icons/icon-1.png';
import archive from '../../../assets/icons/archive-icon.png';
import starIcon from '../../../assets/icons/star.png';
import rightTtickIicon from '../../../assets/icons/right-tick.png';
import noteIicon from '../../../assets/icons/note.png';
import clientTick from '../../../assets/icons/client-tick.png';
import fiveStar from '../../../assets/icons/five-star.png';
import location from '../../../assets/icons/location.png';
import Individual from '../../../assets/icons/individual.png';
import leftArrow from '../../../assets/icons/left-arrow.png';
import rightArrow from '../../../assets/icons/right-arrow.png';

const Main=() => {
    return (
        <main className="app-wrapper mt-3">
            <div className="app-content">
                <div clclassNameass="container-xl">
                    <div className="post-section p-3 mb-4">
                        <div className="sub-post-section">
                            <div className="row">
                                <div className="col-8">
                                    <div className="row pb-3">
                                        <div className="col-2">
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
                                                            <img src={Individual} alt="seach" />
                                                        </span>
                                                        <span className="individual">Individual</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-10 post-minute">
                                            <h2>Posted: 45 minutes ago</h2>
                                            <p>Developer needed to build a HIPAA
                                                compliant app with EHR integrability</p>
                                            <p className="sub-inner-title pt-2 pb-4">Looking for an experienced developer
                                                for a 3–6-month project.
                                                You will work with a small team of
                                                healthcare and IT experts to build a tablet and
                                                You will work with a small team of healthcare
                                                healthcare app that must be HIPAA compliant
                                                and have the ability to integrate with EHR
                                                . Required Experience UI, UX, interactivity
                                                Graphics design experience..
                                                <span className="more">more</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="slider-section  slider-border-bottom py-2">
                                        <div className="d-flex justify-content-evenly sliding-btn">
                                            <span>
                                                <img src={leftArrow} alt="seach" />
                                            </span>
                                            <button className="btn slide-btn">Web design</button>
                                            <button className="btn slide-btn">Logo Design</button>
                                            <button className="btn slide-btn">Graphic Design</button>
                                            <button className="btn slide-btn">Logo Design</button>
                                            <button className="btn slide-btn">Graphic Design</button>
                                            <span>
                                                <img src={rightArrow} alt="seach" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="middle-section">
                                        <div className="d-flex p-2">
                                            <div className="me-3">
                                                <span>
                                                    <img src={search} alt="seach" />
                                                </span>
                                                <span className="less-month">Less than a month</span>
                                                <p className="project-lenght">Project Length</p>
                                            </div>
                                            <div>
                                                <span>
                                                    <img src={search} alt="seach" />
                                                </span>
                                                <span className="less-month">Less than a month</span>
                                                <p className="project-lenght">Project Length</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="row">
                                        <div className="col-7">
                                            <div className="p-3 client-info-box bg-white">
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
                                            </div>
                                        </div>
                                        <div className="col-5">
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h6 className="note-title">Notes</h6>
                            <div className="pera">
                                <p>Looking for an experienced developer for a 3–6-month project.
                                    You will work with a small team of healthcare and IT experts to build a
                                    tablet and You will work with a small team of healthcare healthcare app
                                    that must be HIPAA compliant and have the ability to integrate with EHR.
                                    Required Experience UI, UX, interactivity Graphics design experience.....
                                    Looking for an experienced developer for a 3–6-month project. You will
                                    work with a small team of healthcare and IT experts to build a tablet
                                    and You will work with a small team of healthcare healthcare app that must be
                                    HIPAA compliant and have the ability to integrate with EHR.
                                    Required Experience UI, UX, interactivity Graphics design experience. </p>
                                <p>Looking for an experienced developer for a 3–6-month project.
                                    You will work with a small team of healthcare and IT experts to build a
                                    tablet and You will work with a small team of healthcare healthcare app
                                    that must be HIPAA compliant and have the ability to integrate with EHR.
                                    Required Experience UI, UX, interactivity Graphics design experience.....
                                    Looking for an experienced developer for a 3–6-month project. You will
                                    work with a small team of healthcare and IT experts to build a tablet
                                    and You will work with a small team of healthcare healthcare app that must be
                                    HIPAA compliant and have the ability to integrate with EHR.
                                    Required Experience UI, UX, interactivity Graphics design experience. </p>
                            </div>
                        </div>
                    </div>
                    {/* //////////////////// add section /////////////////  */}
                    <div className="post-section p-3 mb-4">
                        <div className="sub-post-section">
                            <div className="row">
                                <div className="col-8">
                                    <div className="row pb-3">
                                        <div className="col-2">
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
                                                            <img src={Individual} alt="seach" />
                                                        </span>
                                                        <span className="individual">Individual</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-10 post-minute">
                                            <h2>Posted: 45 minutes ago</h2>
                                            <p>Developer needed to build a HIPAA
                                                compliant app with EHR integrability</p>
                                            <p className="sub-inner-title pt-2 pb-4">Looking for an experienced developer
                                                for a 3–6-month project.
                                                You will work with a small team of
                                                healthcare and IT experts to build a tablet and
                                                You will work with a small team of healthcare
                                                healthcare app that must be HIPAA compliant
                                                and have the ability to integrate with EHR
                                                . Required Experience UI, UX, interactivity
                                                Graphics design experience..
                                                <span className="more">more</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="slider-section  slider-border-bottom py-2">
                                        <div className="d-flex justify-content-evenly sliding-btn">
                                            <span>
                                                <img src={leftArrow} alt="seach" />
                                            </span>
                                            <button className="btn slide-btn">Web design</button>
                                            <button className="btn slide-btn">Logo Design</button>
                                            <button className="btn slide-btn">Graphic Design</button>
                                            <button className="btn slide-btn">Logo Design</button>
                                            <button className="btn slide-btn">Graphic Design</button>
                                            <span>
                                                <img src={rightArrow} alt="seach" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="middle-section">
                                        <div className="d-flex p-2">
                                            <div className="me-3">
                                                <span>
                                                    <img src={search} alt="seach" />
                                                </span>
                                                <span className="less-month">Less than a month</span>
                                                <p className="project-lenght">Project Length</p>
                                            </div>
                                            <div>
                                                <span>
                                                    <img src={search} alt="seach" />
                                                </span>
                                                <span className="less-month">Less than a month</span>
                                                <p className="project-lenght">Project Length</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="row">
                                        <div className="col-7">
                                            <div className="p-3 client-info-box bg-white">
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
                                            </div>
                                        </div>
                                        <div className="col-5">
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h6 className="note-title">Notes</h6>
                            <div className="pera">
                                <p>Looking for an experienced developer for a 3–6-month project.
                                    You will work with a small team of healthcare and IT experts to build a
                                    tablet and You will work with a small team of healthcare healthcare app
                                    that must be HIPAA compliant and have the ability to integrate with EHR.
                                    Required Experience UI, UX, interactivity Graphics design experience.....
                                    Looking for an experienced developer for a 3–6-month project. You will
                                    work with a small team of healthcare and IT experts to build a tablet
                                    and You will work with a small team of healthcare healthcare app that must be
                                    HIPAA compliant and have the ability to integrate with EHR.
                                    Required Experience UI, UX, interactivity Graphics design experience. </p>
                                <p>Looking for an experienced developer for a 3–6-month project.
                                    You will work with a small team of healthcare and IT experts to build a
                                    tablet and You will work with a small team of healthcare healthcare app
                                    that must be HIPAA compliant and have the ability to integrate with EHR.
                                    Required Experience UI, UX, interactivity Graphics design experience.....
                                    Looking for an experienced developer for a 3–6-month project. You will
                                    work with a small team of healthcare and IT experts to build a tablet
                                    and You will work with a small team of healthcare healthcare app that must be
                                    HIPAA compliant and have the ability to integrate with EHR.
                                    Required Experience UI, UX, interactivity Graphics design experience. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;