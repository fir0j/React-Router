import React, { Fragment, useState } from 'react';
import {
	BrowserRouter as Router,
	Link,
	Route,
	Switch,
	Redirect,
	useParams,
	useRouteMatch,
	useLocation,
	useHistory
} from 'react-router-dom';

// Home Page
const Homepage = () => (
	<Fragment>
		<h1>Home page</h1>
	</Fragment>
);

// About Page
const About = () => {
	// getting url and path dynamically instead of manually typing in <Link/> component
	const { url, path } = useRouteMatch();

	// const name =  props.match.params.name
	// or by distructuring props as {match:{params:{name}}}
	// or by using react-router-dom hooks like below
	// Props or placeholder(:) can only be received by the component to which prop has been passed.

	return (
		<Fragment>
			<ul>
				<li>
					<Link to={`${url}/firoj`}>Firoj</Link>
				</li>
				<li>
					<Link to={`${url}/offrose`}>Offrose</Link>
				</li>
				<li>
					<Link to={`${url}/sakina`}>Sakina</Link>
				</li>
				<li>
					<Link to={`${url}/saharoj`}>Saharoj</Link>
				</li>
			</ul>

			<Switch>
				<Route path={`${path}/:name`}>
					<Welcome />
				</Route>
			</Switch>
		</Fragment>
	);
};

const Welcome = () => {
	const { name } = useParams();
	return (
		<Fragment>
			<p>Welcome {name}</p>
		</Fragment>
	);
};

// Contact Page
const Contact = () => {
	return (
		<Fragment>
			<h1>Contact Page</h1>
		</Fragment>
	);
};

// Link is similar to <a> tag and to is similar to href attribute in html.

const Navbar = () => {
	return (
		<Fragment>
			<nav>
				<ul className="flex justify-around max-width-xl">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
					<li>
						<Link to="/signin">
							<button>SignIn</button>
						</Link>
					</li>
				</ul>
			</nav>
		</Fragment>
	);
};

// <BrowserRouter/> component needs monitors the route change
// It is better to wrap all Routes with <Switch/> Component to ensure rendering of only one path (that which matches first) at a time in case more than one match found.
// exact means full path need to be matched in order for the components to render
// if no path attribute is set on Route compoenent, it is default for rendering no path is matched( useful in scenerio like page not found)
// using children attribute, all the components' params cab accessed into the child component

export default function TurtorialApp() {
	const [ isAuthenticated, setIsAuthenticated ] = useState(true);

	return (
		<Router>
			<Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
			<main>
				<Switch>
					<Route exact path="/">
						<Homepage />
					</Route>
					{isAuthenticated ? (
						<Fragment>
							<Switch>
								<Route path="/about">
									<About />
								</Route>
								<Route path="/contact">
									<Contact />
								</Route>
								<Route render={() => <h1>404: page not found</h1>} />
							</Switch>
						</Fragment>
					) : (
						<Fragment>
							<Redirect to="/" />
						</Fragment>
					)}
				</Switch>
			</main>
		</Router>
	);
}
