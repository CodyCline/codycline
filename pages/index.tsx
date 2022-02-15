
import { IconTag } from "../components/ui/Tag";

import Image from "next/image";
import { generateRssFeed } from "../lib/generate-rss";
import { generateSitemap } from "../lib/generate-sitemap";
import { Icon } from "../components/ui/Icon";
import { Tab, Tabs } from "../components/Tabs";
import { Answer, Prompt, Quiz } from "../components/Quiz";

const Home = () => {
    return (
        <div>
            <Quiz>
                <Prompt>
                    The term Raii stands for
                </Prompt>
                <Answer correct>Resource acquisition is initialization</Answer>
                <Answer>Resource Allocator Indeterminite Interface</Answer>
                <Answer>Runtime Allocater Interface Input</Answer>
                <Answer>Runtime Acquisition Is Infinite</Answer>
            </Quiz>
            <IconTag icon="tf">4chan</IconTag>
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
