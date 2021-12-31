import React, { Component } from 'react';
import CardList from '../components/card-list/card-list.com';
import SearchBox from '../components/search-box/search-box.com';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: ''
		};
	}

	setSearchFieldState = (event) => {
		console.log(event.target.value)
		this.setState({ searchField: event.target.value})
	}

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }
	render() {
		return (
			<div className='App'>
				<SearchBox searchfield={this.setSearchFieldState}/>
				<CardList monsters={this.state.monsters}/>
			</div>
		);
	}
}

export default App;
