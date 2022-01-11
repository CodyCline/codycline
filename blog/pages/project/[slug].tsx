import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import path from "path";
import fs from "fs";
import { MarkdownWrapper } from '../../components/Markdown';
import { ContentBodyWrapper, ContentHeader, ContentHero, ContentTags } from '../../components/ContentTemplate';
import { IconTag } from '../../components/ui/Tag';
import { Project } from '../../types/post';
import { loadProjectBySlug } from '../../lib/load-projects';
import imageMetadata from '../../lib/image-metadata';

const ProjectPage = ({ project, projectMdxSource }: any) => {
    return (
        <>
            <ContentHero src={project.hero?.src}/>
            <ContentBodyWrapper>
                <ContentHeader>{project.title}</ContentHeader>
                <MarkdownWrapper>{projectMdxSource}</MarkdownWrapper>
                {project.updated && <span>{project.updated.toISOString()}</span>}
                <ContentTags>
                    {project.tags &&
                        project.tags.map((tag: string, i: number) =>
                            <IconTag key={i} link={`/category/${tag}`} icon={tag}>{tag}</IconTag>
                        )
                    }
                </ContentTags>
            </ContentBodyWrapper>

        </>
    )
}


export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join(process.cwd(), "content/projects/"))
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }))
    return {
        paths,
        fallback: false
    }
}


export const getStaticProps = async ({ params: { slug } }: any) => {
    const project: Project = await loadProjectBySlug(slug);
    const mdxSource: MDXRemoteSerializeResult<Record<string, unknown>> = await serialize(project.___rawContent, {
        mdxOptions: {
            rehypePlugins: [imageMetadata]
        }
    });
    return {
        props: {
            project: project,
            projectMdxSource: mdxSource
        }
    }
}

export default ProjectPage;