import { BlogCard, BlogList } from "../../components/BlogList";
import { loadAllPosts } from "../../lib/load-posts";
import type { GetStaticProps } from 'next';
import { BlogPost } from "../../types/post";


type Content = {
    posts: BlogPost[],
}

function Index({posts}:Content) { 
    console.log(posts);
    return (
        <div>
            <h1>Blog Posts</h1>
            <BlogList>
                {posts && 
                    posts.map((post, idx) => {
                        return (
                            <BlogCard 
                                key={idx}
                                title={post.title} 
                                description={post.description} 
                                tags={post.tags}
                                date={post.updated || post.created}
                                permaLink={post.permaLink}
                            />
                        )
                    })
                }
            </BlogList>
        </div>
    )
}


export const getStaticProps: GetStaticProps = async () => {
    const blogPosts = await loadAllPosts();
    
    return {
        props: {
            posts: blogPosts
        }
    }
}

export default Index;