import React from "react"
import { render, screen } from "@testing-library/react";
import { Card } from "../card/card";



describe(`Card`, () => {
	test(`Displays given props`, () => {
		const { getByText } = render (
			<Card 
				title="Hello"
				description="Hello world"
				status="passing"
				version={1.23}
			/>
		)
		// Assertion
		expect(getByText(`Hello`)).toHaveTextContent(`Hello`);
		expect(getByText(`Hello world`)).toHaveTextContent(`Hello world`);
		expect(getByText(`1.23`)).toHaveTextContent(`1.23`);
	});
	//Test that the card will display proper tooltip 
	test(`Card displays tooltip CI status of passing`, () => {
		render ( <Card status="passing" title="Hello" description="Hello world" /> )
		const cardStatus = screen.getByRole(`tooltip`);
		expect(cardStatus).toHaveClass(`status__passing`);
	});
	test(`Card displays tooltip CI status of mixed`, () => {
		render ( <Card status="mixed" title="Hello" description="Hello world" /> )
		const cardStatus = screen.getByRole(`tooltip`);
		expect(cardStatus).toHaveClass(`status__mixed`);
	});
	test(`Card displays tooltip CI status of failing`, () => {
		render ( <Card status="failing" title="Hello" description="Hello world" /> )
		const cardStatus = screen.getByRole(`tooltip`);
		expect(cardStatus).toHaveClass(`status__failing`);
	});
	test("Card displays tooltip CI status of mixed when no cases match", () => {
		render (<Card status="none" title="Hello" description="Hello world" /> )
		const cardStatus = screen.getByRole(`tooltip`);
		expect(cardStatus).toHaveClass(`status__mixed`);
	});
	
});
