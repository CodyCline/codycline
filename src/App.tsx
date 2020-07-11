import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { withAddons } from './components/hoc/addons/addons';
import { Home } from './pages/home';
import { Blog } from './pages/blog/blog';
import { Article } from './pages/blog/article';
import './App.css';

function App() {
	return (
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route path="/blog/:id" component={Article}/>
			<Route path="/blog/" component={Blog}/>
			<Route path="/projects"/>
			<Route path="/projects/:id"/>
		</Switch>
	);
}

export default withAddons(App);
