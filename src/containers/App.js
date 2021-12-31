import React, { Component } from 'react';
import CardList from '../components/card-list/card-list.com';
import SearchBox from '../components/search-box/search-box.com';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: '',
		};
	}

	setSearchFieldState = (event) => {
		console.log(event.target.value);
		this.setState({ searchField: event.target.value });
	};

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => this.setState({ monsters: users }));
	}
	
	render() {
		const { monsters, searchField } = this.state;

		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);
		
		return (
			<div className='App'>
				<h1>Monsters Rolodex</h1>
				<SearchBox placeholder={'Search Monsters...'} handleChange={this.setSearchFieldState} />
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
