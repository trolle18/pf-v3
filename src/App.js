import { Routes, Route, Navigate } from "react-router-dom";
import './scss/App.scss';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";
import HomePage from './pages/HomePage';
import PostsPage from "./pages/PostsPage";
import PostArticlePage from "./pages/PostArticlePage";


function App() {

    return (
        <>
            <Nav/>  
            <Routes>
                <Route path="/" element={ <HomePage/> } />
                <Route path="*" element={ <Navigate to="/"/> } />
                {/* <Route path="/15082022" element={ <PostsPage/> } />
                <Route path="/15082022/:id" element={ <PostArticlePage/> } /> */}
            </Routes>
            <Footer/>
            <ScrollToTop/>     
        </>
    );
}

export default App;
