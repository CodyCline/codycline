import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withAddons } from './components/hoc/addons/addons';
import { Layout } from './components/hoc/layout/layout';
import { Home } from './pages/home/home';
import { Blog } from './pages/blog/blog';
import { Article } from './pages/blog/article';
import { Projects } from './pages/projects/projects';
import { Post } from './pages/projects/view';


function App() {
	return (
		<Layout>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/blog/:id" component={Article} />
				<Route path="/blog/" component={Blog} />
				<Route path="/projects/:id" component={Post} />
				<Route path="/projects" component={Projects}/>
			</Switch>
		</Layout>
	);
}

export default withAddons(App);
