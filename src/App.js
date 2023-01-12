import { Routes, Route, Navigate } from "react-router-dom";
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
            const response = await fetch("/data/components/globalData.json");
            const data = await response.json();
            setGlobalData(data);
        }
        getData();
    }, []);

    return (
        <>
            <Nav globalData={globalData} />  
            <Routes>
                <Route path="/" element={ <HomePage/> } />
                <Route path="*" element={ <Navigate to="/"/> } />
            </Routes>
            <Footer globalData={globalData}/>
            <ScrollToTop/>     
        </>
    );
}

export default App;
