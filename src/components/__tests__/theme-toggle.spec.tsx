import * as React from "react"
import { render, fireEvent, act } from "@testing-library/react";
import { ThemeToggle } from "../toggle/theme-toggle/theme-toggle";

describe(`Theme Toggle`, () => {
	test(`Toggle between light and dark mode, ensure document className changes`, () => {
		const { getByRole } = render (
			<ThemeToggle/>
		)
		let localValue;

		act(() => {
			localValue = window.localStorage.getItem(`theme__preference`)
			document.documentElement.className = `theme--${localValue}`;
		});
		expect(localValue).toBe(`dark`);
		expect(document.documentElement.className).toEqual(`theme--dark`)
		fireEvent.click(getByRole(`checkbox`))
		act(() => {
			localValue = window.localStorage.getItem(`theme__preference`)
			document.documentElement.className = `theme--${localValue}`;
		});

		expect(localValue).toBe(`light`);
		expect(document.documentElement.className).toEqual(`theme--light`);
	});
});
