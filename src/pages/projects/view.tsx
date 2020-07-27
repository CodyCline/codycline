import * as React from 'react';
import { MarkdownWrapper } from '../../utils/markdown';
import { Tag } from '../../components/ui/tags/tags';
import { useParams } from 'react-router-dom';
import { projectData } from '../../data/projectData'; 
import { Divider } from '../../components/ui/divider/divider';
import { Spacer } from '../../components/ui/spacer/spacer';

export const Post = () => {
    const { id } = useParams();
    const [loadState, setLoadState] = React.useState({
        loaded: false,
        error: false,
    });
    const [state, setState] = React.useState<any>();
    React.useEffect(() => {
        const currentArticle = projectData.filter((project: any) => {
            return project.id === id;
        });
        if (currentArticle.length < 1) {
            setLoadState({...loadState, error: true})
        } else {
            setState(currentArticle[0]);
            setLoadState({...loadState, loaded:true});
        }
    }, [id]);
    return (
        <React.Fragment>
            {loadState.loaded && !loadState.error ?
                <React.Fragment>
                    <img className="cover-image" src={state.cover} alt="banner.jpg"/>
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
                                return (<Tag>{tag}</Tag>);
                            })}
                        </div>
                    </div>
                </React.Fragment>
                : "loading"
        
            }
            <Spacer height={30} units="vh"/>
        </React.Fragment>
    )
    
}