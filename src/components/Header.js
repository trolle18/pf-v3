import '../scss/Header.scss';

export default function Header() {
    // var i = 0;
    // var txt = "Sofie Trolle";
    // var speed = 50;
    
    // function typeWriter() {
    //   if (i < txt.length) {
    //     document.getElementById("test").innerHTML += txt.charAt(i);
    //     i++;
    //     setTimeout(typeWriter, speed);
    //   }
    // }

    return (
        <>
            <section className="header-cntr">
                <div className="header-txt">
                    <span>Hi! My name is</span>
                    <h1 id="test">Sofie Trolle</h1>
                    <span>
                        I am a multimedia design student, at Business Academy Aarhus, 
                        specializing in frontend development.
                    </span>
                </div>
            </section>
        
        </>
    )
};