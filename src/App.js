import { Routes, Route, Navigate } from "react-router-dom";
import './scss/App.scss';
import Nav from './components/Navbar/Nav';
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ArticlePage from "./pages/ArticlePage";
import PostsPage from "./pages/PostsPage";
import PostArticlePage from "./pages/PostArticlePage";


function App() {
    return (
        <>
            <main>
                <Nav/>  
                <Routes>
                    <Route path="/" element={ <HomePage/> } />
                    <Route path="*" element={ <Navigate to="/"/> } />
                    <Route path="/projects" element={ <ProjectsPage/> } />
                    <Route path="/projects/:id" element={ <ArticlePage/> } />
                    <Route path="/posts" element={ <PostsPage/> } />
                    <Route path="/posts/:id" element={ <PostArticlePage/> } />                    
                </Routes>
                <Footer/>
                <ScrollToTop/>
            </main>
                
        </>
    );
}

export default App;
