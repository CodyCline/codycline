import { BlogCard, BlogList } from "../../components/BlogList";
import { getAllPosts } from "../../lib/loadBlog";


function Index({posts}:any) { 
    return (
        <div>
            <h1>Blog Posts</h1>
            <BlogList>
                <BlogCard title="Test Blog" description="Walkthrough on how to build a web app that gives you random google maps locations to ... explore?" tags={["python", "google", "algorithms"]} url="https://google.com"  />
                <BlogCard title="Test Blog" description="Guide to making your own toy programming language using the powerful LLVM toolchain and lectical analysis, with vector math" tags={["llvm", "rust", "c++"]} url="https://google.com"  />
                <BlogCard title="Test Blog" description="Walkthrough on how to build a web app that gives you random google maps locations to ... explore?" tags={["llvm", "rust", "c++"]} url="https://google.com"  />
                <BlogCard title="Test Blog" description="Walkthrough on how to build a web app that gives you random google maps locations to ... explore?" tags={["llvm", "rust", "c++"]} url="https://google.com"  />
            </BlogList>
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