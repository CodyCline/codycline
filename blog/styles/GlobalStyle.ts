import { createGlobalStyle } from "styled-components";
import "prism-theme-vars/base.css";

const GlobalStyle = createGlobalStyle`

	:root {
		--font-family-default: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; 
		--font-family-code: 'Droid Sans Mono', 'monospace', monospace, 'Droid Sans Fallback';
		--font-size-xs: 12px;
		--font-size-sm: 14px;
		--font-size-default: 16px;
		--font-size-md: 20px;
		--font-size-lg: 48px;
		--font-size-xl: 64px;
		--color-purple: #5b4fff;
		--color-yellow: #ffe77a;
		--color-orange: #e25e21;
		
		--prism-block-margin-y: 0;
		--prism-font-size: 18px;
		--prism-block-radius: 0;
		--prism-font-family: 'Droid Sans Mono', 'monospace', monospace, 'Droid Sans Fallback';
	}



	body,
	body[data-theme="light"] {
		--color-text-default: #111111; 
		--color-text-primary: #298cff;
		--color-text-secondary: #916BBF;
		--color-bg-primary: #fff;
		--color-fg-primary: #e3e3e3;
		--color-bg-toggle: #0096cf;
		--color-border: #d9d9d9;
		--color-foreground-aux: #f7f7f7;
		--color-link: #4c4ce6;
		--color-text-inline-code: #9d00ec;
		--color: #6e6b5e;
		--color-bg-inline-code: #f6f7f6;
		--color-motion-toggle: #f7f3f7;

		#Prismjs custom light theme from 
		--prism-foreground: #393a34;
		--prism-background: #fbfbfb;
		--prism-comment: #a0ada0;
		--prism-string: #b56959;
		--prism-literal: #2f8a89;
		--prism-keyword: #1c6b48;
		--prism-function: #6c7834;
		--prism-deleted: #a14f55;
		--prism-class: #2993a3;
		--prism-builtin: #ab5959;
		--prism-property: #b58451;
		--prism-namespace: #b05a78;
		--prism-punctuation: #8e8f8b;
		--prism-decorator: #bd8f8f;
		--prism-number: #296aa3;
		--prism-boolean: #1c6b48;
		--prism-constant: #a65e2b;
		--prism-regex: #ab5e3f;
		--prism-json-property: #698c96;
	}
  
	body[data-theme="dark"] {
		--color-foreground-aux: #1f2123;
		--color-text-default: #e3e3e3;
		--color-text-primary: #ffb454;
		--color-text-secondary: #FFD369;
		--color-bg-primary: #171717;
		--color-fg-primary: #26282b;
		--color-bg-toggle: #ffb454;
		--color-border: #383a3d;
		--color-link: #0096cf;
		--color-text-inline-code: #ffb454;
		--color-bg-inline-code: #1d1f21;
		--color-motion-toggle: rgb(202, 108, 154);

		#Prismjs theme dark
		--prism-scheme: dark;
		--prism-foreground: #d4cfbf;
		--prism-background: #1e1e1e;
		--prism-comment: #758575;
		--prism-string: #d48372;
		--prism-literal: #429988;
		--prism-keyword: #4d9375;
		--prism-function: #a1b567;
		--prism-deleted: #a14f55;
		--prism-class: #54b1bf;
		--prism-builtin: #e0a569;
		--prism-property: #dd8e6e;
		--prism-namespace: #db889a;
		--prism-punctuation: #858585;
		--prism-decorator: #bd8f8f;
		--prism-number: #6394bf;
		--prism-boolean: #1c6b48;
		--prism-variable: #c2b36e;
		--prism-regex: #ab5e3f;
		--prism-json-property: #6b8b9e;
		--prism-line-number: #888888;
		--prism-line-number-gutter: #eeeeee;
		--prism-line-highlight-background: #444444;
		--prism-selection-background: #444444;
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
		font-family: var(--font-family-default);

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