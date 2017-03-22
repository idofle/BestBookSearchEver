import React from 'react';
import GoogleBooksService from '../lib/GoogleBooksSearch.js';
import BookResults from './BookResults.jsx'

class BookSearch extends React.Component {

	constructor(props) {
      super(props);
		
      this.state = {
         searchTerm: '',
         showResults: true,
         results: {items:[]},
      }

      this.updateState = this.updateState.bind(this);
      this.searchBooks = this.searchBooks.bind(this);
    };

   updateState(e) {
      this.setState({searchTerm: e.target.value});
   }

   searchBooks(){
   	  let success = (results) => {
   	  	  this.setState({
   	  	  	results: results,
   	  	  	showResults: true
   	  	  });
   	  	  this.forceUpdate();
   	  };

   	  let fail = function(){
   	  	console.log("fail");
   	  };

   	  GoogleBooksService.searchBooks(this.state.searchTerm, success, fail)
   }

   render() {
      return (
         <div>
            <input type="text" value={this.state.searchTerm} onChange={this.updateState} />
            <input type="button" value="Search" onClick={this.searchBooks}/>
            {this.state.showResults ? <BookResults data={this.state.results}/> : null}
         </div>
      );
   }
}

export default BookSearch;