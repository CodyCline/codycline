import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`

	:root {
		--font-size-xs: 12px;
		--font-size-sm: 14px;
		--font-size-default: 16px;
		--font-size-md: 20px;
		--font-size-lg: 48px;
		--font-size-xl: 64px;
		--color-purple: #5b4fff;
		--color-yellow: #ffe77a;
		--color-orange: #e25e21;

	}



	body,
	body[data-theme="light"] {
		--color-text-default: #111111; 
		--color-text-primary: #0CAFFF;
		--color-bg-primary: #fff;
		--color-fg-primary: #e3e3e3;
		--color-bg-toggle: #ffb454;
		--color-border: #d9d9d9;
		--color-foreground-aux: #f7f7f7;
		--color-link: #4c4ce6;
		--color-text-inline-code:#9d00ec;
		--color: #6e6b5e;
		--color-bg-inline-code: #f6f7f6;

	}
  
	body[data-theme="dark"] {
		--color-foreground-aux: #1f2123;
		--color-text-default: #e3e3e3;
		--color-text-primary: #ffb454;
		--color-bg-primary: #171717;
		--color-fg-primary: #26282b;
		--color-bg-toggle: #0096cf;
		--color-border: #383a3d;
		--color-link: #0096cf;
		--color-text-inline-code: #ffb454;
		--color-bg-inline-code: #1d1f21;
	}


	*, *::before, *::after {
		box-sizing: border-box;
	}

	* {
		margin: 0;
	}

	html,
	body {
		line-height: 1.5;
		height: 100%;
		-webkit-font-smoothing: antialiased;
		padding: 0;
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
		Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

		-webkit-text-size-adjust: 100%;
		// line-height: 1.7;
		font-size: 16px;

		background: var(--color-bg-primary);
		color: var(--color-text-default);
		transition: .20s ease-in-out;
	}
	img, picture, video, canvas, svg {
		display: block;
		max-width: 100%;
	}

	input, button, textarea, select {
		font: inherit;
	}
  
	h1 {
		color: var(--color-text-primary);
	}

	a {
		color: inherit;
		text-decoration: none;
	}
	p, h1, h2, h3, h4, h5, h6 {
		overflow-wrap: break-word;
	}

	#root, #__next {
		isolation: isolate;
	}

`

export default GlobalStyle;