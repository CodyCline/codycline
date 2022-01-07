import { ArticleList, ArticleCard } from "../../components/ArticleList";
import { loadAllArticles } from "../../lib/load-articles";
import type { GetStaticProps } from 'next';
import { Article } from "../../types/post";


type Content = {
    articles: Article[],
}

function ArticleIndex({articles}:Content) { 
    return (
        <div>
            <h1>Blog Posts</h1>
            <ArticleList>
                {articles && 
                    articles.map((article, idx) => {
                        return (
                            <ArticleCard 
                                key={idx}
                                title={article.title} 
                                description={article.description} 
                                tags={article.tags}
                                date={article.updated || article.created}
                                permaLink={article.permaLink}
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