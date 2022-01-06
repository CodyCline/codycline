import { ProjectCard, ProjectList } from "../../components/ProjectList";
import { loadAllProjects } from "../../lib/load-projects";


function Index({ projects }:any) { 
    console.log( projects );
    return (
        <div>
            <h1>Projects</h1>
            <ProjectList>
                <ProjectCard/>
                <ProjectCard/>

                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>


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