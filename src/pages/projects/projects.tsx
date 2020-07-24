import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';
import { Card } from '../../components/ui/card/card';
import { SelectTag } from '../../components/ui/tags/tags';

export const Projects = () => {
    const history = useHistory();
    const [selectedFilter, setFilter] = React.useState<any>("all");
    const [data, setData] = React.useState<any>([
        {
            id: "id",
            type: "desktop",
            title: "Test Desktop",
            description: "Lorem ipsum dolor ipsut lorem ipsem",
            githubUrl: "https://github.com",
            liveUrl: "https://example.com"
        },
        {
            id: "id",
            type: "desktop",
            title: "Test Desktop 2",
            description: "Lorem ipsum dolor ipsut asda asd asasd asdas  lorem ipsem",
            githubUrl: "https://github.com",
            liveUrl: "https://example.com"
        },
        {
            id: "id",
            type: "web",
            title: "Test Project",
            description: "Lorem ipsum dolor ipsut lorem ipsem",
            githubUrl: "https://github.com",
            liveUrl: "https://example.com"
        },
        {
            id: "id",
            type: "web",
            title: "Test Project",
            description: "Lorem ipsum dolor ipsut lorem ipsem",
            githubUrl: "https://github.com",
            liveUrl: "https://example.com"
        },
        {
            id: "id",
            type: "web",
            title: "Test Project",
            description: "Lorem ipsum dolor ipsut lorem ipsem",
            githubUrl: "https://github.com",
            liveUrl: "https://example.com"
        },
    ]);

    function navigate(url: string) {
        history.push("/projects/" + url);
    }

    function filter(tag: any) {
        return data.filter((i: any) => {
            return i.type === tag
        })
    }

    return (
        <React.Fragment>
            <div style={{ height: "5vh" }} />
            <div style={{ display: "flex", flexDirection:"column", flexWrap: "wrap", justifyContent: "center" }}>
                <h2 >Projects</h2>
                <hr style={{ border: "3px dashed yellow" }} />
                <ul
                    style={{ listStyle: "none", margin: 0 }}
                >
                    <li>
                        <SelectTag onClick={() => filter("web")} isActive>All</SelectTag>
                    </li>
                    <li>
                        <SelectTag onClick={() => filter("web")} >Web</SelectTag>
                        <SelectTag onClick={() => filter("web")} >Open-Source</SelectTag>
                        <SelectTag onClick={() => filter("web")} >Mobile</SelectTag>
                    </li>
                </ul>
            </div>
            <div style={{ margin: "auto", textAlign: "center", width: "80%", display: "grid", placeItems: "center", height: "100%" }}>
            </div>
            <div style={{ height: "5vh" }} />
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", width: "80%", margin: "auto" }}>
                {data.map((project: any) => (
                    <Card
                        title={project.title}
                        link={"/projects/" + project.id}
                        description={project.description}
                        githubUrl={project.githubUrl}
                        liveUrl={project.liveUrl}
                    />
                ))}
            </div>
        </React.Fragment>
    );
}