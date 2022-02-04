import { ArticleList, ArticleCard } from "../../components/ArticleList";
import { loadAllArticles } from "../../lib/load-articles";
import type { GetServerSidePropsContext, GetStaticProps } from 'next';
import { Article } from "../../types/post";
import { readdirSync } from "fs";
import path from "path";
import { ARTICLES_PER_PAGE } from ".";
import { Pagination } from "../../components/Pagination";
import { siteMetadata } from "../../site-metadata";
import { PageSeo } from "../../components/Seo";
import { ContentTitle } from "../../components/ContentTemplate";

type Content = {
    articles: Article[],
    pagination: any,
}







export async function getStaticPaths() {
    const allArticles = readdirSync(path.join(process.cwd(), "content/articles/"))
    const totalPages = Math.ceil(allArticles.length / ARTICLES_PER_PAGE)
    const paths = Array.from({ length: totalPages }, (_, i) => ({
        params: { page: (i + 1).toString() },
    }))

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async ({ params }: GetServerSidePropsContext) => {
    const {
        page
    }:any = params;
    const allArticles = await loadAllArticles();
    const pageNumber = parseInt(page)
    const initialArticles = allArticles.slice(
      ARTICLES_PER_PAGE * (pageNumber - 1),
      ARTICLES_PER_PAGE * pageNumber
    );

    const pagination = {
        currentPage: pageNumber,
        totalPages: Math.ceil(allArticles.length / ARTICLES_PER_PAGE)
    };
    return {
        props: {
            articles: initialArticles,
            pagination: pagination,
        }
    }
}


function ArticlePages({ articles, pagination }: Content) {
    return (
        <div>
            <ContentTitle header="Articles">
                Full-feature posts
            </ContentTitle>
            <PageSeo 
                title={`articles - ${siteMetadata.headerTitle}`} 
                description={siteMetadata.description} 
            />
            <h1>Blog Posts</h1>
            
            <ArticleList>
                {articles && articles.map((article: Article) => {
                    const { hero, slug, title, tags, description, updated, created, permaLink } = article;
                        return (
                            <ArticleCard
                                key={slug}
                                image={hero}
                                title={title}
                                description={description}
                                tags={tags}
                                date={updated || created}
                                permaLink={permaLink}
                            />
                        );
                    })
                }
            </ArticleList>
            <Pagination slug="articles" currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
        </div>
    )
}

export default ArticlePages;


