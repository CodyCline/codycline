import { getAllPosts } from "../lib/blog";


function Home({posts}:any) { 
    console.log(posts);
    return (
        <div>
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