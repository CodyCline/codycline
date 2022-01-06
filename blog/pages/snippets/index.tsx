import { Snippet, SnippetList } from "../../components/SnippetList";
import type { Snippet as Snp } from "../../types/post";
import { loadAllSnippets } from "../../lib/load-snippets";


function Index({ snippets }: any) {
    console.log(snippets);
    return (

        <div>
            <h1>Snippets</h1>
            <p>Byte-sized content for quick reading.</p>
            <SnippetList>
                {snippets && snippets.map((snippet: Snp) => {
                    return (
                        <Snippet 
                            title="C++ containers" 
                            description="Develop powerful C/C++ applications in a Docker environment" 
                            permaLink={snippet.permaLink}
                            date={snippet.updated! || snippet.created}
                            tags={snippet.tags}
                        />
                    )
                })}
            </SnippetList>
        </div>
    )
}


export async function getStaticProps() {
    const snippetPosts = await loadAllSnippets();

    return {
        props: {
            snippets: snippetPosts
        }
    }
}

export default Index;