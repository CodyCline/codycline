
import { IconTag } from "../components/ui/Tag";

import { generateRssFeed } from "../lib/generate-rss";
import { generateSitemap } from "../lib/generate-sitemap";
import dynamic from "next/dynamic";
import background from "../public/assets/img/background.jpg";
import { LandingCard, LandingSummary, LandingTitle, LandingWrapper } from "../components/Landing";
import { siteMetadata } from "../site-metadata";
const Portal: any = dynamic((): any => import("../components/ui/Portal"), {
    ssr: false,
});
const ParticleBackground: any = dynamic((): any => import("../components/Landing"), {
    ssr: false,
});



const Home = () => {
    return (
        <>  
            <ParticleBackground src={background.src} />
            <LandingWrapper>
                <LandingTitle>Hello, I'm {siteMetadata.author.name}</LandingTitle>
                <LandingCard>
                    <LandingSummary>{siteMetadata.author.summary}</LandingSummary>
                </LandingCard>
            </LandingWrapper>
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
