import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
	state = {
		fishes: {},
		order: {},
	}

	addFish = (fish) => {
		// 1. Take a copy if the existing STATE
		const fishes = {...this.state.fishes}
		// 2. Add our new fish to the fishhes variable
		fishes[`fish${Date.now()}`] = fish
		// 3. Set the fishes object to STATE
		// in ES6 if your propety and value is the same things you can just pass fishes instead of fishes: fishes
		this.setState({
			fishes: fishes 
		});
	}

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header  tagline="Fresh Seafood Market"/>
				</div>
				<Order />
				<Inventory addFish={this.addFish} />
			</div>
			)
	}
}

export default App