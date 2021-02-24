import React from "react"
import { render, screen } from "@testing-library/react";
// import { screen } from '@testing-library/dom';
import { Card } from '../card/card';



describe("Card", () => {
	test("Displays given props", () => {
		const { getByText, getByRole } = render (
			<Card 
				title="Hello"
				description="Hello world"
				status="passing"
				version={1.23}
			/>
		)
		// Assertion
		expect(getByText("Hello")).toHaveTextContent(`Hello`);
		expect(getByText("Hello world")).toHaveTextContent(`Hello world`);
		expect(getByText("1.23")).toHaveTextContent(`1.23`);
		// expect(getByText("Hello")).toHaveClass(`status__passing`);
		// --> Test will pass
	});
	//Test that the card will display proper tooltip 
	test("Card displays tooltip CI status of passing", () => {
		render ( <Card status="passing" title="Hello" description="Hello world" /> )
		const card = screen.getByRole("tooltip");
		expect(card).toHaveClass(`status__passing`);
	});
	test("Card displays tooltip CI status of mixed", () => {
		render ( <Card status="mixed" title="Hello" description="Hello world" /> )
		const card = screen.getByRole("tooltip");
		expect(card).toHaveClass(`status__mixed`);
	});
	test("Card displays tooltip CI status of failing", () => {
		render ( <Card status="failing" title="Hello" description="Hello world" /> )
		const card = screen.getByRole("tooltip");
		expect(card).toHaveClass(`status__failing`);
	});
	test("Card displays tooltip CI status of mixed when no cases match", () => {
		render (<Card status="none" title="Hello" description="Hello world" /> )
		const card = screen.getByRole("tooltip");
		expect(card).toHaveClass(`status__mixed`);
	});
	
});
