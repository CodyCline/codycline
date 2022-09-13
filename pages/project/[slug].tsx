import path from "path";
import fs from "fs";
import { MdxRenderer } from '../../components/Mdx';
import { ContentBodyWrapper, ContentHeader, ContentHero, ContentTags } from '../../components/ContentTemplate';
import { IconTag } from '../../components/ui/Tag';
import { Project } from '../../types/post';
import { loadProjectBySlug } from '../../lib/loadProjects';
import { siteMetadata } from '../../site-metadata';
import { ContentSeo } from '../../components/Seo';
import { formatSlug } from '../../lib/utils/formatSlug';
import { eDateFormat } from "../../lib/utils/formatDate";
import { useRef } from "react";
import { Progressbar } from "../../components/ui/Progressbar";

const ProjectPage = ({ project }: any) => {
    const ref = useRef<any>()
    const { published, updated, content, hero, title, tags }: Project = project;
    return (
        <>
            <ContentSeo
                url={`${siteMetadata.siteUrl}/project/${project.slug}`}
                authorDetails={siteMetadata.author}
                {...project}
            />
            <Progressbar target={ref}/>
            {hero && <ContentHero src={hero.src}/> }
            <ContentBodyWrapper ref={ref}>
                <ContentHeader>{title}</ContentHeader>
                <span title={published.toString()}>Published: {eDateFormat(published)}</span>
                <span title={updated!.toString()}> Last Updated: {eDateFormat(updated!)}</span>
                <MdxRenderer source={content}/>
                {project.updated && <span>{updated!.toISOString()}</span>}
                <ContentTags>
                    {tags &&
                        tags.map((tag: string, i: number) =>
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