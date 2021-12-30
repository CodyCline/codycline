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

const ThemeToggle: any = dynamic((): any => import("../components/ThemeToggle"), {
    ssr: false,
});

function Home({ posts }: any) {
    console.log(posts);
    return (
        <div>
            <Navbar>Hello</Navbar>

            <h1>Hello</h1>
            <ul>
                <li>
                    posts
                </li>
                <Link href="https://google.com/blog">Blog</Link>
                <IconTag icon="python" >Python</IconTag>
                <IconTag icon="rust">Rust</IconTag>
                <IconTag icon="stack-overflow">Stack</IconTag>
                <IconTag icon="snapcraft">snap</IconTag>
                <IconTag icon="unity">Golang</IconTag>
                <IconTag icon="cmake">csharp</IconTag>
                <IconTag icon="cpp">cpp</IconTag>
                <IconTag icon="java">java</IconTag>
                <IconTag icon="cargo">cargo</IconTag>
                <IconTag icon="nodejs">nodejs</IconTag>
                <IconTag icon="graphql">graphql</IconTag>
                <LinkTag link="https://google.com">See google</LinkTag>
            </ul>
            <div data-tip data-for="test">
                Tooltip!
                <Tooltip id="test" effect="solid">
                    <span>Show sad face</span>
                </Tooltip>
            </div>
            <Divider/>
            <ThemeToggle />
            <OrderedList>
                <ListItem>
                    Hello
                </ListItem>
            </OrderedList>
            
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