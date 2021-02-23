import React from "react"
import renderer from "react-test-renderer"
import { StaticQuery } from "gatsby"
import Blog from "../blog";

beforeEach(() => {
    StaticQuery.mockImplementationOnce(({ render }) =>
        render({
            site: {
                siteMetadata: {
                    title: `Default Starter`,
                },
            },
        })
    )
})
describe("Index", () => {
    it("renders correctly", () => {
        const data = {
            allMdx: {
                edges: [
                    {
                        node: {
                            fields: { slug: "/blog/diy-randonautica/" },
                            frontmatter: {
                                description: "Walkthrough on how to build a web app that gives you random locations to ... explore?",
                                tags: ["python", "mystery", "react"],
                                thumb: { publicURL: "/static/cd989575e12274e973f0f48f8ab96111/randonautica.webp" },
                                title: "Create your own Randonautica web app",
                            }
                        },
                        id: "3c8dc015-f590-5dd1-9dd7-82dd96215778"
                    }
                ]
            },
            site: {
                siteMetadata: {
                    title: "Cody Cline"
                }
            }
        }
        const tree = renderer.create(<Blog data={data} />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})