import { Snippet, SnippetList } from "../../components/SnippetList";
import type { Snippet as Snp } from "../../types/post";
import { loadAllSnippets } from "../../lib/load-snippets";


function Index({ snippets }: any) {
    return (

        <div>
            <h1>Snippets</h1>
            <p>Byte-sized content for quick reading.</p>
            <SnippetList>
                {snippets && snippets.map((snippet: Snp) => {
                    return (
                        <Snippet 
                            title={snippet.title} 
                            description={snippet.description}
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