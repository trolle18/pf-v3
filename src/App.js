import { Routes, Route, Navigate } from "react-router-dom";
import './scss/App.scss';
import HomePage from './pages/HomePage'
import Nav from './components/Navbar/Nav'
import Footer from './components/Footer'


function App() {
    return (
        <>
            <main>
                <Nav/>  
                <Routes>
                    <Route path="/" element={ <HomePage/> } />
                    <Route path="*" element={ <Navigate to="/"/> } />
                </Routes>
                <Footer/>
            </main>
                
        </>
    );
}

export default App;
