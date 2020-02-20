import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch, Redirect, useParams } from 'react-router-dom';

// Home Page
const Homepage = () => (
	<Fragment>
		<h1>Home</h1>
		<FakeText />
	</Fragment>
);

// About Page
const About = (props) => {
	// const name =  props.match.params.name
	// or by distructuring props as {match:{params:{name}}}
	// or by using react-router-dom hooks like below
	// Props or placeholder(:) can only be received by the component to which prop has been passed.

	console.log(props);
	const { name } = useParams();
	return (
		<Fragment>
			{name !== 'firoj' ? <Redirect to="/" /> : null}
			<h1>About {name}</h1>
			<FakeText />
		</Fragment>
	);
};

// Contact Page
const Contact = () => {
	return (
		<Fragment>
			<h1>Contact</h1>
			<FakeText />
		</Fragment>
	);
};

const SignedIn = () => {
	return (
		<Fragment>
			<p>Welcome!!!</p>
		</Fragment>
	);
};

const NotSignedIn = () => (
	<Fragment>
		<p>You are not signed in Yet.</p>
	</Fragment>
);

const FakeText = () => (
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
		magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
		pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
		laborum.
	</p>
);

const Child = () => {
	let { name } = useParams();

	return (
		<div>
			<h3>Hi: {name}</h3>
		</div>
	);
};

// Link is similar to <a> tag and to is similar to href attribute in html.

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
	const name = 'firoj';

	return (
		<Fragment>
			<nav>
				<ul className="flex justify-around max-width-xl">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						{/* dynamically adding route path */}
						<Link to={`/about/${name}`}>About</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
					<li>
						<Link to="/signin">
							<button onClick={() => setIsAuthenticated(!isAuthenticated)}>SignIn</button>
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

export default function App() {
	const [ isAuthenticated, setIsAuthenticated ] = useState(true);

	return (
		<Router>
			<Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
			<main>
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route exact path="/notsignedin" component={NotSignedIn} />
					{/* <Route component={NotSignedIn} /> */}
					{isAuthenticated ? (
						<Fragment>
							<Route path="/about/:name" component={About} children={<Child />} />
							<Route path="/contact" component={Contact} />
							<Route path="/signin" component={SignedIn} />
							{/* <Route render={() => <h1>404: page not found</h1>} /> */}
						</Fragment>
					) : (
						<Redirect to="/notsignedin" />
					)}
				</Switch>
			</main>
		</Router>
	);
}
