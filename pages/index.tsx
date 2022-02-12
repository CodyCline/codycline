
import { IconTag } from "../components/ui/Tag";

import Image from "next/image";
import { generateRssFeed } from "../lib/generate-rss";
import { generateSitemap } from "../lib/generate-sitemap";
import { Icon } from "../components/ui/Icon";
import { Tab, Tabs } from "../components/Tabs";

const Home = () => {
    return (
        <div>
            <h1>Hello</h1>
            <ul>
                <li>
                    posts
                </li>
            </ul>
            <Tabs>
                <Tab title="Hello World">
                    Hello
                </Tab>
                <Tab title="Hello World">
                    Other hello
                </Tab>
            </Tabs>
            <Image src="/content/build_it.gif" height={30} width={30}/>
            <IconTag icon="tf">4chan</IconTag>
            <Icon height={50} width={50} name="chef"/>
            <IconTag icon="llvm">llvm</IconTag>
            <IconTag icon="cookbook">assembly</IconTag>
            <IconTag icon="patch">patch 2.2</IconTag>
            
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
