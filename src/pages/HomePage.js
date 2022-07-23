import About from '../components/About';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Work from '../components/Work';
import '../scss/App.scss';


export default function HomePage() {
    return (
        <>
            <section className="page">
                <Header/>
                <About/>
                <Work />
                <Contact />
            </section>
        </>
    );
};
