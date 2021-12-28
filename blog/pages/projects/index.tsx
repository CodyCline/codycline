import { getAllProjects } from "../../lib/loadProjects";


function Index({ projects }:any) { 
    console.log( projects );
    return (
        <div>
            <h1>Projects</h1>
            <p>Byte-sized content for quick reading.</p>
            <ul>
                <li>
                    posts
                </li>
            </ul>
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