import { Routes, Route, Navigate } from "react-router-dom";
import './scss/App.scss';
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import Nav from './components/Navbar/Nav'
import Footer from './components/Footer'
import ScrollToTop from "./components/ScrollToTop";


function App() {
    return (
        <>
            <main>
                <Nav/>  
                <Routes>
                    <Route path="/" element={ <HomePage/> } />
                    <Route path="*" element={ <Navigate to="/"/> } />
                    <Route path="/projects" element={ <ProjectsPage/> } />
                    <Route path="/projects/:id" element={ <ProjectsPage/> } />
                    
                </Routes>
                <Footer/>
                <ScrollToTop/>
            </main>
                
        </>
    );
}

export default App;
