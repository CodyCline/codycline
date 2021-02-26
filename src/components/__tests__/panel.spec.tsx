import React from "react"
import { getByDisplayValue, render, screen } from "@testing-library/react";
import { Panel } from "../panel/panel";



describe("Panel", () => {
	test("Displays given props", () => {
		const { getByText, getByTitle } = render (
			<Panel 
				title="Hello"
				description="Hello world"
				imageUrl="https://example.com/"
                tags={["foo", "bar"]}
			/>
		)
        const displayedImage = document.querySelector("img") as HTMLImageElement;
		// Assertion
		expect(getByText(`Hello`)).toHaveTextContent(`Hello`);
		expect(getByText(`Hello world`)).toHaveTextContent(`Hello world`);
        expect(getByTitle(`foo`)).toHaveTextContent(`foo`);
        expect(displayedImage.src).toContain(`https://example.com`);
        expect(displayedImage.alt).toContain(`thumb`);
	});
	
});
