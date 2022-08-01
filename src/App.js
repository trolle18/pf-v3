import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import './scss/App.scss';
import Nav from './components/Navbar/Nav';
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ArticlePage from "./pages/ArticlePage";
import PostsPage from "./pages/PostsPage";
import PostArticlePage from "./pages/PostArticlePage";
import AuthRoutes from "./fireAuth/AuthRoutes";


function App() {
    const auth = getAuth();
    const [isAuth, setIsAuth] = useState (localStorage.getItem("isAuth"));

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setIsAuth(true);
            localStorage.setItem("isAuth", true);
        } else {
            setIsAuth(false);
            localStorage.removeItem("isAuth");
        }
    });

    return (
        <>
            <main>
                {isAuth ? (
                    <>
                        <AuthRoutes/>
                    </>
                ) : (
                    <>
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

                    </>
                ) }
            </main>
                
        </>
    );
}

export default App;
