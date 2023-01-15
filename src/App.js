import { Routes, Route, Navigate } from "react-router-dom";
import { LazyMotion, domAnimation } from "framer-motion";
import './scss/main.scss';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";
import HomePage from './pages/HomePage';
import { useEffect, useState } from "react";

function App() {
    const [globalData, setGlobalData] = useState([]);
    // Fetch data from JSON
    useEffect(() => {
        async function getData() {
            const response = await fetch("/data/globalData.json");
            const data = await response.json();
            setGlobalData(data);
        }
        getData();
    }, []);

    return (
        <>
            <LazyMotion features={domAnimation}>      
                <Nav globalData={globalData} />  
                <Routes>
                    <Route path="/" element={ <HomePage/> } />
                    <Route path="*" element={ <Navigate to="/"/> } />
                </Routes>            
                <ScrollToTop/>     
                <Footer globalData={globalData}/>
            </LazyMotion>
        </>
    );
}

export default App;
