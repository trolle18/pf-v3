import Work from '../components/Work';
import WorkArticle from '../components/WorkArticle';
import '../scss/App.scss';

export default function ProjectsPage() {

    return (
        <>
            <section className="page">
                <section className="work-cntr section">
                    <div className="work-cntr-title">
                        <h2>Work</h2>
                        <span className="sub-title">Here is a few of the projects I have been working on</span>
                    </div>
                    <WorkArticle/>
                </section>
            </section>
        </>
    );
};
