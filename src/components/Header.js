import React from 'react';

// A STF "Stateless Functional Component"
// Use this when you only pass data via props and retrun some JSX
// Simplyfied Code Below w/implicit return
// Always remember to remove this. when calling data, use props.
const Header = (props) => (
		<header className="top">
				<h1>
					Catch 
					<span className="ofThe">
						<span className="of">Of</span>
						<span className="the">The</span>
					</span>
					Day
				</h1>
				<h3 className="tagline">
					<span>{props.tagline}</span>
				</h3>
			</header>
	)

export default Header

// This below has been commented out because it was refactored to a Stateless Functional Component

// class Header extends React.Component {
// 	render() {
// 		return (
// 			<header className="top">
// 				<h1>
// 					Catch 
// 					<span className="ofThe">
// 						<span className="of">Of</span>
// 						<span className="the">The</span>
// 					</span>
// 					Day
// 				</h1>
// 				<h3 className="tagline">
// 					<span>{this.props.tagline}</span>
// 				</h3>
// 			</header>
// 			)
// 	}
// }
