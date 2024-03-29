import { Snippet, SnippetList } from "../../components/SnippetList";
import type { Snippet as Snp } from "../../types/post";
import { loadAllSnippets } from "../../lib/loadSnippets";
import { Pagination } from "../../components/Pagination";
import { readdirSync } from "fs";
import path from "path";
import { GetServerSidePropsContext, GetStaticPathsContext, GetStaticPropsContext } from "next";
import { PageSeo } from "../../components/Seo";
import { siteMetadata } from "../../site-metadata";
import { ContentTitle } from "../../components/ContentTemplate";

export const SNIPPETS_PER_PAGE = 1;


export async function getStaticPaths() {
    const allSnippets = readdirSync(path.join(process.cwd(), `content`, `snippets`));
    const totalPages = Math.ceil(allSnippets.length / SNIPPETS_PER_PAGE)
    const paths = Array.from({ length: totalPages }, (_, i) => ({
        params: { page: (i + 1).toString() },
    }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }: GetServerSidePropsContext) {
    const {
        page
    }: any = params;
    const allSnippets = await loadAllSnippets();

    const pageNumber = parseInt(page)
    const initialSnippets = allSnippets.slice(
        SNIPPETS_PER_PAGE * (pageNumber - 1),
        SNIPPETS_PER_PAGE * pageNumber
    );
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


const SnippetPages = ({ snippets, pagination }: any) => (
    <div>
        <PageSeo
            title={`snippets - ${siteMetadata.headerTitle}`}
            description={`short, byte-sized content for quick reading`}
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

export default SnippetPages;