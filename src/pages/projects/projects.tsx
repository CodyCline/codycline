import * as React from 'react';
import { Card } from '../../components/ui/card/card';
import { SelectTag } from '../../components/ui/tags/tags';
import { projectData } from '../../data/projectData';
import { Divider } from '../../components/ui/divider/divider';
import { Spacer } from '../../components/ui/spacer/spacer';

export const Projects = () => {
    const [category, setCategory] = React.useState<any>("all");
    const [data] = React.useState<any>(projectData);
    
    const categories : string [] = [
        "all",
        "web",
        "open-source",
        "mobile",
        "desktop",
    ]

    const filterOptions = data.filter(
        (project:any) => 
            category === "all" ? project : project.type === category
    )

    return (
        <React.Fragment>
            <div className="project-container">
                <h2 >Projects</h2>
                <Divider style={{width:"30vh"}}/>
                <Spacer height={2.5} units="vh"/>
                <ul className="project-tag-container">
                    {categories.map((c:string, inc:number) => (
                        <li className="project-tag" key={inc} style={{ padding: "1rem" }}>
                            <SelectTag onClick={() => setCategory(c)} isActive={category === c} >
                                {c}
                            </SelectTag>
                        </li>
                    ))}
                </ul>
            </div>
            <Spacer height={5} units="vh"/>
            <div className="project-page">
                {
                    filterOptions.length > 0 ? (
                        filterOptions.map((project:any) => {
                            return <Card
                                key={project.id}
                                title={project.title}
                                banner={project.banner}
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
            <Spacer height={30} units="vh"/>
        </React.Fragment>
    );
}