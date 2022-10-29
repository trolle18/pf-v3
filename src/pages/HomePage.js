import About from '../components/About';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Work from '../components/Work';

export default function HomePage() {

        // // Intersection observer
        // let secObserverOptions = {
        //     threshold: 0.25
        // };
        // var secObserver = new IntersectionObserver(secObserverCallback, secObserverOptions);
        // function secObserverCallback(entries, observer) {
        //     entries.forEach(entry => {
        //         entry.target.classList.toggle("show", entry.isIntersecting)
        //         if (entry.isIntersecting) {
        //             observer.unobserve(entry.target)
        //         }
        //     });
        // };
        // // let secTarget = '.sec';
        // document.querySelectorAll("sec").forEach((i) => {
        //     if (i) {
        //         secObserver.observe(i);
        //     }
        // });

    return (
        <>
            <section className="page">
                <Header/>
                <About/>
                <Work/>
                <Contact/>
            </section>
        </>
    );
};
