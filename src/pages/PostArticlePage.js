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


    return (
        <>
            <section className="page">
                <div className="page-header">
                    <Link to='/15082022'><BiLeftArrowAlt/> Posts </Link>
                </div>

                <article  key={post?.id} className="article">
                    <div className="article-header">
                        <div className='header-img'>
                            <img src={getImg(post)} alt="" />
                        </div>  

                        <div className='article-title-box'>
                            <div className="article-title">
                                <h1>{post?.title}</h1>
                                <div className="date">
                                    <p>{post.date}</p>
                                </div>
                            </div>    
                            <div className='subtitle'><h3>{post?.subtitle}</h3></div>
                        </div>
                        
                    </div>

                    <div className="article-content" dangerouslySetInnerHTML={ {__html: post.descHtml} }></div>    

                    {/* ----- template ----- */}
                    {/* <div class='article-content'>
                        <div class='article-text-section'>
                            <p>
                                5. og 6. uge af praktikken er nu kommet og gået, og vi er ved at være i slutspurten af vores intro-projekt. 
                                Jeg får lært en masse om Next JS, TypeScript og Chakra UI igennem en masse "trial and error", men ikke uden succes og gennembrud.
                            </p>                        
                        </div>

                        <div class='article-text-section'>
                            <h4>Uge 5</h4>
                            <p>
                                Det var meningen at denne uge skulle handle om backend-delen, men den developer som skulle give os introen og var den ugeansvarlige var desværre syg, og blev udskudt fra mandagen til senere på ugen.
                                Vi fortsatte bare hvor vi slap ugen før, indtil vi fik en intro. Introen var dog ikke en dybtegående, men det overordnede som vi havde brug for at vide - Især for mig og min frontend-makker, 
                                da vi ikke skal arbejde med det, men forstå det godt nok til at kunne flette front- og backenden sammen.
                            </p>
                            <p>
                                I denne uge stod det for mig mest på at få Next JS, TypeScript (TS) og Chakra UI til at spille. Next og TS har været meget lige til, uden for mange bump på vejen.
                                Den store forskel fra React til Next, er at React er CSR (Client Side Rendering), som sender JavaScript af sted, der læses af klienten, og derefter renderes.
                                Next er SSR (Server Side Rendering), hvor serveren læser JavaScripten, således det er klar til at renderes af klienten når siden tilgåes.
                            </p>
                            <p>
                                Jeg har stået for en content-page, som skal vise diverse små cards/artikler og tekst om det fiktive firma 'Space Debris Inc' samt en sektion med firmaets medarbejdere. <br/>
                                Derudover stod jeg også for en admin-page, hvor ad administrator kan se en oversigt over salg der foregår på hjemmesiden, samt nogle statistikker over det. 
                                Derudover kan administratoren se virksomhedens raketter, og diverse info om dem, så som deres current capacity, max capacity, available/unavailable, status, next launch, previous launch.
                                Administratoren skal også gerne kunne redigere, tilføje nye eller slette raketter.
                            </p>
                            <p>
                                Målet er at hele siden skal være headless, og kunne hentes fra en CMS, i dette tilfælde er det Umbraco der skal bruges, som vores backend developer står for. 
                                Vi vil få nogle endpoints, som vi så skal fetche dataen fra. Dataen vil komme til os og blive læst som JSON, så helt fremmed kommer det ikke til at være, at implementere (forhåbenligt!).
                            </p>

                        </div>

                        <div class='article-text-section'>
                            <h4>Uge 6</h4>
                          
                            <p>
                                Uge 6 flød meget sammen med uge 5, da det stortset var det samme vi arbejde med. Jeg er stadigt i gang med både content og admin-siderne. <br/>
                                Jeg har fået lavet noget mock-data, i form af en JSON-fil jeg har liggende lokalt, som jeg kan bruge til mine sider, indtil jeg får noget data fra backenden. 
                                Det var meningen at jeg gerne skulle have fået det i løbet af denne uge, men nogle af tingene tager desværre bare lidt længere tid og/eller driller - som kode jo har det med at gøre. <br/>
                                Det meste af tiden bruger jeg på at få skabt et større kendskab til Chakra UI og TypeScript. Heldigvis er jeg lige så stille ved at føle mig mere komfortabel og sikker med Next JS.
                            </p>
                            <p>
                                Jeg kan mærke at jeg så småt er begyndt at føle mig lidt stresset og presset, da det er torsdag i næste uge vi skal præsentere vores produkt for hele Aarhus kontoret + lidt folk fra København. <br/>
                                Jeg havde håbet på at være tættere på noget færdigt og mere funtionelt end det er nu, da raket-siden under admin-siden er lidt svær at få skabt noget funtionalitet til, med mock-data, især
                            </p>
                           
                            <div class='img-cntr'>
                                <img src='/data/media/posts/img_20220827_191229e.jpg' alt='skylounge amsterdam'/>
                            </div>
                        </div>

                    </div> */}
                    {/* ----- template ----- */}
                                                
                </article>

            </section>
        </>
    );
};
