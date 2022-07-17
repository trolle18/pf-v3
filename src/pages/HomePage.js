import Nav from '../components/Nav';
import '../scss/App.scss';


export default function HomePage() {
    return (
        <>
            <section className="page">
                <Nav/>
                    <header className="header">
                        <h1>Sofie Trolle</h1>
                    </header>
            </section>
        </>
    );
};
