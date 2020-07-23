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
            <div style={{ margin: "auto", textAlign: "center", width: "30vh", display: "grid", placeItems: "center" }}>
                <h2 >Projects</h2>
                <hr style={{ width: "30vh", border: "3px dashed yellow" }} />
            </div>
            <p style={{ textAlign: "center", }}>
                <SelectTag onClick={() => filter("web")} isActive>All</SelectTag>
                <SelectTag onClick={() => filter("web")}>Web</SelectTag>
                <SelectTag>Mobile</SelectTag>
                <SelectTag>Desktop</SelectTag>
            </p>
            <div style={{ height: "5vh" }} />
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", width: "80%", margin: "auto" }}>
                {data.map((project: any) => (
                    <Card
                        title={project.title}
                        onClick={() => navigate(project.id)}
                        description={project.description}
                        githubUrl={project.githubUrl}
                        liveUrl={project.liveUrl}
                    />
                ))}
            </div>
        </React.Fragment>
    );
}