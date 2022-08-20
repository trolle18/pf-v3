import { useEffect, useState } from 'react';
import PostArticle from '../components/PostArticle';
import '../scss/App.scss';

export default function PostsPage() {
    const [posts, setPosts] = useState([]);

    // Fetch posts from JSON
    useEffect(() => {      
        async function getData() {
            const response = await fetch("/data/posts.json");
            const data = await response.json();
            setPosts(data); 
        }       
        getData();        
    }, []);

    return (
        <>
            <section className="page">
                <section className="work-cntr section">
                    <div className="work-cntr-title">
                        <h2>Posts</h2>
                        {/* <span className="sub-title">Here is a few of the projects I have been working on</span> */}
                    </div>

                    {posts
                    .filter( (post) => post.online.includes('y'))
                    .sort ( (a, b) => a.value < b.value ? 1 : -1)
                    .map( (post) => (
                        <PostArticle post={post} key={post.id}/>
                    ))}
                </section>
            </section>
        </>
    );
};
