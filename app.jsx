import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header.jsx';
import BookSearch from './components/BookSearch.jsx';
import BookResults from './components/BookResults.jsx';
import BookDetails from './components/BookDetails.jsx';

class App extends React.Component {
   render() {
      return (
      	<div>
	        <Header/>
	        <BrowserRouter>
	        	<Switch>
	        		<Route exact={true} path="/" component={BookSearch}/>
	        		<Route path="/book/:id" component={BookDetails}/>
	        	</Switch>
	        </BrowserRouter>
        </div>
         
      );
   }
}

export default App;