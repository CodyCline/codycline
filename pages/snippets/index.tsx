import { Snippet, SnippetList } from "../../components/SnippetList";
import type { Snippet as Snp } from "../../types/post";
import { loadAllSnippets } from "../../lib/loadSnippets";
import { Pagination } from "../../components/Pagination";
import { PageSeo } from "../../components/Seo";
import { siteMetadata } from "../../site-metadata";
import { ContentTitle } from "../../components/ContentTemplate";

export const SNIPPETS_PER_PAGE = 8;

const SnippetsIndex = ({ snippets, pagination }: any) => (
    <div>
        <PageSeo 
            title={`snippets - ${siteMetadata.headerTitle}`}
            description={`short, byte-sized content for quick reading and clipping`}
        />
        <ContentTitle header="Snippets">
            byte-sized content for quick reading and clipping
        </ContentTitle>
        <SnippetList>
            {snippets && snippets.map((snippet: Snp) => {
                return (
                    <Snippet
                        key={snippet.slug}
                        title={snippet.title}
                        description={snippet.description}
                        href={snippet.href}
                        date={snippet.updated! || snippet.created}
                        tags={snippet.tags}
                    />
                )
            })}
        </SnippetList>
        <Pagination slug="snippets" currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
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