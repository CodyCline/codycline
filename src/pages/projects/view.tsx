import * as React from 'react';
import { MarkdownWrapper } from '../../components/hoc/markdown/markdown';
import { PanelTag } from '../../components/panel/panel';
import { useParams } from 'react-router-dom';
import { projectData } from '../../appdata/projectData'; 
import { Divider } from '../../components/ui/divider/divider';

export const Post = () => {
    const { id } = useParams();
    const [loaded, setLoadState] = React.useState(false);
    const [state, setState] = React.useState<any>();
    React.useEffect(() => {
        const currentProject = projectData.filter((project: any) => {
            return project.id === id;
        });
        setState(currentProject[0]);
        setLoadState(true);
    }, []);
    return (
        <React.Fragment>
            {loaded ?
                <React.Fragment>
                    <img className="cover-image" src={state.cover} />
                    <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", alignItems: "flex-start", margin: "auto", width: "65%" }}>
                        <h1 className="big-header">{state.title}</h1>
                        <p>{state.date}</p>
                        <Divider style={{width: "100%"}}/>
                        <MarkdownWrapper>
                            {state.body}
                        </MarkdownWrapper>
                        <div style={{ height: "4rem" }} />
                        <div style={{ display: "flex", flexWrap: "wrap", }} className="bottom-tags" >
                            {state.tags.map((tag: any) => {
                                return (<PanelTag>{tag}</PanelTag>);
                            })}
                        </div>
                    </div>
                </React.Fragment>
                : "loading"
        
            }

            <div style={{ height: "30vh" }} />
        </React.Fragment>
    )
    
}