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
                    <Link to='/posts'><BiLeftArrowAlt/> Posts </Link>
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
                                                
                </article>

            </section>
        </>
    );
};
