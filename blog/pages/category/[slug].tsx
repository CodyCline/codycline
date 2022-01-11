import { useRouter } from "next/router";
import { ArticleCard, ArticleList } from "../../components/ArticleList";
import { ProjectCard, ProjectList } from "../../components/ProjectList";
import { Snippet, SnippetList } from "../../components/SnippetList";
import { Icon } from "../../components/ui/Icon";
import { loadAllArticles } from "../../lib/load-articles";
import { loadAllCategories  } from "../../lib/load-categories";
import { loadAllProjects } from "../../lib/load-projects";
import { loadAllSnippets } from "../../lib/load-snippets";
import { Article, Project, Snippet as Snp } from "../../types/post";



const CategoryPage = ({articles, snippets, projects}:any) => {
    const router = useRouter();
    const { slug } = router.query;
    const currentCategory = slug?.toString().replace(/./, c => c.toUpperCase())
    return (
        <div>
            <h2><Icon width={24} height={24} name={slug}/> {currentCategory} Content</h2>
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
            <ProjectList>
                {projects && 
                    projects.map((project: Project) => (
                        <ProjectCard
                            image={project.hero}
                            key={project.slug}
                            title={project.title}
                            description={project.description}
                            links={project.links}
                            permaLink={project.permaLink}
                            type={project.type}
                            buildLink={null}
                            tags={project.tags}

                        />
                    )
                )}
            </ProjectList>
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
        </div>
    )
}


export const getStaticPaths = async () => {
    const categories =  await loadAllCategories();
    const paths = categories.map((category:any) => ({
        params: {
            slug: category.name
        }
    }))
    return {
        paths,
        fallback: false
    }
}


export const getStaticProps = async ({ params: { slug } }: any) => {
    const [articles, projects, snippets] = await Promise.all([
        loadAllArticles(),
        loadAllProjects(),
        loadAllSnippets(),
    ])
    
    const filteredArticles: Article[] = articles.filter((article: Article) => {
        if (article.tags.find((tag: string) => tag.toLowerCase() == slug.toLowerCase())) {
            return article;
        }
    })

    const filteredProjects: Project[] = projects.filter((project: Project) => {
        if (project.tags.find((tag: string) => tag.toLowerCase() == slug.toLowerCase())) {
            return project;
        }
    })
    
    const filteredSnippets: Snp[] = snippets.filter((snippet: Snp) => {
        if (snippet.tags.find((tag: string) => tag.toLowerCase() == slug.toLowerCase())) {
            return snippet;
        }
    })

    return {
        props: {
            articles: filteredArticles,
            projects: filteredProjects,
            snippets: filteredSnippets,
        }
    }
}

export default CategoryPage;