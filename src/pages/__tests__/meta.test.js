import React from "react"
import renderer from "react-test-renderer";
import { getPageQueryData } from 'gatsby-plugin-testing';
import Meta from "../meta";

describe("Meta", () => {
    it("renders GraphQL data correctly", async() => {
        const data = await getPageQueryData(`meta`);
        const tree = renderer.create(<Meta data={data} />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})