import About from '../components/About';
import Footer from '../components/Footer';
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
                <Footer />
            </section>
        </>
    );
};
