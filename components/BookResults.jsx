import React from 'react';
import {Link} from 'react-router-dom';

class BookResults extends React.Component {
	constructor(props) {
      super(props);
		
    };

   render() {
      return (
         <div>
         	<table>
         		<thead>
					  <tr>
					     <th>Title</th>
					     <th>Sub Title</th>
					     <th>Author</th>
					     <th>Publication Date</th>
					  </tr>
			  	</thead>
         		<tbody>
         			{
         				this.props.data.items.map((book, i) => <BookRow key = {i} data = {book} />)
         			}
         		</tbody>
         	</table>
         </div>
      );
   }
}


class BookRow extends React.Component {
   render() {
      return (
         <tr>
            <td><Link to={`/book/${this.props.data.id}`}>{this.props.data.volumeInfo.title}</Link></td>
            <td>{this.props.data.volumeInfo.subtitle}</td>
            <td>{this.props.data.volumeInfo.authors ? this.props.data.volumeInfo.authors.join(",") : null}</td>
            <td>{this.props.data.volumeInfo.publishedDate}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
         </tr>
      );
   }
}

export default BookResults;