
import { IconTag } from "../components/ui/Tag";

import Image from "next/image";
import { generateRssFeed } from "../lib/generate-rss";
import { generateSitemap } from "../lib/generate-sitemap";
import { Icon } from "../components/ui/Icon";
import { Tab, Tabs } from "../components/Tabs";
import { Answer, Prompt, Quiz } from "../components/Quiz";
import dynamic from "next/dynamic";
import background from "../public/assets/img/background.jpg";
const ParticleBackground: any = dynamic((): any => import("../components/ParticleBackground"), {
    ssr: false,
});

const Home = () => {
    return (
        <>
            <ParticleBackground src={background.src} />

        </>
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
