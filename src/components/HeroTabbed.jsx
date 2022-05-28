import React, { useState } from "react";


const HeroTabbed = (props) => {
    const [img1, setImg1] = useState(false);
    const [img2, setImg2] = useState(true);
    const [img3, setImg3] = useState(false);

    function showImage(img) {
        switch (img) {
            case 1:
                setImg1(true);
                setImg2(false);
                setImg3(false);
                break;
            case 2:
                setImg1(false);
                setImg2(true);
                setImg3(false);
                break;
            case 3:
                setImg1(false);
                setImg2(false);
                setImg3(true);
                break;
            default:
                setImg1(true);
                setImg2(false);
                setImg3(false);
                break;
        }
    }
    return (
        <div className="hero-tabbed-container">
            <div className="row">
                <div className="hero-tab-menu col-md-4">
                    <div onClick={() => showImage(2)} className={img2 ? "tab-text active-tab" : "tab-text"}>
                        <h3>
                            Web Design & Development
                        </h3>

                    </div>
                    <div onClick={() => showImage(1)} className={img1 ? "tab-text active-tab" : "tab-text"}>
                        <h3>
                            Mobile Games & Applications
                        </h3>

                    </div>

                    <div onClick={() => showImage(3)} className={img3 ? "tab-text active-tab" : "tab-text"}>
                        <h3>
                            Backend Development & DBA
                        </h3>

                    </div>

                </div>
                <div className="hero-tab-image col-md-8">
                    {img1 &&
                        <div className="detail-tab">
                            <h1>Eggscape</h1>
                            <img src="images/Eggscape.png" alt="hero image" />
                            <p>
                                Do you have an idea for a mobile game or app? Get in contact to turn your idea into a reality.
                            </p>
                        </div>
                    }
                    {img2 &&
                        <div className="detail-tab">
                            <h1>Woodmans Dairy</h1>
                            <img src="images/woodmans.png" alt="hero image" />
                            <p>
                                Does you business need a fresh look? Looking to digitise an out dated system? Contact us today.
                            </p>
                        </div>
                    }
                    {img3 &&
                        <div className="detail-tab">
                            <h1>API</h1>
                            <img src="https://cdn.pixabay.com/photo/2017/06/14/16/20/network-2402637__480.jpg" alt="hero image" />
                            <p>
                                Looking for APi integration to enhance your data sets? Tired of structured SQL and want to switch to NoSQL?
                            </p>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default HeroTabbed;