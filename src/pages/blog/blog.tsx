import * as React from 'react';
import { Panel } from '../../components/panel/panel';
import { articleData } from '../../data/articleData'
import { Divider } from '../../components/ui/divider/divider';

export const Blog = () => {
    const [data] = React.useState(articleData)
    return (
        <React.Fragment>
            <div style={{
                display: "flex",
                flexDirection: "column",
                padding: "2rem",
                alignItems: "center",
            }}>
                <h2>Blog</h2>
                <Divider style={{width: "30vh"}}/>
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