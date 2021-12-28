import { getAllPosts } from "../../lib/loadBlog";


function Index({posts}:any) { 
    console.log(posts);
    return (
        <div>
            <h1>Blog Posts</h1>
            <ul>
                <li>
                    posts
                </li>
            </ul>
        </div>
    )
}


export async function getStaticProps() {
    const blogPosts = await getAllPosts();

    return {
        props: {
            posts: blogPosts
        }
    }
}

export default Index;