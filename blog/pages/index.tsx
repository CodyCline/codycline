
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
import { Snippet, SnippetList } from "../components/SnippetList";
import { ProjectCard, ProjectList } from "../components/ProjectList";


const Home = () => {
    return (
        <div>
            <h1>Hello</h1>
            <ul>
                <li>
                    posts
                </li>
                
            </ul>
            <InlineCode>Hello</InlineCode>
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