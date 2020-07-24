import * as React from 'react';
import { Card } from '../../components/ui/card/card';
import { SelectTag } from '../../components/ui/tags/tags';
import { debug } from 'console';

export const Projects = () => {
    const [selectedFilter, setFilter] = React.useState<any>("all");
    const [data, setData] = React.useState<any>([
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
            id: "a9c5489c-b602-4c6f-b8a5-b5a27dae3dcb",
            type: "web",
            title: "Test Project",
            description: "Lorem ipsum dolor ipsut lorem ipsem",
            githubUrl: "https://github.com",
            liveUrl: "https://example.com"
        },
        {
            id: "a9c5489c-b602-4c6f-b8a5-b5a27dae3dcb",
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
    ]);

    function debugReduce() {
        data.reduce((project: any) => {
            return project.id == data[0]["id"]
        })
    }

    function filter(tag: any) {
        return data.filter((i: any) => {
            return i.type === tag
        })
    }

    return (
        <React.Fragment>
            {console.log(debugReduce())}
            <div style={{
                display: "flex",
                flexDirection: "column",
                padding: "2rem",
                alignItems: "center",
            }}>
                <h2 >Projects</h2>
                <hr style={{ width: "30vh", border: "3px dashed yellow" }} />
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
                        <SelectTag onClick={() => filter("web")} isActive>All</SelectTag>
                    </li>
                    <li style={{ padding: "1rem" }}>
                        <SelectTag onClick={() => filter("web")} >Web</SelectTag>
                    </li>
                    <li style={{ padding: "1rem" }}>
                        <SelectTag onClick={() => filter("web")} >Open-Source</SelectTag>
                    </li>
                    <li style={{ padding: "1rem" }}>
                        <SelectTag onClick={() => filter("web")} >Mobile</SelectTag>
                    </li>
                </ul>
            </div>
            <div style={{ height: "5vh" }} />
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", width: "80%", margin: "auto" }}>
                {data.map((project: any) => (
                    <Card
                        key={project.id}
                        title={project.title}
                        link={`/projects/${project.id}`}
                        description={project.description}
                        githubUrl={project.githubUrl}
                        liveUrl={project.liveUrl}
                    />
                ))}
            </div>
        </React.Fragment>
    );
}