// Include React
var React = require('react');
var axios = require('axios');
// Included all of the React Router dependencies
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var Results = require('./Children/Results');
var Saved = require('./Children/Saved');

// Helper Function
var helpers = require('../utils/helpers.js');

var Main = React.createClass({
     // Here we set a generic state associated with the number of click

	getInitialState: function(){
		return {
			search_term: "",
			begin_year: "19900701",
               end_year: "20000701",
		}
	},

     handleChange: function(event){

    	// Here we create syntax to capture any change in text to the query terms (pre-search).
    	// See this Stack Overflow answer for more details:
    	// http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
    	var newState = {};
    	newState[event.target.id] = event.target.value;
    	this.setState(newState);

	},

     // If the component changes (i.e. if a search is entered)...handleClick
     handleClick: function(){
          // Run the query for the address
          helpers.runQuery(this.state.search_term, this.state.begin_year, this.state.end_year)
               .then(function(data){
                    //console.log(data);
                    //var string = JSON.stringify(data);
                    this.setState({results0: data[0][0]});
                    this.setState({results1: data[1][0]});
                    this.setState({results2: data[2][0]});
                    this.setState({results3: data[3][0]});
                    this.setState({results4: data[4][0]});
                    this.setState({url0: data[0][1]});
                    this.setState({url1: data[1][1]});
                    this.setState({url2: data[2][1]});
                    this.setState({url3: data[3][1]});
                    this.setState({url4: data[4][1]});

                    //console.log(string);
               }.bind(this))/*.then(function(data) {
               }.bind(this))*/
     },

	// Here we render the component
	render: function(){

		return(

			<div className="container">

				<div className="row">

					<div className="jumbotron text-center">
						<h2>New York Times MERN Stack Article Search App</h2>
						<p><em>Search for and annotate articles of interest!</em></p>
						{/* <a href="#/info"><button className="btn btn-default">Info</button></a>
						<a href="#/chat"><button className="btn btn-default">Comments</button></a> */}
					</div>

					<div className="row">
                              <div className="col-lg-12">
                                   <div className="panel panel-default">
                                        <div className="panel-heading">
                                             <h3 className="panel-title text-center">Search</h3>
                                        </div>
                                        <div className="panel-body">
                                        <form>
                                             <div className="form-group">
                                                  <h4 className="text-center"><strong>Topic</strong></h4>

                                                  {/*Note how each of the form elements has an id that matches the state. This is not necessary but it is convenient.
                                                       Also note how each has an onChange event associated with our handleChange event.
                                                  */}
                                                  <input type="text" className="form-control text-center" id="search_term" onChange= {this.handleChange} required/>
                                                  <br />
                                                  <h4 className="text-center"><strong>Enter a Start Date (YYYYMMDD)</strong></h4>
                                                  <input type="text" className="form-control text-center" id="begin_year" onChange= {this.handleChange} required/>
                                                  <br />
                                                  <h4 className="text-center"><strong>Enter an End Date (YYYYMMDD)</strong></h4>
                                                  <input type="text" className="form-control text-center" id="end_year" onChange= {this.handleChange} required/>
                                                  <br />
                                                  <button type="button" className="btn btn-primary btn-block text-center" onClick={this.handleClick}>Search</button>
                                             </div>
                                        </form>
                                        </div>
                                   </div>
                              </div>
					</div>

					<div className="row">

						{/*Added this.props.children to dump all of the child components into place*/}
                              <Results results0={this.state.results0} results1={this.state.results1} results2={this.state.results2} results3={this.state.results3} results4={this.state.results4} url0={this.state.url0} url1={this.state.url1} url2={this.state.url2} url3={this.state.url3} url4={this.state.url4}/>

					</div>


				</div>

			</div>
		)
	}
});

module.exports = Main;