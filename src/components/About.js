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
                            <p>
                                My name is Sofie, I am 25 years old, and I am studying multimedia design, 
                                specializing in frontend development, at Business Academy Aarhus. 
                                I am currently on my 4th semester, which I will be spending as an intern for AKQA in Aarhus.
                            </p>
                            <p>
                                I have always loved creating, and exploring through different types of media. With multimedia designing, 
                                there are endless possibilities for me to explore and work through.
                            </p>
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
                            {/* // eslint-disable-next-line */}
                                <li><span>HTML5 & CSS3</span></li>
                                <li><span>React.JS</span></li>
                                <li><span>JavaScript (ES6+)</span></li>
                                <li><span>SCSS / Sass</span></li>
                                <li><span>jQuery</span></li>
                                <li><span>Firebase</span></li>
                            </ul>
                    </div>
                </div>

                <div className="img-cntr">
                    <div className="img-box">
                        <img src={PfImg} className="pf-img" alt="Sofie Trolle"/>
                    </div>
                </div>
        
            </section>
        
        </>
    )
};