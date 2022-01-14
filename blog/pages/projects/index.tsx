import { ContentTitle } from "../../components/ContentTemplate";
import { Pagination } from "../../components/Pagination";
import { ProjectCard, ProjectList } from "../../components/ProjectList";
import { PageSeo } from "../../components/Seo";
import { loadAllProjects } from "../../lib/load-projects";
import { siteMetadata } from "../../site-metadata";
import { Project } from "../../types/post";

export const PROJECTS_PER_PAGE = 1;

const ProjectsIndex = ({ projects, pagination }: any) => (
    <div>
        <PageSeo
            title={`projects - ${siteMetadata.headerTitle}`}
            description={`portfolio projects`}
        />
        <ContentTitle header="Projects">
            all projects
        </ContentTitle>
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
        <Pagination
            slug="projects"
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
        />
    </div>
)


export async function getStaticProps() {
    const allProjects = await loadAllProjects();
    const initialDisplayProjects = allProjects.slice(0, PROJECTS_PER_PAGE)
    const pagination = {
        currentPage: 1,
        totalPages: Math.ceil(allProjects.length / PROJECTS_PER_PAGE),
    }
    return {
        props: {
            projects: initialDisplayProjects,
            pagination: pagination,
        }
    }
}

export default ProjectsIndex;