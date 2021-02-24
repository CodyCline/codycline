import React from "react"
import renderer from "react-test-renderer";
import { getPageQueryData } from 'gatsby-plugin-testing';
import Projects from "../projects";

describe("Projects", () => {
    it("renders GraphQL data correctly", async() => {
        const data = await getPageQueryData(`projects`);
        const tree = renderer.create(<Projects data={data} />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})