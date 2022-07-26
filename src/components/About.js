import PfImg from "../assets/pf-g-iso.webp";
import '../scss/About.scss';

export default function About() {
    return (
        <>
            <section className="about-cntr section" id="about">
               
                <div className="about-content">
                    <div className="about-txt">
                        <div className="txt-cnt">
                            <h2>About</h2>
                            <span>
                                My name is Sofie, I am 24 years old, and currently on my 3rd semester at the Business Academy Aarhus, where I’m studying multimedia design, specializing in frontend development. <br/>
                                I have always loved creating, and exploring through different types of media. With multimedia designing, there are endless possibilities for me to explore and work through.
                            </span>
                        </div>

                        <div className="mob-img-cntr">
                            <div className="mob-img-box">
                                <img src={PfImg} className="mob-img" alt="Sofie Trolle"/>
                            </div>
                        </div>
                    </div>

                    <div className="skill-box">
                        <span>Some of the technologies I have been working with:</span>
                            <ul className="skill-list">
                                <li><span>HTML5 & CSS3</span></li>
                                <li><span>React.JS</span></li>
                                <li><span>JavaScript (ES6+)</span></li>
                                <li><span>SCSS / Sass</span></li>
                                <li><span>jQuery</span></li>
                                <li><span>Firebase</span></li>
                                {/* <li>WordPress</li> */}
                            </ul>
                    </div>
                </div>

                <div className="img-cntr">
                    <div className="img-box">
                        <img src={PfImg} className="pf-img" alt="Sofie Trolle"/>
                    </div>
                </div>
            

              {/*  <div className="pf-img-cntr">
                    <div className="pf-img-outer-cntr">
                         <div className="img-outer-box"></div>
                        <div className="img-box">
                            <img src={PfImg} alt="Sofie Trolle" />
                        </div>
                    </div>
                </div> */}
               
            </section>
        
        </>
    )
};