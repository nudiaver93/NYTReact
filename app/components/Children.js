// Include React
var React = require('react');
var axios = require('axios');

var buttonStyle = {
  marginRight: '20px',
  marginLeft: '10px',
  clear: 'both',
  marginBottom: '10px'
};

var articleStyle = {
  display: 'inline-block',
  minWidth: '500px'
};

var Saved = require('./Saved');

// This is the results component
var Results = React.createClass({

     getInitialState: function(){
		return {
			title: "",
			url: ""
		}
	},

     saveArticle: function(event){
          var theurl = event.currentTarget.dataset.url
          var thetitle =event.currentTarget.dataset.title
          this.setState({title: thetitle});
          this.setState({url: theurl});
          axios.post('/api', {title: thetitle, url: theurl})
         .then(function(results){
              console.log("Posted to MongoDB");
         })
         axios.get('/api')
        .then(function(results){
            console.log("secretword" + JSON.stringify(results));
           this.setState({title0: results.data[0].title});
           this.setState({url0: results.data[0].url});
           this.setState({date0: results.data[0].date});
           this.setState({title1: results.data[1].title});
           this.setState({url1: results.data[1].url});
           this.setState({date1: results.data[1].date});
           this.setState({title2: results.data[2].title});
           this.setState({url2: results.data[2].url});
           this.setState({date2: results.data[2].date});
           this.setState({title3: results.data[3].title});
           this.setState({url3: results.data[3].url});
           this.setState({date3: results.data[3].date});
           this.setState({title4: results.data[4].title});
           this.setState({url4: results.data[4].url});
           this.setState({date4: results.data[4].date});
      }.bind(this))
	},
	// Here we render the function
	render: function(){

		return(

                    <div className="col-lg-12">
          			<div className="panel panel-default">
          				<div className="panel-heading">
          					<h3 className="panel-title text-center">Results</h3>
          				</div>
          				<div className="panel-body text-left">
          						<h4><button style={buttonStyle} className="btn btn-success btn-lg" type="button" onClick={this.saveArticle} data-url={this.props.url0} data-title={this.props.results0}>Save</button><a style={articleStyle} href={this.props.url0} target="_blank" >{this.props.results0}</a></h4>
                                        <h4><button style={buttonStyle} className="btn btn-success btn-lg" type="button" onClick={this.saveArticle} data-url={this.props.url1} data-title={this.props.results1}>Save</button><a style={articleStyle} href={this.props.url1} target="_blank" >{this.props.results1}</a></h4>
                                        <h4><button style={buttonStyle} className="btn btn-success btn-lg" type="button" onClick={this.saveArticle} data-url={this.props.url2} data-title={this.props.results2}>Save</button><a style={articleStyle} href={this.props.url2} target="_blank" >{this.props.results2}</a></h4>
                                        <h4><button style={buttonStyle} className="btn btn-success btn-lg" type="button" onClick={this.saveArticle} data-url={this.props.url3} data-title={this.props.results3}>Save</button><a style={articleStyle} href={this.props.url3} target="_blank" >{this.props.results3}</a></h4>
                                        <h4><button style={buttonStyle} className="btn btn-success btn-lg" type="button" onClick={this.saveArticle} data-url={this.props.url4} data-title={this.props.results4}>Save</button><a style={articleStyle} href={this.props.url4} target="_blank" >{this.props.results4}</a></h4>
          						{/* <p>{this.props.address}</p> */}

          				</div>
          			</div>

                    <div className="row">

                         {/*Added this.props.children to dump all of the child components into place*/}
                         <Saved title0={this.state.title0} url0={this.state.url0} date0={this.state.date0} title1={this.state.title1} url1={this.state.url1} date1={this.state.date1} title2={this.state.title2} url2={this.state.url2} date2={this.state.date2} title3={this.state.title3} url3={this.state.url3} date3={this.state.date3} title4={this.state.title4} url4={this.state.url4} date4={this.state.date4}/>

                    </div>
               </div>

		)
	}
});

// Export the component back for use in other files
module.exports = Results;