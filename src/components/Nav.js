import '../scss/Nav.scss'; 

export default function Nav() {
    var prevScrollPos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollPos > currentScrollPos) {
            document.getElementById("navBar").style.top = "0"
        } else {
            document.getElementById("navBar").style.top = "-3em"
        }
        prevScrollPos = currentScrollPos
    };
    
    return (
        <>
            <div className="nav-cntr" id="navBar">
                <div className="nav-inner-cntr">

                    <div className="nav-logo"> 
                        <a href="/">Sofie Trolle</a> 
                    </div>
                    <div className="nav-links">
                        <a href="#about"> About </a> 
                        <a href="#work"> Work </a> 
                        <a href="#contact"> Contact </a>                         
                    </div>
                    
                </div>
            </div>
        </>
    )
};


