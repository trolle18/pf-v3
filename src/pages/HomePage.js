import About from '../components/About';
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
            </section>
        </>
    );
};
