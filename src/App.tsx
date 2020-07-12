import * as React from 'react';
import cx from 'classnames';
import { Route, Switch } from 'react-router-dom';
import { withAddons } from './components/hoc/addons/addons';
import { Home } from './pages/home';
import { Blog } from './pages/blog/blog';
import { Article } from './pages/blog/article';
import './App.scss';

function App() {
	const [theme, setTheme] = React.useState<string>("dark");
	return (
		<div className={cx("theme--" + theme)}>
			<div className="base">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/blog/:id" component={Article} />
					<Route path="/blog/" component={Blog} />
					<Route path="/projects" />
					<Route path="/projects/:id" />
				</Switch>
			</div>
		</div>
	);
}

export default withAddons(App);
