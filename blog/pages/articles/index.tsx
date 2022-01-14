import { ArticleList, ArticleCard } from "../../components/ArticleList";
import { loadAllArticles } from "../../lib/load-articles";
import type { GetStaticProps } from 'next';
import { Article } from "../../types/post";
import { Pagination } from "../../components/Pagination";
import { PageSeo } from "../../components/Seo";
import { siteMetadata } from "../../site-metadata";


export const ARTICLES_PER_PAGE = 1;


type Content = {
    articles: Article[],
    pagination: any,
}

function ArticleIndex({ articles, pagination }: Content) {
    return (
        <div>
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
                    )
                })
                }
            </ArticleList>
            <Pagination slug="articles" currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
        </div>
    )
}


export const getStaticProps: GetStaticProps = async () => {
    const allArticles = await loadAllArticles();
    const initialDisplayArticles = allArticles.slice(0, ARTICLES_PER_PAGE)
    const pagination = {
        currentPage: 1,
        totalPages: Math.ceil(allArticles.length / ARTICLES_PER_PAGE),
    }
    return {
        props: {
            articles: initialDisplayArticles,
            pagination: pagination,
        }
    }
}

export default ArticleIndex;