import * as React from 'react';
import { useParams } from 'react-router-dom';
import { MarkdownWrapper } from '../../utils/markdown';
import { Tag } from '../../components/ui/tags/tags';
import { articleData } from '../../data/articleData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Divider } from '../../components/ui/divider/divider';
import { Spacer } from '../../components/ui/spacer/spacer';
import { CodeBlock } from '../../components/codeblock/codeblock';


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
    }, [id]);
    return (
        <React.Fragment>
            {loadState.loaded && !loadState.error ?
                <React.Fragment>
                    <img className="article-cover-image" src={state.cover} alt="banner.jpg" />
                    <Spacer height={4} units="vh"/>
                    <div className="article-container">
                        
                        <h1 className="big-header">{state.title}</h1>
                        <p>
                            <FontAwesomeIcon icon={["fas", "clock"]}/>
                            <span className="article-date">{state.date}</span>
                        </p>
                        <CodeBlock/>
                        <Divider style={{width: "100%"}}/>
                        <MarkdownWrapper>
                            {state.body}
                        </MarkdownWrapper>
                        <Spacer height={5} units="vh"/>
                        <div className="article-bottom-tags" >
                            {state.tags.map((tag: any) => {
                                return (<Tag>{tag}</Tag>);
                            })}
                        </div>
                        <Spacer height={30} units="vh"/>
                    </div>
                </React.Fragment>
                : "loading"
        
            }
        </React.Fragment>
    )
}