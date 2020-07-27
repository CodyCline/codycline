import * as React from 'react';
import { Card } from '../../components/ui/card/card';
import { SelectTag } from '../../components/ui/tags/tags';
import { projectData } from '../../appdata/projectData';

export const Projects = () => {
    const [category, setCategory] = React.useState<any>("all");
    const [data, setData] = React.useState<any>(projectData);
    
    const filterOptions = data.filter(
        (project:any) => 
            category === "all" ? project : project.type === category
    )

    return (
        <React.Fragment>
            <div style={{
                display: "flex",
                flexDirection: "column",
                padding: "2rem",
                alignItems: "center",
            }}>
                <h2 >Projects</h2>
                <hr style={{ border: 0, borderRadius: "1rem", width: "30vh", height: "0.25rem", background: "linear-gradient(to right, rgba(108,16,209,1), rgba(0,212,255,1))" }} />
                <div style={{ height: "2.5vh" }} />
                <ul
                    style={{
                        width: "100%",
                        margin: "auto",
                        display: "flex",
                        padding: 0,
                        justifyContent: "center",
                        flexWrap: "wrap",
                        listStyle: "none",
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <li style={{ padding: "1rem" }}>
                        <SelectTag onClick={() => setCategory("all")} isActive={category === "all"}>All</SelectTag>
                    </li>
                    <li style={{ padding: "1rem" }}>
                        <SelectTag onClick={() => setCategory("web")} isActive={category === "web"}>Web</SelectTag>
                    </li>
                    <li style={{ padding: "1rem" }}>
                        <SelectTag onClick={() => setCategory("open_source")} isActive={category === "open_source"}>Open-Source</SelectTag>
                    </li>
                    <li style={{ padding: "1rem" }}>
                        <SelectTag onClick={() => setCategory("mobile")} isActive={category === "mobile"}>Mobile</SelectTag>
                    </li>
                    <li style={{ padding: "1rem" }}>
                        <SelectTag onClick={() => setCategory("desktop")} isActive={category === "desktop"}>Desktop</SelectTag>
                    </li>
                </ul>
            </div>
            <div style={{ height: "5vh" }} />
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", width: "90%", margin: "auto" }}>
                {
                    filterOptions.length > 0 ? (
                        filterOptions.map((project:any) => {
                            return <Card
                                key={project.id}
                                title={project.title}
                                link={`/projects/${project.id}`}
                                description={project.description}
                                githubUrl={project.githubUrl}
                                liveUrl={project.liveUrl}
                            />
                        })
                    ) : (
                        <div style={{height: "30vh"}}>
                            <h3>Nothing here yet, check back soon</h3>
                        </div>
                    )
                }
            </div>
            <div style={{ height: "30vh" }} />
        </React.Fragment>
    );
}