import About from '../components/About';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Work from '../components/Work';
import '../scss/App.scss';


export default function HomePage() {

    // const cards = document.querySelectorAll(".card")
    // const observer = new IntersectionObserver( 
    //     entries => {
    //         entries.forEach(entry => {
    //             entry.target.classList.toggle("show", entry.isIntersecting)
    //             if (entry.isIntersecting) observer.unobserve(entry.target)
    //             console.log(entries)
    //         })
    //     }, 
    //     {
    //         // rootMargin: "100px",
    //         threshold: .5,
    //     }        
    // )
    // cards.forEach(card => {
    //     observer.observe(card)
    // })


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
