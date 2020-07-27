import * as React from 'react';
import { useParams } from 'react-router-dom';
import { MarkdownWrapper } from '../../components/hoc/markdown/markdown';
import { PanelTag } from '../../components/panel/panel';
import { articleData } from '../../appdata/articleData';


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
    })
    return (
        <React.Fragment>
            <div style={{ height: "10vh" }} />
            {loadState.loaded && !loadState.error ?
                <React.Fragment>
                    <img className="cover-image" src={state.cover} />
                    <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap", alignItems: "flex-start", margin: "auto", width: "65%" }}>
                        <h1 style={{ fontSize: "50px" }}>{state.title}</h1>
                        <p>{state.date}</p>
                        <hr style={{ border: 0, borderRadius: "1rem", width: "100%", height: "0.25rem", background: "linear-gradient(to right, rgba(108,16,209,1), rgba(0,212,255,1))" }} />
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