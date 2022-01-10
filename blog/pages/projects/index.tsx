import { ProjectCard, ProjectList } from "../../components/ProjectList";
import { loadAllProjects } from "../../lib/load-projects";
import { Project } from "../../types/post";


function Index({ projects }:any) { 
    return (
        <div>
            <h1>Projects</h1>
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
        </div>
    )
}


export async function getStaticProps() {
    const projectPosts = await loadAllProjects();

    return {
        props: {
            projects: projectPosts
        }
    }
}

export default Index;