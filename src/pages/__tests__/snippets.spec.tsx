import React from "react"
import renderer from "react-test-renderer";
import { getPageQueryData } from 'gatsby-plugin-testing';
import Snippets from "../snippets";

describe("Snippets", () => {
    it("renders GraphQL data correctly", async() => {
        const data = await getPageQueryData(`snippets`);
        const tree = renderer.create(<Snippets data={data} />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})