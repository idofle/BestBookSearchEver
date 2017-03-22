import React from 'react';
import GoogleBooksService from '../lib/GoogleBooksSearch.js';
import BookResults from './BookResults.jsx'

class BookSearch extends React.Component {

	constructor(props) {
      super(props);
		
      this.state = {
         searchTerm: (this.props.location.search ? this.props.location.search.match(/q=.*((?=&)|$)/i)[0].slice(2) : ''), // using search term from url if applicable
         searchState: 0, // 0 - No Search, 1 - Loading, 2 - Success, 3 - Errorת 4 - Nם Results
         results: null,
         errorMessage: ""
      }

      this.updateState = this.updateState.bind(this);
      this.searchBooks = this.searchBooks.bind(this);

      if (this.state.searchTerm){
      	this.searchBooks();
      }
    };

   updateState(e) {
      this.setState({searchTerm: e.target.value});
   }

   searchBooks(){
   	  let success = (results) => {
   	  	  this.setState({
   	  	  	results: results,
   	  	  	searchState: results.items ? 2 : 4
   	  	  });
   	  	  this.forceUpdate();
   	  };

   	  let fail = (error) => {
   	  	this.setState({
   	  	  	results: null,
   	  	  	searchState: 3,
   	  	  	results: error
   	  	  });
   	  	// typically log the error as well.
   	  };

  	  GoogleBooksService.searchBooks(this.state.searchTerm, success, fail)
  	  this.props.history.push(`/?q=${this.state.searchTerm}`);
  	  this.setState({searchState: 1});	
   }

   render() {
      return (
         <div>
            <input type="text" value={this.state.searchTerm} onChange={this.updateState} />
            <input type="button" value="Search" onClick={this.searchBooks}/><br/>
            {this.state.searchState == 1 ? <img src="../images/loading-book.gif"/> : null}
            {this.state.searchState == 2 ? <BookResults data={this.state.results}/> : null}
            {this.state.searchState == 3 ? <div><h2>An Error Has occured</h2><p>{this.state.results.error.message}</p></div> : null}
            {this.state.searchState == 4 ? <div><h2>No matching results found.</h2></div> : null}
         </div>
      );
   }
}

export default BookSearch;