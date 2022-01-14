import { Snippet, SnippetList } from "../../components/SnippetList";
import type { Snippet as Snp } from "../../types/post";
import { loadAllSnippets } from "../../lib/load-snippets";
import { Pagination } from "../../components/Pagination";

export const SNIPPETS_PER_PAGE = 1;

const SnippetsIndex = ({ snippets, pagination }: any) => (
    <div>
        <h1>Snippets</h1>
        <p>Byte-sized content for quick reading.</p>
        <SnippetList>
            {snippets && snippets.map((snippet: Snp) => {
                return (
                    <Snippet
                        key={snippet.slug}
                        title={snippet.title}
                        description={snippet.description}
                        permaLink={snippet.permaLink}
                        date={snippet.updated! || snippet.created}
                        tags={snippet.tags}
                    />
                )
            })}
        </SnippetList>
        <Pagination slug="projects" currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
    </div>
)


export async function getStaticProps() {
    const allSnippets = await loadAllSnippets();
    const initialSnippets = allSnippets.slice(0, SNIPPETS_PER_PAGE);
    const pagination = {
        currentPage: 1,
        totalPages: Math.ceil(allSnippets.length / SNIPPETS_PER_PAGE),
    }
    return {
        props: {
            snippets: initialSnippets,
            pagination: pagination,
        }
    }
}

export default SnippetsIndex;