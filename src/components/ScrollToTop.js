import { useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

export default function ScrollToTop() {
    // Calls function watchScroll when page is scrolled
    useEffect(() => {
        window.onscroll = function () {
            watchScroll();
        };
    }, []);

    // Display Scroll-To-Top button when scrolled 500px down on page
    function watchScroll() { 
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            document.getElementById("scrollToTop").style.display = "block";
        } else {
            document.getElementById("scrollToTop").style.display = "none";
        }
    }

    // Scrolls to 0 px from top, smooth-scroll
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <button className="scrolltop-btn" id="scrollToTop" title="Scroll to top" onClick={scrollToTop} >
            <IoIosArrowUp/>
        </button>
    );
}
