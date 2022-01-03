import { getAllPosts } from "../lib/loadBlog";

import dynamic from "next/dynamic";
import styled from "styled-components";
import { Navbar } from "../components/Navbar";
import { IconTag, LinkTag } from "../components/ui/Tag";
import { Icon } from "../components/ui/Icon";
import { Link } from "../components/ui/Link";
import { Tooltip } from "../components/ui/Tooltip";
import { Divider } from "../components/ui/Divider";
import { OrderedList } from "../components/list/OrderedList";
import { ListItem } from "../components/list/ListItem";
import { UnorderedList } from "../components/list/UnorderedList";
import { InlineCode } from "../components/Code";
import { Spoiler } from "../components/Spoiler";
import { Tester } from "../components/ui/Media";
import { BlogCard, BlogList } from "../components/BlogList";
import { Snippet, SnippetList } from "../components/SnippetList";
import { ProjectCard, ProjectList } from "../components/ProjectList";
const ThemeToggle: any = dynamic((): any => import("../components/ThemeToggle"), {
    ssr: false,
});

function Home({ posts }: any) {
    console.log(posts);
    return (
        <div>
            <Navbar>Hello</Navbar>
            <Spoiler title="Hello"> 
                Hello World My name is ....
            </Spoiler>
            <h1>Hello</h1>
            <ul>
                <li>
                    posts
                </li>
                
            </ul>
            <InlineCode>Hello</InlineCode>
            <ThemeToggle />
            <OrderedList>
                <ListItem>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                </ListItem>
                <ListItem>
                    Hello there is something that needs to be said 
                </ListItem>
                <ListItem>
                    Hello there is something that needs to be said 
                </ListItem>
            </OrderedList>
            <UnorderedList>
                <ListItem>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                </ListItem>
                <ListItem>
                    Hello there is something that needs to be said 
                </ListItem>
                <ListItem>
                    Hello there is something that needs to be said 
                </ListItem>
            </UnorderedList>
            <IconTag icon="rust">rust</IconTag>
            <IconTag icon="llvm">llvm</IconTag>
            <IconTag icon="assembly">assembly</IconTag>
            <IconTag icon="c">c</IconTag>
            <BlogList>
                <BlogCard title="Test Blog" description="Walkthrough on how to build a web app that gives you random google maps locations to ... explore?" tags={["llvm", "rust", "c++"]} url="https://google.com"  />
                <BlogCard title="Test Blog" description="Walkthrough on how to build a web app that gives you random google maps locations to ... explore?" tags={["llvm", "rust", "c++"]} url="https://google.com"  />
                <BlogCard title="Test Blog" description="Walkthrough on how to build a web app that gives you random google maps locations to ... explore?" tags={["llvm", "rust", "c++"]} url="https://google.com"  />
                <BlogCard title="Test Blog" description="Walkthrough on how to build a web app that gives you random google maps locations to ... explore?" tags={["llvm", "rust", "c++"]} url="https://google.com"  />
            </BlogList>
            <SnippetList>
                <Snippet permaLink={"/404"} tags={["c++"]} title="C++ containers" description="Develop powerful C/C++ applications in a Docker environment"/>
                <Snippet permaLink={"/404"} tags={["c"]} title="Decompiling ROMs" description="Behind the curtain of an N64 game codebase"/>
                <Snippet permaLink={"/404"} tags={["cargo"]} title="useBattery" description="Detect battery in an application in react"/>
                <Snippet permaLink={"/404"} tags={["rust"]} title="Async Read" description="Rust helper function for fast reads"/>
            </SnippetList>
            <ProjectList>
                <ProjectCard/>
                <ProjectCard/>

                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>


            </ProjectList>
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