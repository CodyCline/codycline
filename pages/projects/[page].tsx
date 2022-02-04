import { readdirSync } from "fs";
import { GetServerSidePropsContext } from "next";
import path from "path";
import { PROJECTS_PER_PAGE } from ".";
import { ContentTitle } from "../../components/ContentTemplate";
import { Pagination } from "../../components/Pagination";
import { ProjectCard, ProjectList } from "../../components/ProjectList";
import { PageSeo } from "../../components/Seo";
import { loadAllProjects } from "../../lib/load-projects";
import { siteMetadata } from "../../site-metadata";
import { Project } from "../../types/post";





export async function getStaticPaths() {
    const allProjects = readdirSync(path.join(process.cwd(), `content`, `projects`));
    const totalPages = Math.ceil(allProjects.length / PROJECTS_PER_PAGE)
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
    const allProjects = await loadAllProjects();
    const pageNumber = parseInt(page)
    const initialProjects = allProjects.slice(
        PROJECTS_PER_PAGE * (pageNumber - 1),
        PROJECTS_PER_PAGE * pageNumber
    );

    const pagination = {
        currentPage: pageNumber,
        totalPages: Math.ceil(allProjects.length / PROJECTS_PER_PAGE)
    };
    return {
        props: {
            projects: initialProjects,
            pagination: pagination,
        }
    }
}


function ProjectPages({ projects, pagination }: any) {
    return (
        <div>
            <PageSeo 
                title={`projects - ${siteMetadata.headerTitle}`}
                description={`portfolio projects`}
            />
            <ContentTitle header="Projects"> all projects </ContentTitle>
            <ProjectList>
                {projects &&  projects.map((project: Project) => (
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
            <Pagination slug="projects" currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
        </div>
    )
}

export default ProjectPages;


