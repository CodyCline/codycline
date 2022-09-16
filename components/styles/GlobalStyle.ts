import { createGlobalStyle } from "styled-components";
import { darken, desaturate, lighten, saturate } from "polished";
import "prism-theme-vars/base.css";

//Use these 
// # Colors #32c8f5
// => #3487da


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
		
		--color-metallic: #6e6b5e;
		--color-greentext: #789922;
		--color-blue: #3487da;
		--color-yellow: #ddb100;
		--color-orange: #ff7f00;
		--color-red: #8B0000;
		--color-pink: #e31b79;
		--color-purple: #5b4fff;
		--color-dark-purple: #763053;
		
		--prism-block-margin-y: 0;
		--prism-font-size: 18px;
		--prism-block-radius: 0;
		--prism-font-family: 'Droid Sans Mono', 'monospace', monospace, 'Droid Sans Fallback';
	}

	html[data-motion="no-preference"] {
		--transition-seconds-default: 0.25s;
		--transition-seconds-primary: 0.5s;
		--transition-seconds-fast: 0.1s;
		--transition-seconds-normal: 1s;	
	}

	html[data-motion="reduce"] {
		--transition-seconds-default: 0s;
		--transition-seconds-primary: 0s;
		--transition-seconds-fast: 0s;
		--transition-seconds-normal: 0s;
	}

	
	html,
	html[data-theme="light"] {
		--color-text-default: #374151; 
		--color-text-primary: #0366d6;
		--color-text-secondary: #916BBF;
		--color-bg-primary: #ffffff;
		--color-fg-primary: #f0f0f0;
		
		--color-bg-theme-toggle: ${lighten(.27, "#3487da")};
		--color-shadow-theme-toggle: #3487da;

		--color-shadow-motion-toggle: #d65f33;
		--color-bg-motion-toggle-on: ${lighten(.27, "#d65f33")};
		--color-bg-motion-toggle-off: ${desaturate(.1, "#d65f33")};

		--color-shadow-volume-toggle: #33d69d;
		--color-bg-volume-toggle-on: ${lighten(.27, "#33d69d")};
		--color-bg-volume-toggle-off: ${desaturate(.1, "#33d69d")}; 

		--color-border: #d9d9d9;
		--color-fg-aux: #f7f7f7;
		--color-link: #4c4ce6;
		--color-link-hover: ${lighten(.38, "#4c4ce6")};
		--color-text-inline-code: #9d00ec;
		
		--color-bg-inline-code: #f6f7f6;
		--color-bg-greentext: #fff9f5;
		--color-border-greentext: #d9bfb7;
		
		--color-bg-admonition-tip: ${lighten(.6, "#789922")};
		--color-bg-admonition-info: ${lighten(.38, "#3487da")};
		--color-bg-admonition-experimental: ${lighten(.5, "#ddb100")};
		--color-bg-admonition-caution: ${lighten(.45, "#e25e21")};
		--color-bg-admonition-danger: ${lighten(.68, "#8B0000")};
		--color-bg-admonition-critical: ${lighten(.6, "#763053")};

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
  
	html[data-theme="dark"] {

		--color-fg-aux: #1f2123;
		--color-text-default: #e3e3e3;
		--color-text-secondary: #ffb454;
		--color-text-primary: #ffcc00;
		--color-bg-primary: #171717;
		--color-fg-primary: #26282b;
		
		--color-bg-theme-toggle: ${darken(.34, "#ffb454")};
		--color-shadow-theme-toggle: #ffb454;

		--color-shadow-motion-toggle: #ad4e42; 
		--color-bg-motion-toggle-on: ${darken(.27, "#ad4e42")};
		--color-bg-motion-toggle-off: ${desaturate(.1, "#ad4e42")};

		--color-shadow-volume-toggle: #42ad88;
		--color-bg-volume-toggle-on: ${darken(.27, "#42ad88")};
		--color-bg-volume-toggle-off: ${desaturate(.1, "#42ad88")};
		
		--color-border: #383a3d;
		--color-link: #0096cf;
		--color-link-hover: ${darken(.3, "#0096cf")};
		--color-text-inline-code: #ffb454;
		--color-bg-inline-code: #1d1f21;
		--color-bg-greentext: #382213;
		--color-border-greentext: #7e7567;

		--color-bg-admonition-tip: ${darken(.25, "#789922")};
		--color-bg-admonition-info: ${darken(.4, "#3487da")};
		--color-bg-admonition-experimental: ${darken(.38, "#ddb100")};
		--color-bg-admonition-caution: ${darken(.4, "#e25e21")};
		--color-bg-admonition-danger: ${darken(.19, "#8B0000")};
		--color-bg-admonition-critical: ${darken(.25, "#763053")};

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
		font-size: 16px;

		background: var(--color-bg-primary);
		color: var(--color-text-default);
		transition: var(--transition-seconds-default) ease-in-out;
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

	body:not(canvas) {
		overflow-x: hidden;
	}

`

export default GlobalStyle;