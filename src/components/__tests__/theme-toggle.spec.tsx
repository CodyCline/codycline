import React from "react"
import { getByDisplayValue, render, screen } from "@testing-library/react";
import { ThemeToggle } from "../ui/toggle/theme-toggle/theme-toggle";

describe("Panel", () => {
	test("Toggle between light and dark mode", () => {
		const { getByText, getByTitle } = render (
			<ThemeToggle/>
		)
		
	});
	
});
