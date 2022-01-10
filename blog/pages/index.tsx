
import { IconTag, LinkTag } from "../components/ui/Tag";
import { OrderedList } from "../components/list/OrderedList";
import { ListItem } from "../components/list/ListItem";
import { UnorderedList } from "../components/list/UnorderedList";
import { InlineCode } from "../components/Code";

import Image from "next/image";
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
    return {
        props: {
            posts: []
        }
    }
}

export default Home;