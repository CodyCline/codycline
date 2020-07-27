import * as React from 'react';
import { useParams } from 'react-router-dom';
import { MarkdownWrapper } from '../../utils/markdown';
import { Tag } from '../../components/ui/tags/tags';
import { articleData } from '../../appdata/articleData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Divider } from '../../components/ui/divider/divider';


export const Article = () => {
    const { id } = useParams();
    const [loadState, setLoadState] = React.useState({
        loaded: false,
        error: false,
    });
    const [state, setState] = React.useState<any>();
    React.useEffect(() => {
        const currentArticle = articleData.filter((article: any) => {
            return article.id === id;
        });
        if (currentArticle.length < 1) {
            setLoadState({...loadState, error: true})
        } else {
            setState(currentArticle[0]);
            setLoadState({...loadState, loaded:true});
        }
    }, []);
    return (
        <React.Fragment>
            <div style={{ height: "10vh" }} />
            {loadState.loaded && !loadState.error ?
                <React.Fragment>
                    <img className="cover-image" src={state.cover} />
                    <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", alignItems: "flex-start", margin: "auto", width: "65%" }}>
                        <h1 style={{ fontSize: "50px" }}>{state.title}</h1>
                        <p><FontAwesomeIcon icon={["fas", "book"]}/>{state.date}</p>
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

            <div style={{ height: "30vh" }} />
        </React.Fragment>
    )
}