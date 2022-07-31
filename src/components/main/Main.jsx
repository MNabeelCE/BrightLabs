import "./Main.css";
import hello from '../../../assets/hello.svg';
import search from '../../../assets/icons/icon-1.png';
import Charts from '../charts/Charts'

const Main=() => {
    return (
        <main className="app-wrapper mt-3">
            <div className="app-content">
                <div clclassNameass="container-xl">
                    <div className="post-section p-3 mb-4">
                        <div className="sub-post-section">
                            <div className="row">
                                <div className="col-7">
                                    <div className="row border-bottom pb-3">
                                        <div className="col-2">
                                            <div className="main-box border">
                                                <div className="score-box p-2">
                                                    <span className="nav-icon">
                                                    <img src={search} alt="seach" className="me-1" />
                                                    </span>
                                                    <span className="hourly">Hourly</span>
                                                    <div className="sub-hourly">$15-$30</div>
                                                </div>
                                                <div className="inner-score-box">
                                                    <div className="inner-number text-center">
                                                        <h5>9.0</h5>
                                                    </div>
                                                    <div className="border-bottom text-center score">
                                                        <span>score</span></div>
                                                    <div className="text-center py-1">
                                                        <span className="nav-icon">
                                                        <img src={search} alt="seach" />
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
                                    <div className="slider-section  border-bottom py-2">
                                        <div className="d-flex justify-content-center sliding-btn">
                                            <span>
                                            <img src={search} alt="seach" />
                                            </span>
                                            <button className="btn slide-btn">Web design</button>
                                            <button className="btn slide-btn">Logo Design</button>
                                            <button className="btn slide-btn">Graphic Design</button>
                                            <button className="btn slide-btn">Logo Design</button>
                                            <button className="btn slide-btn">Graphic Design</button>
                                            <span>
                                            <img src={search} alt="seach" />
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
                                <div className="col-5">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="p-2 bg-white">
                                                <div className="client">
                                                    <span className="nav-icon">
                                                    <img src={search} alt="seach" />
                                                    </span>
                                                    <span className="about-client">About Client</span>

                                                </div>
                                                <div className="client">
                                                    <span className="nav-icon">
                                                    <img src={search} alt="seach" />
                                                    </span>
                                                    <span> united State</span>

                                                </div>
                                                <div className="client my-1">
                                                    <span>
                                                    <img src={search} alt="seach" />
                                                    </span>
                                                    <span>
                                                    <img src={search} alt="seach" />
                                                    </span>
                                                    <span>
                                                    <img src={search} alt="seach" />
                                                    </span>
                                                    <span>
                                                    <img src={search} alt="seach" />
                                                    </span>
                                                    <span>
                                                    <img src={search} alt="seach" />
                                                    </span>
                                                    <span>
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
                                                    <p className="mb-1">Projects posted: 45</p>
                                                </div>
                                                <div className="rate-client mb-2">
                                                    <p className="mb-1">Hire Rate: <span className="red-rate"> 15%</span></p>
                                                </div>
                                                <div className="rate-client mb-2">
                                                    <p className="mb-1">Proposals: <span className="red-rate">5-10</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="custom-border mb-2">
                                                <span>
                                                  <img src={search} alt="seach" />
                                                </span>
                                                <span>Archive</span>
                                            </div>
                                            <div className="custom-border mb-2">
                                                <span>
                                                <img src={search} alt="seach" />
                                              
                                                </span>
                                                <span>Starred</span>
                                            </div>
                                            <div className="custom-border tick mb-2">
                                                <span>
                                                <img src={search} alt="seach" />
                                                 
                                                </span>
                                                <span>Applied</span>
                                            </div>
                                            <div className="custom-border last-btn mb-2">
                                                <span>
                                                <img src={search} alt="seach" />
                                            
                                                </span>
                                                <span>Notes</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h6 className="note">Notes</h6>
                            <div className="p-2 pera">
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
                    <div className="post-section p-3 mb-4">
                        <div className="sub-post-section">
                            <div className="row">
                                <div className="col-7">
                                    <div className="row border-bottom pb-3">
                                        <div className="col-2">
                                            <div className="main-box border">
                                                <div className="score-box p-2">
                                                    <span className="nav-icon">
                                                    <img src={search} alt="seach" />
                                                    </span>
                                                    <span className="hourly">Hourly</span>
                                                    <div className="sub-hourly">$15-$30</div>
                                                </div>
                                                <div className="inner-score-box">
                                                    <div className="inner-number text-center">
                                                        <h5>9.0</h5>
                                                    </div>
                                                    <div className="border-bottom text-center score">
                                                        <span>score</span></div>
                                                    <div className="text-center py-1">
                                                        <span className="nav-icon">
                                                        <img src={search} alt="seach" />
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
                                    <div className="slider-section  border-bottom py-2">
                                        <div className="d-flex justify-content-center flex-wrap sliding-btn">
                                            <span>
                                            <img src={search} alt="seach" />
                                            </span>
                                            <button className="btn slide-btn">Web design</button>
                                            <button className="btn slide-btn">Logo Design</button>
                                            <button className="btn slide-btn">Graphic Design</button>
                                            <button className="btn slide-btn">Logo Design</button>
                                            <button className="btn slide-btn">Graphic Design</button>
                                            <span>
                                            <img src={search} alt="seach" />
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
                                <div className="col-5">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="p-2 bg-white">
                                                <div className="client">
                                                    <span className="nav-icon">
                                                    <img src={search} alt="seach" />
                                                    </span>
                                                    <span className="about-client">About Client</span>

                                                </div>
                                                <div className="client">
                                                    <span className="nav-icon">
                                                    <img src={search} alt="seach" />
                                                    </span>
                                                    <span> united State</span>

                                                </div>
                                                <div className="client my-1">
                                                    <span>
                                                    <img src={search} alt="seach" />
                                                    </span>
                                                    <span>
                                                    <img src={search} alt="seach" />
                                                    </span>
                                                    <span>
                                                    <img src={search} alt="seach" />
                                                    </span>
                                                    <span>
                                                    <img src={search} alt="seach" />
                                                    </span>
                                                    <span>
                                                    <img src={search} alt="seach" />
                                                    </span>
                                                    <span>
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
                                                    <p className="mb-1">Projects posted: 45</p>
                                                </div>
                                                <div className="rate-client mb-2">
                                                    <p className="mb-1">Hire Rate: <span className="red-rate"> 15%</span></p>
                                                </div>
                                                <div className="rate-client mb-2">
                                                    <p className="mb-1">Proposals: <span className="red-rate">5-10</span></p>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="custom-border mb-2">
                                                <span>
                                                <img src={search} alt="seach" />
                                                </span>
                                                <span>Archive</span>
                                            </div>
                                            <div className="custom-border mb-2">
                                                <span>
                                                <img src={search} alt="seach" />
                                                </span>
                                                <span>Starred</span>
                                            </div>
                                            <div className="custom-border tick mb-2">
                                                <span>
                                                <img src={search} alt="seach" />
                                                </span>
                                                <span>Applied</span>
                                            </div>
                                            <div className="custom-border last-btn mb-2">
                                                <span>
                                                <img src={search} alt="seach" />
                                                </span>
                                                <span>Notes</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h6 className="note">Notes</h6>
                            <div className="p-2 pera">
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