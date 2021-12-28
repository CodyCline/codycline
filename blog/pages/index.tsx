import { getAllPosts } from "../lib/loadBlog";

import dynamic from "next/dynamic";
import styled from "styled-components";
import { Navbar } from "../components/Navbar";

const ThemeToggle:any = dynamic(():any => import("../components/ThemeToggle"), {
  ssr: false,
});

function Home({posts}:any) { 
    console.log(posts);
    return (
        <div>
        <Navbar>Hello</Navbar>

            <h1>Hello</h1>
            <ul>
                <li>
                    posts
                </li>
            </ul>
            <ThemeToggle />
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