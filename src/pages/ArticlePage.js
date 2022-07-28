// import { useNavigate } from 'react-router-dom';
import WorkArticles from '../components/WorkArticle';
import '../scss/App.scss';

export default function ArticlePage( {project} ) {
    // const navigate = useNavigate();

    // function handleClick() {
    //     navigate(`/projects/${project.id}`)
    // }

    return (
        <>
            <section className="page">
                <section className="work-cntr section">
                    <div className="work-cntr-title">
                        <h2>Work</h2>
                        <span className="sub-title">Here is a few of the projects I have been working on</span>
                    </div>
                    <WorkArticles/>
                </section>
            </section>
        </>
    );
};
