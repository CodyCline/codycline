import * as React from 'react';
import { Card } from '../../components/ui/card/card';
import { SelectTag } from '../../components/ui/tags/tags';

const projects: object[] = [
    {
        id: "12611c16-e822-4991-a43f-f161e21a8deb",
        type: "desktop",
        title: "Test Desktop",
        description: "Lorem ipsum dolor ipsut lorem ipsem",
        githubUrl: "https://github.com",
        liveUrl: "https://example.com"
    },
    {
        id: "a9c5489c-b602-4c6f-b8a5-b5a27dae3dcb",
        type: "desktop",
        title: "Test Desktop 2",
        description: "Lorem ipsum dolor ipsut asda asd asasd asdas  lorem ipsem",
        githubUrl: "https://github.com",
        liveUrl: "https://example.com"
    },
    {
        id: "a5dae4de-f0de-46d0-bed1-8bf5f0cfacc0",
        type: "web",
        title: "Test Project",
        description: "Lorem ipsum dolor ipsut lorem ipsem",
        githubUrl: "https://github.com",
        liveUrl: "https://example.com"
    },
    {
        id: "80ec4ecb-afa3-4284-9691-17394b7dbada",
        type: "web",
        title: "Test Project",
        description: "Lorem ipsum dolor ipsut lorem ipsem",
        githubUrl: "https://github.com",
        liveUrl: "https://example.com"
    },
    {
        id: "b4a85e1d-e9b1-43d2-a8e8-78d1f2110a11",
        type: "web",
        title: "Test Project",
        description: "Lorem ipsum dolor ipsut lorem ipsem",
        githubUrl: "https://github.com",
        liveUrl: "https://example.com"
    },
]


export const Projects = () => {
    const [category, setCategory] = React.useState<any>("all");
    const [data, setData] = React.useState<any>(projects);

    const filterOptions = data.filter(
        (project:any) => 
            category === "all" ? project : project.type === category
    )

    function filter(tag: any) {
        setCategory(tag);
    }

    return (
        <React.Fragment>
            <div style={{
                display: "flex",
                flexDirection: "column",
                padding: "2rem",
                alignItems: "center",
            }}>
                <h2 >Projects</h2>
                <hr style={{ border: 0, borderRadius: "1rem", width: "30vh", height: "0.5rem", background: "linear-gradient(to right, rgba(108,16,209,1), rgba(0,212,255,1))" }} />
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
                        <SelectTag onClick={() => filter("all")} isActive={category === "all"}>All</SelectTag>
                    </li>
                    <li style={{ padding: "1rem" }}>
                        <SelectTag onClick={() => filter("web")} isActive={category === "web"}>Web</SelectTag>
                    </li>
                    <li style={{ padding: "1rem" }}>
                        <SelectTag onClick={() => filter("open_source")} isActive={category === "open_source"}>Open-Source</SelectTag>
                    </li>
                    <li style={{ padding: "1rem" }}>
                        <SelectTag onClick={() => filter("mobile")} isActive={category === "mobile"}>Mobile</SelectTag>
                    </li>
                    <li style={{ padding: "1rem" }}>
                        <SelectTag onClick={() => filter("desktop")} isActive={category === "desktop"}>Desktop</SelectTag>
                    </li>
                </ul>
            </div>
            <div style={{ height: "5vh" }} />
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", width: "90%", margin: "auto" }}>
                {
                    filterOptions.length > 0 ? (
                        filterOptions.map((project:any) => {
                            return    <Card
                                key={project.id}
                                title={project.title}
                                link={`/projects/${project.id}`}
                                description={project.description}
                                githubUrl={project.githubUrl}
                                liveUrl={project.liveUrl}
                            />
                        })
                    ) : (
                        <h3>Nothing here yet, check back soon</h3>
                    )
                    }
            </div>
            <div style={{ height: "30vh" }} />
        </React.Fragment>
    );
}