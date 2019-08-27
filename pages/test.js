import React,{Component} from 'react';

class Test extends Component
{
	componentDidMount()
	{
		const requestOptions = {
			method: 'POST',
			headers: { 
				'User-Agent': 'Fiddler',
				'Host': 'pln.lycafly.com',
				'Authorization': 'Basic 0b017b0c0d414e20ee0d2e4adbed686d7c297a6d2f8ec8f9eddc2016d9513482a086fe8712ef0530',
				'content-Type': 'application/json' },
		  };
		  fetch('https://pln.lycafly.com/Affiliate/Flight/Aw_SearchFlight',requestOptions)
			.then(response => response.json())
			.then(response => console.log(response))
			.catch(error => console.log(error));

		// ---------------
		// fetch('http://localhost:4002/flights?limit=10')
		// 	.then(response => response.json())
		//  	.then(response => console.log(response))
		//  	.catch(error => console.log(error));
	}
	render()
	{
		return(
			<h1>Hai</h1>
		)
	}
}

export default Test;