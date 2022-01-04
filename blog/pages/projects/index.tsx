import { ProjectCard, ProjectList } from "../../components/ProjectList";
import { getAllProjects } from "../../lib/loadProjects";


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
    const projectPosts = await getAllProjects();

    return {
        props: {
            projects: projectPosts
        }
    }
}

export default Index;