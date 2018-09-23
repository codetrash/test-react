import React from 'react'
import Button from '../../components/Button';


class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isAuth: false,
			name: "Budy",
			list: null,
			keyword: ""
		};
		
		this.link = "https://cdn.rawgit.com/kevinhermawan/ca5e0083648ba5ffb2421808d972dd9c/raw/c29c7ee02849b58024fb6a058acae33bde38cbd3/react-blog-example.json";
		
	}
	
	// handling an Event
	checkLogin() {
		console.log(this)
		this.setState({
			isAuth: true
		});
		
		this.constructData()
		
	}
	
	// handling form
	handleSubmit = (event) => {
		this.setTate({
			name: event.target.value
		});
	}
	
	constructData() {
		this.fetchData().then((result) => {
			this.setState({
				list: result
			});
		});	
	}
	
	async fetchData() {
		try {
			let f = await fetch(this.link);
			let g = await f.json();
			return g;
		} catch (e) {
			console.log('Failed fetching data');
		}
	}
	
	handleSearch = (event) => {
		let input = event.target.value;
		this.setState({ keyword: input })
		
	}
	
	render() {
		console.dir(this)
		return (
			<div>
				<Button onClick={ this.checkLogin.bind(this) } size="lg">Load Data</Button>
				<div>Hi, {this.state.isAuth ? this.state.name : 'User'}</div>
				<input type="text" onKeyUp={this.handleSearch} placeholder="Search.."></input>
				<ul>
					{ this.state.list &&
						this.state.list.filter((itm) => {
							return itm.title.toLowerCase().indexOf(this.state.keyword.toLowerCase()) > -1;
						})
						.map((item, key) => {
							return <li key={key}>{item.title}</li>
						}) 
					}
				</ul>
			</div>
		);
	}
}

export default Home;