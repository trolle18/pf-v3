import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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

    function getImg(post) {
        if (post.imgs?.length >= 1) {
            return post.imgs[0]?.imgSrc;
        } 
    };


    return (
        <>
            <section className="page">
                <div className="page-header">
                    {/* <UseBackListener/> */}
                    <h2>Article Page</h2>
                    <span className="sub-title">Here is a subtitle</span>
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
                    </div>

                    <div className="article-content">
                        <span>{post?.desc} </span>
                        {/* <div> */}
                            {/* {article.imgs?.map((imgs) => (
                                    <div className="img-cntr" key={imgs.imgId}>
                                        <img alt={imgs.imgAlt} src={imgs.imgSrc}/>
                                    </div>
                                ))}                             */}
                        {/* </div> */}
                       
                    </div>
                   
                </article>

            </section>
        </>
    );
};
