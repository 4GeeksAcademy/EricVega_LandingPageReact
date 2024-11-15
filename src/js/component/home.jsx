import React from 'react';
import Navbar from './navbar';
import Jumbotron from './jumbotron';
import Card from './card';
import Footer from './footer';

const home = () => {
	return (
	  <div>
		<Navbar />
		<div className="centered-content">
		  <Jumbotron />
		  <div className="container my-5">
			<div className="row justify-content-center">
			  <div className="col-md-3">
				<Card title="Card title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque." buttonText="Find Out More!" />
			  </div>
			  <div className="col-md-3">
				<Card title="Card title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque." buttonText="Find Out More!" />
			  </div>
			  <div className="col-md-3">
				<Card title="Card title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque." buttonText="Find Out More!" />
			  </div>
			  <div className="col-md-3">
				<Card title="Card title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque." buttonText="Find Out More!" />
			  </div>
			</div>
		  </div>
		  <Footer />
		</div>
	  </div>
	);
  };
  
  export default home;
