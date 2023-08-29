import React , {Component} from 'react';
import Card from '../Components/Card';
import CardList from '../Components/CardList';
//import { robots } from './robots';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll'
import '../Containers/App.css'


class App extends Component  {
	constructor(){
		super()
		this.state =  {
			//robots:robots,
			robots:[],
			searchfield:''
		}
	}
componentDidMount() {
	fetch('https://jsonplaceholder.typicode.com/users').then(response =>response.json())
	.then(users => this.setState({robots :users}));
}
	onSearchChange = (event) => {
		this.setState({searchfield:event.target.value})
		
	}
	render() {
		const {robots ,searchfield } = this.state;
		const filterrobots =robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		})
		return !robots.length ?
			 <h1>Loading</h1> :
		(
		<div className='tc'>
		<h1>RoboFriends</h1>
		<SearchBox searChange={this.onSearchChange} />
		<Scroll >
		 <CardList robots={filterrobots} />
		</Scroll >
		</div>
		)
	
	}
}


export default App;