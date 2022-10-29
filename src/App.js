import { Routes, Route, Navigate } from "react-router-dom";
import './scss/main.scss';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";
import HomePage from './pages/HomePage';

function App() {

    return (
        <>
            <Nav/>  
            <Routes>
                <Route path="/" element={ <HomePage/> } />
                <Route path="*" element={ <Navigate to="/"/> } />
            </Routes>
            <Footer/>
            <ScrollToTop/>     
        </>
    );
}

export default App;
