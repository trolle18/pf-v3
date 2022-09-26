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
    if (postId) { // If id is found, get data
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
              <div className='subtitle'>
                <h3>{post?.subtitle}</h3>
              </div>
            </div>
          </div>

          {/* <div className="article-content" dangerouslySetInnerHTML={ {__html: post.descHtml} }></div>     */}

          {/* ----- template ----- */}
          <div class='article-content'>
            <div class='article-text-section'>
              <p>
                Uge 7 og 8 af mit praktikforløb vakker mod enden, vi har fået præsenteret vores intro-projekt, 
                og jeg har endeligt kunne komme på nogle rigtige projekter!
              </p>
              <p>
                Jeg har fundet ud af, hvad jeg (højest sandsyneligt) skal arbejde på til min hovedopgave, 
                hvilket jeg er super spændt på. Der havde været lidt snak og overvejelser om, 
                hvorvidt det ville blive Oister, Change Lingeri eller Carlsberg Fonden, 
                og det ser ud til at det bliver Carlsberg Fonden. Det bliver helt sikkert en fed mulighed og oplevelse, 
                at få lov til at være med på det projekt!
              </p>                        
            </div>
         
            <div class='article-text-section'>
              <h4>Uge 7</h4>
              <div class='large-img-cntr'>
                <img src='/data/media/posts/sdadminsales.png' alt='admin-sales-page'/>
              </div>
              <p>
                  I denne uge er vi i slutspurten af vores intro-projekt, og skal fremlægge det for kontoret på torsdag. 
                  Mandag bruger jeg på at arbejde videre på admin-siderne, og funtionaliteterne dertil.
              </p>
              <h5>Sales</h5>
              <p>
                Den første admin-side er godt og vel færdig, som er Sales. 
                Denne side viser et overblik over virksomhedens antal kunder, 
                profit og revenue inkl. en graf, over et døgn, en uge eller månedsvist.
                Der er nogle mindre bugs hist og her som jeg skal have kigget på, 
                men umiddelbart kommer den fint frem, og gør det den skal.
              </p>
              <p>
                Dataen kommer som sagt fra noget mock-data, som i dette tilfælde er en lokal fil, med nogle arrays.
                Der er en array til ''day'', ''week'' og ''month'' dataen, hvor hver af dem indeholder det tilhørende data for revenue,
                profit og costumers.
              </p>
              <p>
                Jeg startede med at bygge mock-dataen op, fra bunden, jeg startede derfor med 'day', altså et døgn. Hver time tilskrev jeg en værdi for revenue/profit/customers,
                den sammenlagte værdi fra dette døgn, brugte jeg til at begynde at bygge på mock-dataen til for en uge, hvor ''mandag'' var lavet af det første døgns mock-data.
                sådan fortsatte jeg til jeg havde bygget en hel uge op, og ud fra den samme model, byggede jeg månederne op.
              </p>
              <p>
                Procenterne er også lavet ud fra mock-dataen. Her programmerede jeg en funktion, som tog hele f.eks. et døgn data, lagde sammen, og derefter udregnede gennemsnittet af dette. 
                Gennemsnittet omregnede jeg til et procenttal. Dette tal er ikke ment til at være realistisk, eller præcist, men blot for visualiseringen.
              </p>

              <h5>Rockets</h5>
              <p>
                I købet af mandagen, følte jeg ikke længere at jeg kunne vente på at få raketterne op og køre fra vores backend/CMS'en.
                Jeg endte derfor med at bygge raket-siden op, ved brug af Next's egen API, og mock-data fra en lokal fil med en array.
              </p>
              <div class='large-img-cntr'>
                <img src='/data/media/posts/cc-adminrocketswide.png' alt='admin-sales-page'/>
              </div>
              {/* <p>
                I købet af mandagen, følte jeg ikke længere at jeg kunne vente på at få raketterne op og køre fra vores backend/CMS'en.
                Jeg endte derfor med at bygge raket-siden op, ved brug af Next's egen API, og mock-data fra en lokal fil med en array.
              </p> */}
            </div>

            {/* <div class='article-text-section'>
              <h4>Uge 8</h4>
              <div class='large-img-cntr'>
                <img src='/data/media/posts/sdadminsales.png' alt='admin-sales-page'/>
              </div>
              <p>
                  I denne uge er vi i slutspurten af vores intro-projekt, og skal fremlægge det for kontoret på torsdag. 
                  Mandag bruger jeg på at arbejde videre på admin-siderne, og funtionaliteterne dertil.
              </p>
              <h5>Rockets</h5>
              <p>
                Den første admin-side er godt og vel færdig, som er Sales. 
                Denne side viser et overblik over virksomhedens antal kunder, 
                profit og revenue inkl. en graf, over et døgn, en uge eller månedsvist.
                Der er nogle mindre bugs hist og her som jeg skal have kigget på, 
                men umiddelbart kommer den fint frem, og gør det den skal.
              </p>
              <p>
                Dataen kommer som sagt fra noget mock-data, som i dette tilfælde er en lokal fil, med nogle arrays.
                Der er en array til ''day'', ''week'' og ''month'' dataen, hvor hver af dem indeholder det tilhørende data for revenue,
                profit og costumers.
              </p>
              <p>
                Jeg startede med at bygge mock-dataen op, fra bunden, jeg startede derfor med 'day', altså et døgn. Hver time tilskrev jeg en værdi for revenue/profit/customers,
                den sammenlagte værdi fra dette døgn, brugte jeg til at begynde at bygge på mock-dataen til for en uge, hvor ''mandag'' var lavet af det første døgns mock-data.
                sådan fortsatte jeg til jeg havde bygget en hel uge op, og ud fra den samme model, byggede jeg månederne op.
              </p>
              <p>
                Procenterne er også lavet ud fra mock-dataen. Her programmerede jeg en funktion, som tog hele f.eks. et døgn data, lagde sammen, og derefter udregnede gennemsnittet af dette. 
                Gennemsnittet omregnede jeg til et procenttal. Dette tal er ikke ment til at være realistisk, eller præcist, men blot for visualiseringen.
              </p>
            </div> */}

            {/* <div class='article-text-section'>
              <h4>Uge 6</h4>
              <p>
                Uge 6 flød meget sammen med uge 5, da det stortset var det samme vi arbejde med. 
                Jeg er stadigt i gang med både content og admin-siderne. <br/>
                Jeg har fået lavet noget mock-data, i form af en JSON-fil jeg har liggende lokalt, 
                som jeg kan bruge til mine sider, indtil jeg får noget data fra backenden. 
                Det var meningen at jeg gerne skulle have fået det i løbet af denne uge, 
                men nogle af tingene tager desværre bare lidt længere tid og/eller driller - som kode jo har det med at gøre. <br/>
                Det meste af tiden bruger jeg på at få skabt et større kendskab til Chakra UI og TypeScript. 
                Heldigvis er jeg lige så stille ved at føle mig mere komfortabel og sikker med Next JS.
              </p>
              <p>
                Jeg kan mærke at jeg så småt er begyndt at føle mig lidt stresset og presset, 
                da det er torsdag i næste uge vi skal præsentere vores produkt for hele Aarhus kontoret + lidt folk fra København. <br/>
                Jeg havde håbet på at være tættere på noget færdigt og mere funtionelt end det er nu, 
                da raket-siden under admin-siden er lidt svær at få skabt noget funtionalitet til, med mock-data, især
              </p>
                
              <div class='img-cntr'>
                <img src='/data/media/posts/img_20220827_191229e.jpg' alt='skylounge amsterdam'/>
              </div>
            </div> */}

          </div>
          {/* ----- template ----- */}
                                        
        </article>

      </section>
    </>
  );
};
