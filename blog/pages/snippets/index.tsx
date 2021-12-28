import { getAllSnippets } from "../../lib/snippets";


function Index({ snippets }:any) { 
    console.log( snippets );
    return (
        <div>
            <h1>Snippets</h1>
            <p>Byte-sized content for quick reading.</p>
            <ul>
                <li>
                    posts
                </li>
            </ul>
        </div>
    )
}


export async function getStaticProps() {
    const snippetPosts = await getAllSnippets();

    return {
        props: {
            snippets: snippetPosts
        }
    }
}

export default Index;