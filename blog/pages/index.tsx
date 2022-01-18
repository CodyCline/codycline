
import { IconTag, LinkTag } from "../components/ui/Tag";

import Image from "next/image";
import { generateRssFeed } from "../lib/generate-rss";
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
            <IconTag icon="rust">rust</IconTag>
            <IconTag icon="llvm">llvm</IconTag>
            <IconTag icon="assembly">assembly</IconTag>
            <IconTag icon="c">c</IconTag>
        </div>
    )
}


export async function getStaticProps() {
    await generateRssFeed();
    return {
        props: {}
    }
}

export default Home;