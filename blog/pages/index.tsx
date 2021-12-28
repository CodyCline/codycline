import { getAllPosts } from "../lib/loadBlog";


function Home({posts}:any) { 
    console.log(posts);
    return (
        <div>
            <h1>Hello</h1>
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

export default Home;