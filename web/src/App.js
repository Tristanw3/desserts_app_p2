import React from 'react';
import './App.css';

class App extends React.Component {
	state = {
		foods: []
	};

	componentDidMount() {
		fetch('/api/foods').then((response) => response.json()).then((json) => {
			this.setState({ foods: json });
		});
	}

	render() {
		const foodElements = this.state.foods.map((food) => (
			<li>
				{food.title}, {food.cost}
			</li>
		));
		return (
			<div className="App">
				
				
				<header className="App-header">
					Delicious foods!!
					<ul>{foodElements}</ul>
				</header>
			</div>
		);
	}
}

export default App;
