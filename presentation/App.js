import React from 'react';

const images = {
  grad: require("../assets/grad.gif"),
};

class App extends React.Component {
	constructor(props) {
		super(props);
    this.state = { hours: 0, bootcamps: 0, weeks: 0, years: 0, grad: false };
		this.handleGraduation = this.handleGraduation.bind(this);
		this.yearCalc = this.yearCalc.bind(this);
	}

	yearCalc(weeks) {
		let { years } = this.state;
		if(weeks % 44 === 0 )
		  return years + 1
		else
		  return years
	}

	handleGraduation() {
		let { hours, bootcamps, weeks, years } = this.state;
		let newGrad = false;
		if(hours === 0)
		  newGrad = true
		let newWeeks = weeks + 11;
		this.setState({ 
			hours: hours + 440, 
			bootcamps: bootcamps + 1,
			weeks: newWeeks,
			years: this.yearCalc(newWeeks),
			grad: newGrad,
	  });
	}

  render() {
		let { hours, bootcamps, weeks, years, grad } = this.state;
		if(grad)
		  return(
				<div onClick={ () => this.setState({ grad: false })} className='center'>
					<img className='responsive-img' src={images.grad.replace("/", "")} />
				</div>
			);
		else
			return(
				<div>
					<h3 style={{ color: 'white' }}>Total Hours Coded: { hours }</h3>
					<h3 style={{ color: 'white' }}>Total Bootcamps Attended: { bootcamps }</h3>
					<h3 style={{ color: 'white' }}>Total Weeks Coding: { weeks }</h3>
					<h3 style={{ color: 'white' }}>Total Years Coding: { years }</h3>
					<button className='btn btn-large' onClick={ this.handleGraduation }>Graduate Me!</button>
				</div>
			);
  }
}

export default App;

