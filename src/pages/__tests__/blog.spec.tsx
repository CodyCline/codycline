import React from "react"
import renderer from "react-test-renderer";
import { getPageQueryData } from 'gatsby-plugin-testing';
import Blog from "../blog";

describe("Blog", () => {
    it("renders GraphQL data correctly", async() => {
        const data = await getPageQueryData(`blog`);
        const tree = renderer.create(<Blog data={data} />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})