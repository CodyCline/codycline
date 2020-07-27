import * as React from 'react';
import { Panel } from '../../components/panel/panel';
import { useHistory } from 'react-router-dom';
import { articleData } from '../../appdata/articleData'

export const Blog = () => {
    const history = useHistory();
    function navigate(url: string) {
        history.push("/blog/" + url);
    }
    const [data, setData] = React.useState(articleData)
    return (
        <React.Fragment>
            <div style={{
                display: "flex",
                flexDirection: "column",
                padding: "2rem",
                alignItems: "center",
            }}>
                <h2>Blog</h2>
                <hr style={{ border: 0, borderRadius: "1rem", width: "30vh", height: "0.25rem", background: "linear-gradient(to right, rgba(108,16,209,1), rgba(0,212,255,1))" }} />
            </div>
            <div style={{height: "2vh"}}/>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {data.map((article: any) => (
                    <Panel
                        key={article.id}
                        link={`blog/${article.id}`}
                        title={article.title}
                        description={article.description}
                        date={article.date}
                        readTime={article.read_time}
                        imageUrl={article.banner}
                        tags={article.tags}
                    />
                ))}
            </div>
            <div style={{height: "30vh"}}/>
        </React.Fragment>
    );
}