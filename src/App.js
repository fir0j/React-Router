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
const HomePage = () => (
	<Fragment>
		<h1>Home page</h1>
	</Fragment>
);

const Welcome = () => {
	const { name } = useParams();
	return (
		<Fragment>
			<p> About {name}</p>
		</Fragment>
	);
};

// About Page
const AboutPage = () => {
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

// Contact Page
const ContactPage = () => {
	return (
		<Fragment>
			<h1>Contact Page</h1>
		</Fragment>
	);
};

function ProfilePage() {
	let history = useHistory();

	return fakeAuth.isAuthenticated ? (
		<Fragment>
			<p>Welcome to your ProfilePage !</p>
			<button
				className="border"
				onClick={() => {
					fakeAuth.signout(() => history.push('/'));
				}}
			>
				Sign out
			</button>
		</Fragment>
	) : (
		<p>You are not logged in.</p>
	);
}

// Redirect vs push vs history in react-router-dom

const LoginPage = () => {
	let history = useHistory();
	let location = useLocation();

	let { from } = location.state || { from: { pathname: '/' } };
	let login = () => {
		fakeAuth.authenticate(() => {
			history.replace(from);
		});
	};

	return (
		<div>
			<p>You must log in to view the page at {from.pathname}</p>
			<button className="border" onClick={login}>
				Log in
			</button>
		</div>
	);
};

const fakeAuth = {
	isAuthenticated: false,

	authenticate(callback) {
		fakeAuth.isAuthenticated = true;
		callback();
	},

	signout(callback) {
		fakeAuth.isAuthenticated = false;
		callback();
	}
};

// Protecting Routes using react-router-dom

function PrivateRoute({ children, ...rest }) {
	// children contains all the child component of </Route> as props.
	// rest is the props passed to this component
	const { location, ...others } = rest;
	return (
		<Route
			{...rest}
			render={() =>
				fakeAuth.isAuthenticated ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: location }
						}}
					/>
				)}
		/>
	);
}

// <BrowserRouter/> component needs monitors the route change
// It is better to wrap all Routes with <Switch/> Component to ensure rendering of only one path (that which matches first) at a time in case more than one match found.
// exact means full path need to be matched in order for the components to render
// if no path attribute is set on Route compoenent, it is default for rendering no path is matched( useful in scenerio like page not found)
// using children attribute, all the components' params can accessed into the child component

// location.pathname represents the root-relative url.
// match.url represents the matched portion of the URL, so maybe a portion of location.pathname in case complete url is not matched.

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
						<Link to="/profile">Profile</Link>
					</li>
				</ul>
			</nav>
		</Fragment>
	);
};

// <Route/> component expects the path string from the <Link/> Component called pathname which is always relative to /.  and tries to the path string specified to itself.
// The portion of the pathname which matched with the path callled url in react-router-dom so it may not start from / always. Hence in case whole path name is matched, pathname and url looks same.
// Link is similar to <a> tag and to is similar to href attribute in html.
// to attribute takes path/pathname as string and passes to all the Route components
// whenever is pathname is matched with path, an object is passed as props to the child component which is inside the <Route/>
// the looks like {path: " same PATH attribute from <Route/>", location:" PATHNAME, state:{from: ""} ", computedMatch:" URL"}.

export default function TurtorialApp() {
	const [ isAuthenticated, setIsAuthenticated ] = useState(true);

	return (
		<Router>
			<Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
			<main>
				<Switch>
					<Route exact path="/">
						<HomePage />
					</Route>
					<Route path="/about">
						<AboutPage />
					</Route>
					<Route path="/contact">
						<ContactPage />
					</Route>
					<PrivateRoute path="/profile">
						<ProfilePage />
					</PrivateRoute>
					<Route path="/login">
						<LoginPage />
					</Route>
					<Route render={() => <h1>404: page not found</h1>} />
				</Switch>
			</main>
		</Router>
	);
}
