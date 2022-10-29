import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BiLeftArrowAlt } from 'react-icons/bi'
// import '../scss/ArticlePage.scss';

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

          <div className="article-content" dangerouslySetInnerHTML={ {__html: post.descHtml} }></div>    

          {/* ----- template ----- */}
          {/* <div class='article-content'>
            <div class='article-text-section'>
              <p>
                Uge 7 og 8 af mit praktikforløb vakker mod enden, vi har fået præsenteret vores intro-projekt, 
                og jeg har endeligt kunne komme på nogle rigtige projekter!
              </p>
              <p>
                Jeg har fundet ud af, hvad jeg (højest sandsyneligt) skal arbejde på til min hovedopgave, 
                hvilket jeg er super spændt på! Der havde været lidt snak og overvejelser om, 
                hvorvidt det ville blive Oister, Change Lingeri eller Carlsbergfondet, 
                og det ser ud til at det bliver Carlsbergfondet. Det bliver helt sikkert en fed mulighed og oplevelse, 
                at få lov til at være med på det projekt! <br/>
                Det bliver umiddelbart først i min 9. uge, efter hovedopgavens kick-off, 
                at jeg kommer i gang med Carlsbergfondet. Intil da, er jeg sat på andre projekter, så som Andelskassen.
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
                Der er en array til <span class='ital'>''day''</span>, <span class='ital'>''week''</span> og <span class='ital'>''month''</span> dataen, 
                hvor hver af dem indeholder det tilhørende data for revenue, profit og costumers.
              </p>
              <p>
                Jeg startede med at bygge mock-dataen op, fra bunden, jeg startede derfor med <span class='ital'>''day''</span>, altså et døgn. 
                Hver time tilskrev jeg en værdi for revenue / profit / customers,
                den sammenlagte værdi fra dette døgn, brugte jeg til at begynde at bygge på mock-dataen til for en uge, 
                hvor <span class='ital'>''monday''</span> var lavet af det første døgns mock-data.
                sådan fortsatte jeg til jeg havde bygget en hel uge op, og ud fra den samme model, byggede jeg månederne op.
              </p>
              <p>
                Procenterne er også lavet ud fra mock-dataen. Her programmerede jeg en funktion, som tog hele f.eks. et døgn data, lagde sammen, 
                og derefter udregnede gennemsnittet af dette. 
                Gennemsnittet omregnede jeg til et procenttal. Dette tal er ikke ment til at være realistisk, eller præcist, 
                men blot for visualiseringen.
              </p>

              <div class='large-img-cntr'>
                <img src='/data/media/posts/adminpagerockets.png' alt='rockets page'/>
              </div>
              <h5>Rockets</h5>
              <p>
                I løbet af mandagen, følte jeg ikke længere at jeg kunne vente på at få raketterne op og køre fra vores backend/CMS'en.
                Jeg endte derfor med at bygge raket-siden op, ved brug af Next's egen API, og mock-data fra en lokal fil med en array.
              </p>
              <p>
                Next's API routes giver muligheden for at opbygge en API med Next. Inde i mappen <span class='ital'>''pages''</span>, findes alle fileren til appens sider, 
                men også en mappe kaldet <span class='ital'>''api''</span>. Enhver fil i api-mappen, ligesom de der ligger i <span class='ital'>''pages''</span>, 
                men de vil blive behandlet som en API-endpoint istedet for en side. 
                De er <span class='ital'>''server-side only bundles''</span> og vil derfor ikke øge vores client-side bundle (Altså, vil det ikke tynge appen).
              </p>
              <p>
                Ved at lave raket-siden med API'en, kan jeg også bygge nogle undersider op, 
                f.eks. en side jeg kan komme til, ved at klikke på en raket fra raket-siden, 
                og blive ført videre til en side hvor jeg kan redigere eller slette den specifikke raket.
                Jeg lavede også en underside hvor jeg kunne lave nye raketter.
              </p>
              <div class='img-outer-cntr'>
                <div class='sec-img-cntr'>
                  <img src='/data/media/posts/admineditrocket.png' alt='edit rocket'/>
                </div> 
                <div class='sec-img-cntr'>
                  <img src='/data/media/posts/c-adminpageaddrocket.png' alt='add rocket'/>
                </div> 
              </div>   
            </div>
             

            <div class='article-text-section'>
              <h4>Uge 8</h4>
              <p>
                I denne uge har jeg endeligt fået lov til at arbejde på nogle rigtige projekter. 
                Jeg blev hurtigt sat på lidt forskellige projekter, 
                som Andelskassen, Carlsberg Headless, og Carlsbergfondet.
              </p>

              <h5>Andelskassen</h5>
              <p>
                Dette er et igangsværende projekt, for Andelskassen, som er en ny hjemmeside. 
                Her arbejder jeg sammen med en blandet af nogle fra Aarhus kontoret, og nogle fra Københavns kontor. 
                Projektet er lavet med JavaScript, Sass, #C og Umbraco som CMS. 
                Projektet er allerede ret langt, og de fleste opgaver er derfor mindre opgaver, 
                så som ting der skal rettes eller hvor der er brug for troubleshooting. 
              </p>
              <p>
                En af de opgaver der skulle udføres, var nogle links, som var sorte. 
                Problemet her, var at de altid var sorte, selv på mørke baggrunde, hvilket gjorde dem svære at læse. 
                Opgaven var derfor at sørge for, at de var hvide, når de var på en mørkbaggrund. 
                For at rette dette, skulle jeg finde de tilfælde hvor der var brug for at linksne var hvide, 
                som var i nogle cards, der havde en mørk baggrund. 
                Jeg kunne derfor finde den tilhørende Sass-fil, til de cards, og rette stylingen, 
                således at de links som var inde i de cards ville være hvide.
              </p>
              <p>
                En anden opgave jeg fik, var at sørge for at hvis der var en længere titel inde i en sektion, 
                hvor et ord blev for langt, at de så ville blive brudt op de rigtige steder.
                For at løse dette fandt jeg først den tilhørende Sass-fil, hvor jeg kunne ændre stylingen, 
                så der kom en hyphen, når et ord blev brudt op, og fortsatte på næste linje.
              </p>
              <div class='img-outer-cntr'>
                <div class='sec-img-cntr'>
                  <img src='/data/media/posts/nohyphen.png' alt='edit rocket'/>
                </div> 
                <div class='sec-img-cntr'>
                  <img src='/data/media/posts/whyphen.png' alt='add rocket'/>
                </div> 
              </div>   
              <p>
                Problemet med denne løsning var bare, at man ikke kunne regne med at ordet ville blive delt op, 
                på en måde der var grammatisk korrekt. 
                Jeg skulle derfor finde ud af en måde, vha. JavaScript, at støtte op om den måde, stylingen indsatte hyphens. 
                Jeg fandt en package, kaldet <span class='ital'>''Hyphen''</span>, som jeg kunne tilføje og implementere. <br/>
                Jeg kunne derfor, i min JavaScript, først specifisere hvad, jeg gerne ville have fat på fra html'en, 
                i dette tilfælde var det titlen med en class kaldet <span class='ital'>''text-image__headline''</span>. 
                Jeg kunne derefter, med Hyphen-packagen, lave en løsning, så den sørgede for at dette ord, 
                blev delt op korrekt efter dansk grammatik. 
              </p>               
            </div>
          </div> */}
          {/* ----- template ----- */}
                                        
        </article>

      </section>
    </>
  );
};
