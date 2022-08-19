import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BiLeftArrowAlt } from 'react-icons/bi'
import '../scss/ArticlePage.scss';

export default function PostArticlePage() {
    const [post, setPost] = useState({});
    const params = useParams();
    const postId = parseInt(params.id);
    

    // Fetch and set article data
    useEffect(() => {
        async function getData() {
            const response = await fetch("/data/posts.json"); // Fetch data from JSON
            const data = await response.json();

            const postData = data.find(item => item.id === postId); // Get matching id
            setPost(postData);
        }
        if (postId) { // If id is found, set data
            getData();
        }
    }, [postId])


    // Get first img
    function getImg(post) {
        if (post.imgs?.length >= 1) {
            return post.imgs[0]?.imgSrc;
        } 
    };

    function getThisImg(post) {
        if (post.imgs?.length >= 1) {
            return post.imgs[1]?.imgSrc;
        } 
    };


    // Only render build, if the article link excists
    function getTags(post) {
        const isTag = post.tags;
        if(isTag) {
            return(
                post.tags.map((tag, i) => {
                    return( <span key={i}>{post.tag}</span> )
                })
            )
        }
        else{
            return(
                null
            )
        }
    }


    return (
        <>
            <section className="page">
                <div className="page-header">
                    <Link to='/posts'><BiLeftArrowAlt/> Posts </Link>
                </div>

                <article  key={post?.id} className="article">
                    <div className="article-header">
                        <div className='header-img'>
                            <img src={getImg(post)} alt="" />
                        </div>  
                        <div className="article-title">
                            <h1>{post?.title}</h1>
                            <div className="article-links">
                                <span>{post.date}</span>
                            </div>
                        </div>    
                        <div className='subtitle'><h3>{post?.subtitle}</h3></div>
                        <div className='tags'>{getTags(post)}</div>            
                        {/* <div>{post?.week}</div>        */}
                    </div>

                    <div className="article-content">
                        {/* <span dangerouslySetInnerHTML={ {__html: post.descHtml} }></span> */}
                        <div className='article-text-section'>
                            <p>
                                Mandag d. 8 august kunne jeg endelig skyde min praktikperiode i gang, 
                                hos AKQA. Jeg skulle oprindeligt først starte d. 15 august, 
                                men fik lov til at starte en uge før med selvstudie, for at få ugerne til at gå mest muligt op.
                            </p>
                            <p>
                                Til mit selvstudie havde jeg forberedt lidt forskelligt materiale som jeg ville kigge på, 
                                i form af nogle kurser på Linkedin Learning og Skillshare, samt nogle anbefalede videoer på youtube.
                            </p> 
                        </div>
                        

                        <div className='article-section'>
                            <div className='article-box'>                                            
                                <p><span>MAN - </span> React.js + Sass/SCSS</p>
                                <p><span>TIR - </span> Next.js</p>
                                <p><span>ONS - </span> Next.js fortsat</p>
                                <p><span>TOR - </span> Vue.js</p>
                                <p><span>FRE - </span> Vue.js fortsat</p>
                            </div> 

                            <h4>Selvstudie</h4>
                            <p>
                                Jeg startede ugen ud med noget React, som jeg har et godt kendskab til i forvejen, samt noget Sass, 
                                som jeg kendte lidt til i forvejen. 
                            </p>
                            <p> 
                                Derefter brugte jeg tirsdag og onsdag på Next, som jeg ikke havde nogen kendskab til i forvejen, 
                                men da det ligner React rigtigt meget, føler jeg hurtigt at jeg forstod det.
                            </p>
                            <p>
                                Torsdag og Fredag brugte jeg på Vue, som ikke ligner noget programmerings sprog jeg har brugt før, 
                                dog virker det umiddelbart simpelt, og jeg føler at jeg let forstod de basale dele af det.
                            </p>    
                        </div>
                        
                        <div className='article-text-section'>
                            <h4>Første dag på kontoret</h4> 
                            <div className='img-cntr'>
                                <img src={getThisImg(post)} alt=''/>
                            </div> 
                            <p>
                                Mandag d. 15 august klokken 0830, skulle jeg endeligt møde op til min første dag ved AKQA, i Toldboden. 
                                Jeg stod op klokken 0600 og følte mig frisk, nervøs og spændt på samme tid, 
                                på trods af at jeg næsten ikke kunne sove.
                            </p>
                                  
                            <p>
                                Da jeg mødte ind blev jeg taget godt imod, og fik hilst på en masse fra kontoret, heri blandt min mentor. 
                                Min Mentor viste mig hen til mit skrivebord og hjalp mig med at få sat computeret op, 
                                så den havde alt jeg skulle bruge af programmer og logins. 
                                Derefter fik vi morgenmad i køkkenet, hvor jeg fik hilst på lidt flere fra kontoret. 
                            </p>
                            <p>
                                Hver mandag bliver der holdt et fællesmøde, hvor vi går igennem hvem der arbejder på hvad for ugen. 
                                Det var spændende at se den lange liste af firmaer som der arbejdes for, 
                                samt at høre kort om hvad nogle af projekterne går ud på.
                            </p>
                        </div>
                        
                        <div className='article-text-section'>
                            <h4>Intro & projekt</h4>
                            <p>
                                Efter mødet blev jeg introduceret for to andre praktikanter jeg skal arbejde sammen med, 
                                og det projekt vi skal arbejde på. De sidder på kontoret i København, så vores samarbejde foregår over Teams. <br/>
                                Ud over projektet, har vi i dagligt haft flere møder, afholdt af forskellige personer fra AKQA, som fortæller om firmaet, deres kunder, hvordan de arbejder osv.
                            </p>
                        {/* </div> */}

                            <div className='article-section'>
                                <div className='article-box'>                                            
                                    <p><span>Week 1 - </span> Planning & managing</p>
                                    <p><span>Week 2 - </span> Design & UX</p>
                                    <p><span>Week 3 - </span> Markup</p>
                                    <p><span>Week 4 - </span> Performance & CMS</p>
                                    <p><span>Week 5 - </span> JS & frameworks, API dev.</p>
                                    <p><span>Week 6 - </span> Presentation</p>
                                </div> 
                            
                                <p>
                                    Vores projekt er et 6-ugers intro-projekt som AKQA har lavet, kaldet "Flight to orbit". 
                                    Projektet handler om et firma kaldet Space Debris Inc. (SD), i året 2122.
                                </p>
                                <p>
                                    SD sørger for at hente folks skrald, og skille sig af med det, ved at smide det ud i rummet. 
                                    Vores opgave er så, at skabe et brand til firmaet, 
                                    samt en web-app med: en landingpage, content page, webshop og admin page.
                                </p>
                                <p>
                                    I denne uge har vi været i gennem den første uge af projektet, hvor vi har sørge for planlægning og administrationen af projektet.
                                    Jeg må indrømme at jeg nok er lidt utålmodig, og jeg glæder mig til at kunne komme i gang med at programmere, 
                                    men det er også vigtigt at respektere at alt tager sin tid, og ikke skal hundses med.
                                </p>

                            </div>
                        
                        {/* <div className='article-text-section'> */}
                            <p>
                                Vi har fået rimeligt frie tøjler, og har lov til at tage både kreativ og humoristisk frihed, 
                                og indtil videre virker det rigtigt sjovt.
                            </p>
                            <p>
                                Jeg er spændt på at se hvad vi kan få kreeret. De to andre praktikanter, som jeg arbejder med virker begge super dygtige. 
                                Den ene er en multimediedesigner, specialiserende i frontend ligesom mig, og den anden er en datamatiker. 
                            </p>    
                        </div>
                        

                    </div>
                   
                </article>

            </section>
        </>
    );
};
