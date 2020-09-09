import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withAddons } from './utils/addons';
import { Layout } from './components/layout/layout';
import { Home } from './pages/home/home';
import { Blog } from './pages/blog/blog';
import { Article } from './pages/blog/article';
import { Projects } from './pages/projects/projects';
import { Post } from './pages/projects/view';
import { NotFound } from './pages/notfound/notfound';
import { Meta } from './pages/meta/meta';


function App() {
	return (
		<Layout>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/blog/:id/:slug" component={Article} />
				<Route path="/blog/" component={Blog} />
				<Route path="/projects/:id/:slug" component={Post} />
				<Route path="/projects" component={Projects}/>
				<Route path="/meta/:id" component={Meta}/>
				<Route path="/meta/" component={Meta}/>
				<Route component={NotFound}/>
			</Switch>
		</Layout>
	);
}

export default withAddons(App);
