import * as React from 'react';
import { SelectTag } from '../../components/ui/tags/tags';
import { Container, Row, Col } from 'react-grid-system';
import { Panel } from '../../components/panel/panel';
import { useHistory } from 'react-router-dom';

export const Blog = () => {
    const history = useHistory();
    function navigate(url: string) {
        history.push("/blog/" + url);
    }
    const [data, setData] = React.useState([
        {
            id: "f8a8f738-5f5a-43e6-bfd1-faaa93e11d47",
            title: "Testing Project",
            description: "Testing lsaasd saasfsaf asfas asfasf asdsa orem impsuym dolor ipsut dolor imseeed ads aa",
            banner: "https://picsum.photos/seed/picsum/200/300",
            date: "2020-03-18",
            tags: [
                "Python",
                "JavaScript",
            ],
            read_time: 12,
        },
        {
            id: "5d42dd7d-4b85-416e-92b5-6f83cb87fd4c",
            title: "Testing Project",
            description: "Testing lorem impsuym dolor ipsut dolor imseeed ads aa",
            banner: "https://picsum.photos/seed/picsum/200/300",
            date: "2020-03-18",
            read_time: 12,
            tags: [
                "Python",
                "JavaScript",
            ],
        },
    ])
    return (
        <React.Fragment>
            <div style={{height: "5vh"}}/>
            <div style={{margin: "auto", textAlign:"center", width: "30vh", display:"grid", placeItems:"center"}}>
                <h2 >Blog</h2>
                <hr style={{width: "30vh", border: "3px dashed yellow"}}/>
            </div>
            <div style={{height: "10vh"}}/>
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