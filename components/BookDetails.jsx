import React from 'react';
import GoogleBooksService from '../lib/GoogleBooksSearch.js';
import {Link} from 'react-router-dom';
import Parser from 'html-react-parser'

class BookDetails extends React.Component {

	constructor(props) {
      super(props);
		
      let success = (response) => {
         this.setState({
            book: response
         });
      }
      GoogleBooksService.getBookDetails(this.props.match.params.id, success);

      this.state = {};
    };

   render() {

      let details = null
      if (this.state.book){
            details = <div>
                        <h2>{this.state.book.volumeInfo.title}</h2>
                        {this.state.book.volumeInfo.authors ? <p>Authors:{this.state.book.volumeInfo.authors.join(",")}</p> : null}
                        <p>Published Date: {this.state.book.volumeInfo.publishedDate}</p>
                        {Parser(this.state.book.volumeInfo.description)}
                     </div>;
      }


      return (
         <div>
            {details}
            <Link to="/">Go back to search.</Link>
         </div>
      );
   }
}



export default BookDetails;