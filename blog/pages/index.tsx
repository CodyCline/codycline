
import { IconTag } from "../components/ui/Tag";

import Image from "next/image";
import { generateRssFeed } from "../lib/generate-rss";
import { generateSitemap } from "../lib/generate-sitemap";
import { Icon } from "../components/ui/Icon";
import dynamic from "next/dynamic";
import Admonition from "../components/Admonition";

const Home = () => {
    return (
        <div>
            <h1>Hello</h1>
            <ul>
                <li>
                    posts
                </li>
                
            </ul>
            <Image src="/content/build_it.gif" height={30} width={30}/>
            <IconTag icon="tf">4chan</IconTag>
            <Icon height={50} width={50} name="chef"/>
            <IconTag icon="llvm">llvm</IconTag>
            <IconTag icon="cookbook">assembly</IconTag>
            <IconTag icon="patch">patch 2.2</IconTag>
            <Admonition type="note" title="A quick note ...">
                Hello
            </Admonition>
            <Admonition type="tip" title="A quick note ...">
                Hello
            </Admonition>
            <Admonition type="info" title="A quick note ...">
                Hello
            </Admonition>
            <Admonition type="experimental" title="A quick note ...">
                This feature is an experimental fixture 
            </Admonition>
            <Admonition type="caution" title="A quick note ...">
                Hello
            </Admonition>
            <Admonition type="danger" title="A quick note ...">
                Hello
            </Admonition>
            <Admonition type="fatal" title="A quick note ...">
                Hello
            </Admonition>
        </div>
    )
}


export async function getStaticProps() {
    await generateRssFeed();
    await generateSitemap();
    return {
        props: {}
    }
}

export default Home;
