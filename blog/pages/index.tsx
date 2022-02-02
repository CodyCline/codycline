
import { IconTag, LinkTag } from "../components/ui/Tag";

import Image from "next/image";
import { generateRssFeed } from "../lib/generate-rss";
import { generateSitemap } from "../lib/generate-sitemap";
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
            <IconTag icon="4chan">4chan</IconTag>
            <IconTag icon="llvm">llvm</IconTag>
            <IconTag icon="archlinux">assembly</IconTag>
            <IconTag icon="c">c</IconTag>
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
