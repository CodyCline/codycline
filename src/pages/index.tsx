import * as React from "react";
import { graphql } from "gatsby";
import SEO from "../utils/seo";
import { Layout } from "../components/layout/layout";
import { withAddons } from "../utils/with-addons";
import { Background } from "../components/background/background";
import { Spacer } from "../components/ui/spacer/spacer";
import sample from "../assets/sample-05.png";
import "../styles/index.scss";



const Index = ({ data }: any) => {
	
	const { name, summary } = data.site.siteMetadata.author
	return (
		<Layout>
			<SEO
				title="Hello"
				description="Home page"
				siteMeta={data.site.siteMetadata}
				lang="en"
			/>
			<Spacer units="vh" height={20}/>
			<Background src={sample}/>
			<div className="home__page">
				<h1 className="home__page-header home__page-background">Hello, I'm {name}</h1>
				<div className="home__page-about home__page-background">
					<p>{summary}</p>
				</div>
			</div>
			<Spacer units="vh" height={60}/>
			
		</Layout>
	)
}
export default withAddons(Index);

export const pageQuery = graphql`
query HomePage {
	site {
		siteMetadata {
			title
			author {
				name
				summary
			}
			description
			social {
				github
			}
		}
	}
}
`


