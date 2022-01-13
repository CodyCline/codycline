import { ArticleList, ArticleCard } from "../../components/ArticleList";
import { loadAllArticles } from "../../lib/load-articles";
import type { GetStaticProps } from 'next';
import { Article } from "../../types/post";


export const ARTICLES_PER_PAGE = 1;


type Content = {
    articles: Article[],
}

function ArticleIndex({articles}:Content) {
    return (
        <div>
            <h1>Blog Posts</h1>
            <ArticleList>
                {articles && articles.map((article: Article) => {
                    const { hero, slug, title, tags, description, updated, created, permaLink} = article;
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
        </div>
    )
}


export const getStaticProps: GetStaticProps = async () => {
    const allArticles = await loadAllArticles();
    
    return {
        props: {
            articles: allArticles
        }
    }
}

export default ArticleIndex;