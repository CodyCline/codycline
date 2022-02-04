import path from "path";
import fs from "fs";
import { MdxRenderer } from '../../components/Mdx';
import { ContentBodyWrapper, ContentHeader, ContentHero, ContentTags } from '../../components/ContentTemplate';
import { IconTag } from '../../components/ui/Tag';
import { Project } from '../../types/post';
import { loadProjectBySlug } from '../../lib/load-projects';
import imageMetadata from '../../lib/image-metadata';
import { siteMetadata } from '../../site-metadata';
import { ContentSeo } from '../../components/Seo';
import { formatSlug } from '../../lib/utils/format-slug';
import { eDateFormat } from "../../lib/utils/format-date";
import { useRef } from "react";
import { Progressbar } from "../../components/ui/Progressbar";

const ProjectPage = ({ project }: any) => {
    const ref = useRef<any>()
    return (
        <>
            <ContentSeo
                url={`${siteMetadata.siteUrl}/project/${project.slug}`}
                authorDetails={siteMetadata.author}
                {...project}
            />
            <Progressbar target={ref}/>
            <ContentHero src={project.hero?.src}/>
            <ContentBodyWrapper ref={ref}>
                <span title={project.published.toString()}>Published: {eDateFormat(project.published)}</span>
                <span title={project.updated.toString()}> Last Updated: {eDateFormat(project.published)}</span>
                <ContentHeader>{project.title}</ContentHeader>
                <MdxRenderer source={project.___rawContent}/>
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
    const files = fs.readdirSync(path.join(process.cwd(), `content`, `projects`))
    const paths = files.map(filename => ({
        params: {
            slug: formatSlug(filename)
        }
    }))
    return {
        paths,
        fallback: false
    }
}


export const getStaticProps = async ({ params: { slug } }: any) => {
    const project: Project = await loadProjectBySlug(slug);
    return {
        props: {
            project: project,
        }
    }
}

export default ProjectPage;