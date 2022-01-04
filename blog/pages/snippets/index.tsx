import { Snippet, SnippetList } from "../../components/SnippetList";
import { getAllSnippets } from "../../lib/snippets";


function Index({ snippets }:any) { 
    console.log( snippets );
    return (
        <div>
            <h1 style={{color: "#ffe77a"}}>Snippets</h1>
            <p>Byte-sized content for quick reading.</p>
            <SnippetList>
                <Snippet permaLink={"/404"} tags={["c++"]} title="C++ containers" description="Develop powerful C/C++ applications in a Docker environment"/>
                <Snippet permaLink={"/404"} tags={["c"]} title="Decompiling ROMs" description="Behind the curtain of an N64 game codebase"/>
                <Snippet permaLink={"/404"} tags={["cargo"]} title="useBattery" description="Detect battery in an application in react"/>
                <Snippet permaLink={"/404"} tags={["rust"]} title="Async Read" description="Rust helper function for fast reads"/>
            </SnippetList>
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